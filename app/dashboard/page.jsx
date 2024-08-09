import Link from "next/link"
import { VscActivateBreakpoints } from "react-icons/vsc"
import { FaHistory,FaUserCircle,FaRegCreditCard } from "react-icons/fa"
import { BookingCard } from "@/Components/BookingCard"

export default function Dashboard () {
    return (
        <section className="grid lg:grid-cols-2 gap-8 py-12 px-2 md:px-6 lg:px-12">
            <article className="grid grid-cols-2 gap-4">
                <Link
                 href="/dashboard/book"
                className=" h-[200px] flex flex-col justify-center items-center bg-red-600 rounded-md p-4">
                 <VscActivateBreakpoints className="text-white text-2xl"/>
                 <span className="text-xl text-white">Book</span>
                </Link>
                <Link 
                href="/dashboard/book"
                    className=" h-[200px] flex flex-col justify-center items-center bg-red-600 rounded-md p-4">
                    <FaHistory className="text-white text-2xl"/>
                <span className="text-xl text-white">History</span>
                </Link>
                <Link 
                href="/dashboard/book"
                    className=" h-[200px] flex flex-col justify-center items-center bg-red-600 rounded-md p-4">
                    <FaUserCircle className="text-white text-2xl"/>
                <span className="text-xl text-white">Profile</span>
                </Link>
                <Link 
                href="/dashboard/book"
                    className=" h-[200px] flex flex-col justify-center items-center bg-red-600 rounded-md p-4">
                    <FaRegCreditCard className="text-white text-2xl"/>
                <span className="text-xl text-white">Pay</span>
                </Link>
            </article>
            <aside className="border border-gray-200 rounded-md p-4 md:p-6">
                <blockquote className="border-b border-gray-200 pb-4">
                    <p className="text-4xl">My Bookings</p>
                </blockquote>

                <div className="flex flex-col gap-4 md:gap-6">
                    <BookingCard/>
                </div>
            </aside>
        </section>
    )
}