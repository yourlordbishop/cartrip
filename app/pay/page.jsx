"use client"
import React from 'react';
import { AppContext } from '@/lib/context';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/firebase.config';
import { doc, getDoc,updateDoc } from "firebase/firestore";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

export default function Pay() {
    const [bookingDoc,setBookingDoc] = React.useState({});
    const {packageId,setPackageId} = React.useContext(AppContext);

    const router = useRouter();

    React.useEffect( () => {
        packageId == undefined ? router.push("/dashboard") : null;

        async function fetchData () {
            const docRef = doc(db, "bookings", packageId);
            const docSnap = await getDoc(docRef);
            docSnap.exists() ? setBookingDoc(docSnap.data()) : null;
        }
        fetchData()
    },[]);
    
    const config = {
        public_key: "FLWPUBK_TEST-07eb955aba643e63f3c057bd00d016ff-X",
        tx_ref: Date.now(),
        amount: bookingDoc.bill,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        customer: {
          email: bookingDoc.email,
          phone_number: bookingDoc.phone,
          name: "john doe",
        },
        customizations: {
          title: "Cartrip Rental Limited",
          description: `Payment for rental with ID ${bookingDoc.carId}`,
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg', //replace this with the website logo
        },
    };
    
    const fwConfig = {
        ...config,
        text: 'Make Payment',
        callback: async response => {
            // update record after successful payment. 
            //We are creating a new firestor field called "paymentStatus"
            await updateDoc(doc(db,"bookings",packageId),{
                paymentStatus: response,
            })
            .then(() => {
                router.push(`/dashboard`)
            })
            .catch(e => {
                console.error(e)
            })

            closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {},
    };

    return (
        <div className="min-h-[460px] md:min-h-[520px] flex justify-center items-center">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl text-gray-800 text-center">Make Payment</h3>
                        
                        <blockquote>
                            <span className="block text-sm text-gray-700">Car ID: {bookingDoc.carId}</span>
                            <span className="block text-sm text-gray-700">Amount: NGN{bookingDoc.bill}</span>
                            <span className="block text-sm text-gray-700">Email: {bookingDoc.email}</span>
                        </blockquote>
                        
                        <FlutterWaveButton {...fwConfig} className="py-3 px-4 rounded-md bg-red-600 text-white uppercase"/>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}