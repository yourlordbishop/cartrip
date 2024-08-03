"use client"
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import {CiMenuBurger} from "react-icons/ci"
import {IoCloseSharp} from "react-icons/io5"
import { GeneralNavBar } from "./nav_components/GeneralNavBar";
import { DashboardNavBar } from "./nav_components/DashboardNavBar";

const montserrat_thin_100 = Montserrat({
    subsets: ["latin"],
    weight: "100"
})

export default function Nav () {
    const [menu,setMenu] = useState(false);
    const path = usePathname();
    console.log(path);

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

            {
                path.split("/").includes("dashboard")
                 ? <DashboardNavBar cssClass="flex-col lg:flex gap-6 p-4"/>
                  : <GeneralNavBar cssClass="hidden lg:flex gap-8"/>
            }

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

            {
                path.split("/").includes("dashboard")
                 ? <DashboardNavBar cssClass="flex-col lg:flex gap-6 p-4"/>
                  : <GeneralNavBar cssClass="hidden lg:flex gap-8"/>
            }
            
        </div>
        : null
        }
        </>
    )
}