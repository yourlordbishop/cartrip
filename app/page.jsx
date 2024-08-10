import Image from "next/image";
import Link from "next/link";
import { inventory } from "@/lib/car-inventory";
import InventoryCard from "@/Components/inventoryCards";
export default function Home() {
  return (
    <>
    <div className="h-screen bg-img-home ">
       <div className="h-full bg-black/50 flex justify-center items-center ">
            <blockquote className="lg:w-[620px] flex flex-col gap-8 px-2 md:px-6 lg:px-0">
                <h1 className=" text-5xl md:text-6xl text-white text-center font-bold">Get the <span className="text-yellow-500">comfort</span> you deserve with our rentals whether it's for <span className="text-yellow-500">luxury</span> or on your <span className="text-yellow-500">temporal stay</span></h1>
                <p className="text-center">
                    <Link href="/cars" className="inline-block md:inline w-full md:w-auto px-6 py-4 rounded-xl
                    bg-yellow-400 text-xl ">Rent Now</Link>
                </p>    
            </blockquote>
       </div>
    </div>

    {/*display car options*/}
    <section className="py-12 px-2 md:px-6 lg:px-12 bg-gradient-to-b from-gray-400 via-white to-gray-400">
        <h2 className="text-3xl font-light mb-4">Choose from our wide range of options</h2>
        <article className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {inventory.map(car => <InventoryCard
          carClass={car.class}
          carType={car.type}
          seatCap={car.capacity}
          hRate={car.rate}
          key={car.id}
          carImg={car.thumbmail}
          />)}
           
        </article>
    </section>

    <div className="min-h-[320px] md:min-h-[420px] grid md:grid-cols-2 gap-3 md:gap-6 py-20 px-2 md:px-6 lg:px-12">
        <div className=" flex flex-col justify-around gap-2 bg-[#EEEEEE] rounded-lg px-3">
            <div className="flex justify-end">
                <Image height={240} width={240} src="/deals/02_economy_white.png" alt="icon"/>
            </div>
            <h3 className="text-3xl md:text-4xl text-[#DC5F00]">Enjoy Amazing Discounts</h3>
            <p className="text-xl text-gray-700">
                We have amazing discount deals for everyone. You will find more discount codes on our <a href="https://instagram.com/early_code_tech" className="text-[#DC5F00]">Instagram posts</a>
            </p>
        </div>
        <div className=" flex flex-col justify-around gap-2 bg-[#EEEEEE] rounded-lg px-3">
            <div className="flex justify-end">
                <Image height={240} width={240} src="/deals/02_economy_white.png" alt="icon"/>
            </div>
            <h3 className="text-3xl md:text-4xl text-[#DC5F00] uppercase">Get NGN50,000</h3>
            <p className="text-xl text-gray-700">
               Get NGN50,000 for every referral on your link. Make sure you join our <a href="https://x.com/earlycodetech" className="text-[#DC5F00]">X community</a> to learn more about referrals
            </p>
        </div>
    </div>

    <div className=" flex flex-col justify-around items-center gap-4 py-20 px-2 md:px-6 lg:px-12 bg-yellow-400">
        <h3 className="text-5xl font-light uppercase text-center">Popular Brands That Use Our Rentals</h3>
        <div className="lg:w-[620px] grid grid-cols-2 md:grid-cols-3 gap-6">
            <Image height={240} width={240} src="/brands/audi-logo.png" alt="Brand Logo"/>
            <Image height={240} width={240} src="/brands/chrysler-logo.png" alt="Brand Logo"/>
            <Image height={240} width={240} src="/brands/citibank-logo.png" alt="Brand Logo"/>
            <Image height={240} width={240} src="/brands/coca-cola-logo.png" alt="Brand Logo"/>
            <Image height={240} width={240} src="/brands/fifth-third-bank-logo.png" alt="Brand Logo"/>
            <Image height={240} width={240} src="/brands/flash-logo.png" alt="Brand Logo"/>
            <Image height={240} width={240} src="/brands/gatorade-logo.png" alt="Brand Logo"/>
            <Image height={240} width={240} src="/brands/ihop-logo.png" alt="Brand Logo"/>
            <Image height={240} width={240} src="/brands/mustang-logo.png" alt="Brand Logo"/>
        </div>
    </div>
    </>
  )
}