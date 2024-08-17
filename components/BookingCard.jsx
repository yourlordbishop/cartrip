import Image from "next/image";
import { inventory } from "@/lib/car-inventory";

export function BookingCard ({carId,timestamp}) {
    const car = inventory.filter(item => item.id === carId)[0];

    const eventDate = new Date(timestamp);
    const day = eventDate.toLocaleString('us',{day:"numeric"});
    const month = eventDate.toLocaleString('us',{month:"short"})
    const date = `${day} ${month} ${eventDate.getFullYear()}`;
    const time = `${eventDate.getHours()}:${eventDate.getMinutes()};`

    // calculate time spent since booking
    const now = new Date().getTime();
    const diff = now - timestamp;
    const inMins =diff / 1000 / 60;
    const inHrs = diff / 1000 / 60 / 60;

    function timeUsed (mins,hrs) {
        let finalizedHrs = 0;
        let finalizedMins = 0;

        if (mins >= 60) {
            finalizedHrs = Math.floor(hrs + (mins) / 60);
            finalizedMins = Math.floor(mins % 60);
        } else {
            finalizedHrs = Math.floor(hrs);
            finalizedMins = Math.floor(mins);
        }

        // calculate current booking bill
        let baseCost = finalizedHrs * car.rate;
        let addedCost = finalizedMins * (car.rate / 60);
        const cost = baseCost + addedCost;

        return {
            hrs: finalizedHrs,
            mins: finalizedMins,
            bill: Math.ceil(cost)
        }
    }

    return (
    <div className="border border-gray-200 rounded-md p-1">
       <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between gap-4 md:gap-6 bg-gray-200 rounded-md p-2 md:p-4">
            <div>
                <Image width={120} height={180} src={car.thumbmail} alt="car"/>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                <ul className="flex flex-col gap-2 md:gap-0 md:justify-between">
                    <li className="font-bold">{car.type}</li>
                    <li>{car.class}</li>
                    <li>{`${date}, ${time}`}</li>
                </ul>

                <div className="flex flex-col gap-1 md:justify-between">
                    {/* indicator */}

                    <p className="text-2xl"><span>{timeUsed(inMins,inHrs).hrs}Hrs,</span> <span>{timeUsed(inMins,inHrs).mins}Mins</span></p>

                    <p className="text-3xl text-green-500 font-bold">N{timeUsed(inMins,inHrs).bill}</p>
                </div>
            </div>
       </div>
    </div>
    )
}

