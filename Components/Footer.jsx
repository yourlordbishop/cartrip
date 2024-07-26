import Link from "next/link"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"

export default function Footer () {
    return (
        <footer className="flex flex-col gap-6 py-10 px-2 md:px-6 lg:px-12 bg-gray-600">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between">
                <ul className="flex gap-2">
                    <li>
                        <Link href="#"><FaInstagram className="text-gray-200 text-4xl"/></Link>
                    </li>
                    <li>
                        <Link href="#"><FaXTwitter className="text-gray-200 text-4xl"/></Link>
                    </li>
                    <li>
                        <Link href="#"><FaYoutube className="text-gray-200 text-4xl"/></Link>
                    </li>
                    <li>
                        <Link href="#"><FaDiscord className="text-gray-200 text-4xl"/></Link>
                    </li>
                   
                </ul>
                <ul className="flex flex-wrap gap-6 md:gap-8">
                    <li>
                        <Link href="#" className="text-gray-200 text-sm">About Us</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-200 text-sm">Terms and Conditions</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-200 text-sm">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-200 text-sm">Bug Bounty</Link>
                    </li>
                </ul>
                
            </div>

            <div>
                <p className="text-sm text-gray-200 text-center">&copy;2024 CarTrip Limited. All Rights Reserved</p>
            </div>
        </footer>
    )
}