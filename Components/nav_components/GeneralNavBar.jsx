import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat_thin_100 = Montserrat({
    subsets: ["latin"],
    weight: "100"
})

export function GeneralNavBar ({cssClass}) {
    return (
        <ul className={cssClass}>
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
            href="/dashboard">Account</Link>
        </li>
    </ul>
    )
}