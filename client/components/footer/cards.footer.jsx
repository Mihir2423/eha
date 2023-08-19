import React from 'react';
import img2 from '../../assets/svg/Free shipping-pana 1.svg';
import img4 from '../../assets/svg/New entries-bro 1.svg';
import img3 from '../../assets/svg/Service 24_7-pana 1.svg';
import img1 from '../../assets/svg/store-4156934_1280-removebg-preview 2.svg';
import Image from 'next/image';
import { nova_thai } from '../../utilities/font';
export default function CardsFooter() {
    const card = [
        {
            title: "We provide genuine products from our authorized dealers.",
            subtitle: "100% Trusted",
            image: img1,
            alt: "100% Trusted"
        },
        {
            title: "Guaranteed Safe Delivery.",
            subtitle: "Safe Delivery",
            image: img2,
            alt: "Safe Delivery"
        },
        {
            title: "We are available 24/7 at your service.",
            subtitle: "Fast Delivery",
            image: img3,
            alt: "24/7 Service"
        },
        {
            title: "We ensure the fastest deliveries.",
            subtitle: "Enquire",
            image: img4,
            alt: "Fast Delivery"
        }
    ];

    return (
        <div className="w-full flex-cols md:flex bg-white text-black md:space-x-4 md:justify-evenly justify-center space-x-10 md:px-0  border-t-2 border-b-2">
            <div>
            </div>
            {card.map((item, index) => {
                return (

                    <div key={index} className="p-6 w-[400px] h-[260px] text-center border-r-2 ">
                        <div className="flex h-full bg-white px-3 py-1 flex-col">
                            <span className="flex items-center mb-3 w-full justify-center ">
                                <Image src={item.image} alt={item.alt} className='w-[123px] h-[123px] object-cover'  />
                            </span>
                            <div className={`flex flex-col justify-between flex-grow ${nova_thai.className}`}>
                                <p className="leading-relaxed text-xl ">
                                    {item.subtitle}
                                </p>
                                <p className="text-[12px] ">{item.title}</p>
                            </div>
                        </div>
                        <div className='border-1 border-gray-200'></div>
                    </div>
                    
                );
            })}
        </div>
    );
}
