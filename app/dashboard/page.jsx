"use client"
import { useState,useEffect } from "react";
import Link from "next/link";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { FaHistory,FaUserCircle,FaRegCreditCard } from "react-icons/fa";
import { BookingCard } from "@/components/BookingCard";
import { db } from "@/lib/firebase.config";
import { onSnapshot,collection,where,orderBy,query } from "firebase/firestore";

export default function Dashboard () {
    const [bookings,setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const reDocs = [];

            const q = query(
                collection(db,"bookings"),
                where("status","==","active"),
                orderBy("timecreated","desc")
            );

            onSnapshot(q, querSnapShot => {
                querSnapShot.forEach(doc => {
                    reDocs.push({
                        id:doc.id,
                        data:doc.data()
                    })
                })

                setBookings(reDocs);
            });
        }

        fetchBookings();
    },[])

    return (
        <section className="grid lg:grid-cols-2 gap-8 py-12 px-2 md:px-6 lg:px-12">
            <article className="grid grid-cols-2 gap-4">
                <Link 
                href="/cars" 
                className="h-[200px] flex flex-col justify-center items-center bg-red-600 rounded-md p-4">
                    <VscActivateBreakpoints className="text-white text-2xl"/>
                    <span className="text-xl text-white">Cars</span>
                </Link>
                <Link 
                href="/dashboard/history" 
                className="h-[200px] flex flex-col justify-center items-center bg-red-600 rounded-md p-4">
                    <FaHistory className="text-white text-2xl"/>
                    <span className="text-xl text-white">History</span>
                </Link>
                <Link 
                href="/dashboard/profile" 
                className="h-[200px] flex flex-col justify-center items-center bg-red-600 rounded-md p-4">
                    <FaUserCircle className="text-white text-2xl"/>
                    <span className="text-xl text-white">Profile</span>
                </Link>
                <Link 
                href="#" 
                className="h-[200px] flex flex-col justify-center items-center bg-red-600 rounded-md p-4">
                    <FaRegCreditCard className="text-white text-2xl"/>
                    <span className="text-xl text-white">Feauture</span>
                </Link>
            </article>

            <aside className="border border-gray-200 rounded-md p-4 md:p-6">
                <blockquote className="border-b border-gray-200 pb-4">
                    <p className="text-4xl">Recent Bookings</p>
                </blockquote>

                <div className="lg:max-h-[320px] flex flex-col gap-4 md:gap-6 overflow-y-scroll">
                    {bookings.map(booking => {
                        return (
                            <BookingCard 
                            key={booking.id}
                            docId={booking.id}
                            carId={booking.data.carId} 
                            timestamp={booking.data.timecreated}/>
                        )
                    })}
                </div>
            </aside>
        </section>
    )
}