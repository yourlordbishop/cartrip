"use client"
import React from 'react';
import { useRouter,useSearchParams } from 'next/navigation';
import { PaystackButton } from 'react-paystack';
import { db } from '@/lib/firebase.config';
import { doc, getDoc,updateDoc } from "firebase/firestore";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Pay() {
    const [bookingDoc,setBookingDoc] = React.useState({});

    const router = useRouter();
    const params = useSearchParams();
    const documentId = params.get("id"); //gets the document id passed in on the browser
    
    React.useEffect( () => {
        async function fetchData () {
            !documentId ? router.push("/dashboard") : null;

            const docRef = doc(db, "bookings", documentId);
            const docSnap = await getDoc(docRef);
            docSnap.exists() ? setBookingDoc(docSnap.data()) : null;
        }
        fetchData()
    },[]);

    const handlePaystackSuccessAction = async (reference) => {
        // update record after successful payment. 
        //We are creating a new firestor field called "paymentStatus"
        await updateDoc(doc(db,"bookings",documentId),{
            paymentStatus: reference,
        })
        .then(() => {
            router.push(`/dashboard`)
        })
        .catch(e => {
            console.error(e)
        })
    };

    // when the Paystack dialog closed
    const handlePaystackCloseAction = () => router.push("/dashboard");

    const config = {
        reference: (new Date()).getTime().toString(),
        email: bookingDoc.email,
        amount: bookingDoc.bill * 100, //was multiplied by 100 to convert to kobo, because paystack wants it in kobo
        publicKey: "pk_test_7469db3bf77e8b277ee60983d29564681951e24a",
    }

    const componentProps = {
        ...config,
        text: 'Initiate Payment',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
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

                        <PaystackButton 
                        {...componentProps} 
                        className="py-3 px-4 rounded-md bg-red-600 text-white uppercase" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}