"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import {CiMenuBurger} from "react-icons/ci"
import {IoCloseSharp} from "react-icons/io5"

const montserrat_thin_100 = Montserrat({
    subsets: ["latin"],
    weight: "100"
})

export default function Nav () {
    const [menu,setMenu] = useState(false);

    return (
        <>
        <nav className="h-[60px] flex justify-between items-center px-4 bg-black">
            <div>
                <Image
                width={54}
                height={54}
                src="/brands/mustang-logo.png"
                alt="brand logo"/>
            </div>

            <ul className="hidden lg:flex gap-8">
                <li>
                    <Link
                    className={`${montserrat_thin_100} text-yellow-50 text-lg`}
                    href="/">Home</Link>
                </li>
                <li>
                    <Link
                    className={`${montserrat_thin_100} text-yellow-50 text-lg`}
                    href="#">About Us</Link>
                </li>
                <li>
                    <Link
                    className={`${montserrat_thin_100} text-yellow-50 text-lg`}
                    href="#">Contact Us</Link>
                </li>
                <li>
                    <Link
                    className={`${montserrat_thin_100} text-yellow-50 text-lg`}
                    href="#">Account</Link>
                </li>
            </ul>

            <blockquote className="lg:hidden">
                {
                !menu
                ?
                <CiMenuBurger onClick={() => setMenu(true)} className="text-yellow-50 text-2xl"/> 
                : 
                <IoCloseSharp onClick={() => setMenu(false)} className="text-yellow-50 text-2xl"/> 
                }
            </blockquote>
        </nav>

        {/* MOBILE NAV */}

        {
        menu
        ?
        <div className="min-h-[180px] bg-black">
            <div className="h-[6px] bg-gradient-to-r from-yellow-500 via-blue-500 to-red-500"></div>
            <ul className="flex-col lg:flex gap-6 p-4">
                <li>
                    <Link
                    className={`${montserrat_thin_100} text-yellow-50 text-lg`}
                    href="/">Home</Link>
                </li>
                <li>
                    <Link
                    className={`${montserrat_thin_100} text-yellow-50 text-lg`}
                    href="#">About Us</Link>
                </li>
                <li>
                    <Link
                    className={`${montserrat_thin_100} text-yellow-50 text-lg`}
                    href="#">Contact Us</Link>
                </li>
                <li>
                    <Link
                    className={`${montserrat_thin_100} text-yellow-50 text-lg`}
                    href="#">Account</Link>
                </li>
            </ul>
        </div>
        : null
        }
        </>
    )
}