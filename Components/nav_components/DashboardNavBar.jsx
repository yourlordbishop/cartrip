import Link from "next/link";
import { Montserrat } from "next/font/google";


const montserrat_thin_100 = Montserrat({
    subsets: ["latin"],
    weight: "100"
})

export function DashboardNavBar ({cssClass}) {
    return (
        <ul className={cssClass}>
        <li>
            <Link
            className={`${montserrat_thin_100} text-yellow-50 text-lg`}
            href="/dashboard">Home</Link>
        </li>
        <li>
            <Link
            className={`${montserrat_thin_100} text-yellow-50 text-lg`}
            href="/dashbard/profile">Profile</Link>
        </li>
        <li>
            <Link
            className={`${montserrat_thin_100} text-yellow-50 text-lg`}
            href="#">Sign Out</Link>
        </li>
    </ul>
    )
}