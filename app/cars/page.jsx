import { inventory } from "@/lib/car-inventory"
import RentalCar from "@/components/RentalCar"

export default function Cars () {
    return (
        <main className="grid grid-flow-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-12 lg:px-16 py-8 md:py-12">
            {inventory.map(car => <RentalCar
            carId={car.id}
            carClass={car.class}
            carType={car.type}
            seatCap={car.capacity}
            hRate={car.rate}
            key={car.id}
            carImg={car.thumbmail}
          />)}
        </main>
    )
}