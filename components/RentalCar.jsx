"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { TextField,CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import { rules } from "@/helpers/booking_form_validation";
import { db } from "@/lib/firebase.config";
import { addDoc,collection } from "firebase/firestore";
import { useSession } from "next-auth/react";

export default function RentalCar ({carId,carClass,carType,seatCap,hRate,carImg}) {
    const [open, setOpen] = React.useState(false);
    const [progress, setProgress] = React.useState(false);
    const {data:session} = useSession();

    const router = useRouter();

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { handleSubmit,handleChange,touched,errors,values} = useFormik({
        initialValues: {duration:1,phone:"",address:"",comments:""},
        onSubmit: async () => {
            setProgress(true);

            await addDoc(collection(db,"bookings"),{
                carId:carId,
                duration:values.duration,
                phone:values.phone,
                address:values.address,
                comments:values.comments,
                status:"active",
                bill: null,
                email:session.user.email,
                uid:null,
                timecreated:new Date().getTime()
            })
            .then(() => {
                setProgress(false);
                router.push("/pay");
            })
            .catch((e) => {
                setProgress(false);
                throw new Error(e);
            })
        },
        validationSchema:rules
    });

    return (
        <>
        <div className="flex flex-col justify-between gap-3 bg-yellow-700 p-3 rounded-lg"> 
            <div className="flex justify-end">
                <p className="text-md font-light text-[#EEEEEE]">{carClass}</p>
            </div>
            <div className="flex justify-center items-center">
                <Image height={140} width={160} src={carImg} alt="economy option"/>
            </div>

            <button 
            onClick={handleClickOpen}
            className="bg-white px-4 py-2 rounded-md text-xl hover:bg-black hover:text-white">Book Now</button>

            <div className="flex justify-between gap-3 bg-[#EEEEEE] p-3 rounded-lg">
                <blockquote className="flex flex-col border border-gray-300 p-2 rounded-lg">
                    <span className="text-sm font-light text-gray-500">Car Type</span>
                    <span className="text-md text-gray-700 uppercase">{carType}</span>
                </blockquote>
                <blockquote className="flex flex-col border border-gray-300 p-2 rounded-lg">
                    <span className="text-sm font-light text-gray-500">Seating capacity</span>
                    <span className="text-md text-gray-700 uppercase">{seatCap} persons</span>
                </blockquote>
            </div>
            <blockquote className="flex flex-col border border-gray-300 p-2 rounded-lg bg-[#EEEEEE]">
                <span className="text-sm font-light text-gray-500">Hourly Rate</span>
                <span className="text-2xl text-gray-700 font-light uppercase">₦{hRate}</span>
            </blockquote>
        </div>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <ul className="grid grid-cols-3 gap-4 bg-gray-100 p-4 rounded-md">
                    <li className="text-lg text-center border-r border-gray-300 pr-2">{carClass}</li>
                    <li className="text-lg text-center border-r border-gray-300 pr-2">{carType}</li>
                    <li className="text-lg text-center">N{hRate}</li>
                </ul>

                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-4">
                        <TextField
                        label="Hours"
                        className="w-full"
                        variant="outlined"
                        type="number"
                        id="duration"
                        value={values.duration}
                        onChange={handleChange}/>
                        {errors && touched ? 
                        <span className="text-xs text-red-500 mt-1">{errors.duration}</span> : 
                        null}
                    </div>
                    <div className="mb-4">
                        <TextField
                        label="Phone number"
                        className="w-full"
                        variant="outlined"
                        type="tel"
                        id="phone"
                        value={values.phone}
                        onChange={handleChange}/>
                        {errors && touched ? 
                        <span className="text-xs text-red-500 mt-1">{errors.phone}</span> : 
                        null}
                    </div>
                    <div className="mb-4">
                        <TextField
                        multiline={true}
                        rows={2}
                        label="Address"
                        className="w-full"
                        variant="outlined"
                        type="text"
                        id="address"
                        value={values.address}
                        onChange={handleChange}/>
                        {errors && touched ? 
                        <span className="text-xs text-red-500 mt-1">{errors.address}</span> : 
                        null}
                    </div>
                    <div className="mb-4">
                        <TextField
                        multiline={true}
                        rows={2}
                        label="Comment"
                        className="w-full"
                        variant="outlined"
                        type="text"
                        id="comments"
                        value={values.comments}
                        onChange={handleChange}/>
                        {errors && touched ? 
                        <span className="text-xs text-red-500 mt-1">{errors.comments}</span> : 
                        null}
                    </div>

                    <Button 
                    type="submit" 
                    variant="contained" 
                    color="success" 
                    size="large">{progress ? <CircularProgress style={{color:"white"}}/> : <span>Continue</span>}</Button>
                </form>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}
//duration of rental
//comments
//date and time of booking