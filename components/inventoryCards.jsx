import Image from "next/image";

export default function InventoryCard ({carClass,carType,seatCap,hRate,carImg}) {
    return (
        <div className="flex flex-col justify-between gap-3 bg-[#DC5F00] p-3 rounded-lg">
            <div className="flex justify-end">
                <p className="text-md font-light text-[#EEEEEE]">{carClass}</p>
            </div>
            <div className="flex justify-center items-center">
                <Image height={240} width={240} src={carImg} alt="economy option"/>
            </div>
            <div className="flex justify-between gap-3 bg-[#EEEEEE] P-3 rounded-lg">
                <blockquote className="flex flex-col border border-gray-300 p-2 rounded-lg">
                    <span className="text-sm font-light text-gray-500">Car Type</span>
                    <span className="text-xl text-gray-700 uppercase">{carType}</span>
                </blockquote>
                <blockquote className="flex flex-col border border-gray-300 p-2 rounded-lg">
                    <span className="text-sm font-light text-gray-500">Sitting Capacity</span>
                    <span className="text-xl text-gray-700 uppercase">{seatCap} persons</span>
                </blockquote>
            </div>
            <blockquote className="flex flex-col border border-gray-300 p-2 rounded-lg bg-[#EEEEEE]">
                <span className="text-sm font-light text-gray-500">Hourly Rates</span>
                <span className="text-4xl text-gray-700 font-light uppercase">₦{hRate}</span>
            </blockquote>
        </div>
    )
}