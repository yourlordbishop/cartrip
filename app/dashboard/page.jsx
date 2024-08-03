import Link from "next/link"
import { VscActivateBreakpoints } from "react-icons/vsc"
import { FaHistory,FaUserCircle,FaRegCreditCard } from "react-icons/fa"

export default function Dashboard () {
    return (
        <section className="lg:grid lg:grid-cols-2 gap-8 py-12 px-2 md:px-6 lg:px-12">
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
            <aside className="bg-red-500">

            </aside>
        </section>
    )
}