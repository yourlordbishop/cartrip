import Image from "next/image";

export function BookingCard () {
    return (
    <div className="border border-gray-200 rounded-md p-1">
       <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between gap-4 md:gap-6 bg-gray-200 rounded-md p-2 md:p-4">
            <div>
                <Image width={120} height={180} src="/deals/02_economy_white.png" alt="car"/>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                <ul className="flex flex-col gap-2 md:gap-0 md:justify-between">
                    <li className="font-bold">Honda, Sedan</li>
                    <li>Premium</li>
                    <li>05-08-2025</li>
                </ul>

                <div className="flex flex-col gap-1 md:justify-between">
                    {/* indicator */}

                    <p className="text-2xl"><span>2Hrs,</span> <span>5Mins</span></p>

                    <p className="text-3xl text-green-500 font-bold">N120,801</p>
                </div>
            </div>
       </div>
    </div>
    )
}

