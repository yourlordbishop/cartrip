"use client"
import { useState,useContext } from "react";
import { AppContext } from "@/lib/context";
import Image from "next/image";
import { inventory } from "@/lib/car-inventory";
import { CiTrash } from "react-icons/ci";
import { db } from "@/lib/firebase.config";
import { deleteDoc,doc,updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export function BookingCard ({carId,timestamp,docId}) {
    const [activityIndicator,setActivityIndicator] = useState(false);
    const car = inventory.filter(item => item.id === carId)[0];
    const {setPackageId} = useContext(AppContext);

    const router = useRouter();

    const eventDate = new Date(timestamp);
    const day = eventDate.toLocaleString('us',{day:"numeric"});
    const month = eventDate.toLocaleString('us',{month:"short"});
    const date = `${day} ${month} ${eventDate.getFullYear()}`;
    const time = `${eventDate.getHours()}:${eventDate.getMinutes()}`;

    // calculate time spent since booking
    const now = new Date().getTime();
    const diff = now - timestamp;
    const inMins = diff / 1000 / 60;
    const inHrs = diff / 1000 / 60 / 60;

    // calculate time spent and current bill
    function timeUsed (mins,hrs) {
        let finalizedHrs = 0;
        let finalizedMins = 0;

        if (mins >= 60) {
            finalizedHrs = Math.floor(hrs + (mins / 60));
            finalizedMins = Math.floor(mins % 60);
        } else {
            finalizedHrs = Math.floor(hrs);
            finalizedMins = Math.floor(mins);
        }

        let baseCost = finalizedHrs * car.rate;
        let addedCost = finalizedMins * (car.rate / 60);
        const cost = baseCost + addedCost;

        return {
            hrs: finalizedHrs,
            mins: finalizedMins,
            bill: Math.ceil(cost)
        }
    }

    async function UpdateBooking () {
        setActivityIndicator(true);

        await updateDoc(doc(db,"bookings",docId),{
            status: "ended",
            bill: timeUsed(inMins,inHrs).bill
        })
        .then(() => {
            setActivityIndicator(false);
            console.log("updated");
            router.push("/pay");
            setPackageId(docId)//set packageId for global variable (useContext)
        })
        .catch(e => {
            console.error(e)
            setActivityIndicator(false);
        })
    } 

    return (
        <>
        <div className="border border-gray-200 rounded-md p-1">
            <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between gap-4 md:gap-6 bg-gray-200 rounded-md p-2 md:p-4">
                <div>
                    <Image width={120} height={180} src={car.thumbnail} alt="car"/>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                    <ul className="flex flex-col gap-2 md:gap-0 md:justify-between">
                        <li className="font-bold">{car.type}</li>
                        <li>{car.class}</li>
                        <li>{`${date}, ${time}`}</li>
                    </ul>

                    <div className="flex flex-col gap-1 md:justify-between">
                        {/* indicator */} 
                        
                        <p className="text-md">
                            <span>{timeUsed(inMins,inHrs).hrs}Hrs</span>, <span>{timeUsed(inMins,inHrs).mins}Mins</span>
                        </p>

                        <p className="text-lg text-green-500 font-bold">N{timeUsed(inMins,inHrs).bill}</p>

                        <ul className="flex flex-row items-center gap-6">
                            <li
                            onClick={UpdateBooking} 
                            className="text-red-500 font-light text-xs cursor-pointer">End Rental</li>
                            <li
                            onClick={async () => {
                                setActivityIndicator(true);

                                await deleteDoc(doc(db,"bookings",docId))
                                .then(() => {
                                    console.log("deleted");
                                    setActivityIndicator(false);
                                })
                                .catch(error => {
                                    console.error("an error has occured",error);
                                    setActivityIndicator(false);
                                })
                            }}
                            ><CiTrash className="text-gray-800 text-lg cursor-pointer"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={activityIndicator}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
        </>
    )
}