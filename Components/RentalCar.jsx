"use client";
import React from "react";
import Image from "next/image";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function RentalCar ({carClass,carType,seatCap,hRate,carImg}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <div className="flex flex-col justify-between gap-3 bg-yellow-700 p-3 rounded-lg">
            <div className="flex justify-end">
                <p className="text-md font-light text-[#EEEEEE]">{carClass}</p>
            </div>
            <div className="flex justify-center items-center">
                <Image height={140} width={160} src={carImg} alt="economy option"/>
            </div>

            <button 
            onClick={handleClickOpen}
            className="bg-white px-4 py-2 rounded-md text-xl hover:bg-black hover:text-white">Book Now</button>

            <div className="flex justify-between gap-3 bg-[#EEEEEE] P-3 rounded-lg">
                <blockquote className="flex flex-col border border-gray-300 p-2 rounded-lg">
                    <span className="text-sm font-light text-gray-500">Car Type</span>
                    <span className="text-md text-gray-700 uppercase">{carType}</span>
                </blockquote>
                <blockquote className="flex flex-col border border-gray-300 p-2 rounded-lg">
                    <span className="text-sm font-light text-gray-500">Sitting Capacity</span>
                    <span className="text-md text-gray-700 uppercase">{seatCap} persons</span>
                </blockquote>
            </div>
            <blockquote className="flex flex-col border border-gray-300 p-2 rounded-lg bg-[#EEEEEE]">
                <span className="text-sm font-light text-gray-500">Hourly Rates</span>
                <span className="text-2xl text-gray-700 font-light uppercase">₦{hRate}</span>
            </blockquote>
        </div>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
            <DialogContent>
                <ul className="grid grid-cols-3 gap-4 bg-gray-100 p-4 rounded-md">
                    <li className="text-lg text-center border-r border-gray-300 pr-2">{carClass}</li>
                    <li className="text-lg text-center border-r border-gray-300 pr-2">{carType}</li>
                    <li className="text-lg text-center">N{hRate}</li>
                </ul>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
    </Dialog>
    </>
    )
}