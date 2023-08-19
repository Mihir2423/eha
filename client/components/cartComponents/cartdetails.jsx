// import React from 'react';
// import { useState } from "react";
// import { Stepper, Step } from 'react-form-stepper';
// import StepWizard from 'react-step-wizard';
// import Image from 'next/image';
// import { IoIosRadioButtonOff, IoRadioButtonOff } from "react-icons/io";
// import { BsTrash3 } from "react-icons/bs";
// import { useTheme } from '@mui/material/styles';
// import { MdSecurity } from "react-icons/md";
import productImage from '../../assets/png/pngwing 7.png';
import {nova_thai} from '../../utilities/font';
// import { Box } from '@mui/material';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import { Card } from 'reactstrap';


// export default function Cartdetails({nextStep, prevStep}) {
//     const theme = useTheme();
//     return (
//         // <div className={`bg-white  px-[80px] ${nova_thai.className}`}>
//         //     <div className="w-[800px]">
//         //         <div className="flex-cols justify-center text-3xl">
//         //             Order Summary {" "}
//         //         </div>
//         //         <hr />
//         //         <Box className="flex p-8 shadow-lg ">
//         //             <Image
//         //                 src={productImage}
//         //                 alt="pro"
//         //                 width={550}
//         //                 height={250}
//         //                 className="object-fit rounded-md"
//         //             />
//         //             <Box className="flex-col ml-4">
//         //                 <Typography className="text-2xl font-semibold text-wrap">
//         //                     Lenovo Ideapad Gaming 3 AMD Ryzen 5 Hexa Core 5600H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650) 15ACH6 Gaming Laptop (15.6 Inch, Shadow Black, 2.25 kg kg)
//         //                 </Typography>
//         //                 <Typography className='relative'>
//         //                     <span className="font-semibold text-green-600">56,000</span>
//         //                     <span className="font-semibold">56,000</span>
//         //                     <span className="font-semibold">31% OFF</span>
//         //                 </Typography>
//         //             </Box>
//         //             <Box className="flex-cols items-end ml-auto text-black">
//         //                 <div className="flex">
//         //                     <button className="px-2 py-1 rounded-md border border-gray-400">
//         //                         +
//         //                     </button>
//         //                     <span className="px-2 py-1 font-semibold">1</span>
//         //                     <button className="px-2 py-1 rounded-md border border-gray-400">
//         //                         -
//         //                     </button>
//         //                 </div>
//         //                 <button className="px-2 py-1 mt-2 ml-2  text-black">
//         //                     {<BsTrash3 className='text-black'/>} Delete
//         //                 </button>
                        
//         //             </Box>
//         //         </Box>
//         //     </div>
//             <Card sx={{ display: 'flex' }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <CardContent sx={{ flex: '1 0 auto' }}>
//           <Typography component="div" variant="h5">
//             Live From Space
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" component="div">
//             Mac Miller
//           </Typography>
//         </CardContent>
//         <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
//           <IconButton aria-label="previous">
//             {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//           </IconButton>
//           <IconButton aria-label="play/pause">
//             <PlayArrowIcon sx={{ height: 38, width: 38 }} />
//           </IconButton>
//           <IconButton aria-label="next">
//             {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//           </IconButton>
//         </Box>
//       </Box>
//       <CardMedia
//         component="img"
//         sx={{ width: 151 }}
//         image={productImage}
//         alt="Live from space album cover"
//       />
//     </Card>

//         //     



//     );
// };



import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from 'next/image';
import SectionHeading from '../userDetailsComponent/ProfileComponents/SectionHeading';
export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Box className={`bg-white p-4 ${nova_thai.className} max-w-[900px] shadow-lg drop-rounded-lg`}>
    <Typography className="text-neutral-700 text-2xl font-medium border-b-2 mb-4 ">Order Summary</Typography>
    
    <Card sx={{ display: 'flex'}} className={`${nova_thai.className} shadow-none rounded-none`}  >
    <Image
                        src={productImage}
                        alt="pro"
                        className="object-fill rounded-md py-8 px-1 pl-3"
            />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography component="div" variant="h8">
         Lenovo Ideapad Gaming 3 AMD Ryzen 5 Hexa Core 5600H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650) 15ACH6 Gaming Laptop (15.6 Inch, Shadow Black, 2.25 kg kg)
          </Typography>
          <Typography component={'div'} variant="subtitle1" color="text.secondary" className='flex mt-3 ml-2 space-x-3' >
          <Typography className="text-black text-lg ">
          ₹ 56,000
          </Typography>
          <Typography className=" text-base font-sm line-through">
          ₹ 56,000
          </Typography>
          <Typography className="text-green-600 text-base font-bold ">
          31% OFF
          </Typography>
          </Typography>
        </CardContent>
      </Box>
      <Grid  className='md:flex-end md:align-center md:p-2 md:justify-end'> 
        <Box sx={{ display: 'flex'}} className="bg-red-200 rounded-md border-1 flex-end justify-end">
            <IconButton aria-label="plus" className='p-2 border-2'>
                 <AddIcon />
            </IconButton>
            <div className="p-3 font-semibold border-2  bg-white">1</div>
            <IconButton aria-label="negative" className='p-2 border-2'>
                    <RemoveIcon />
            </IconButton>
        </Box>
        <Box className="flex items-center ml-auto text-gray-400 mt-1">
            <IconButton aria-label="delete">
                    <DeleteIcon /> 
            </IconButton>
            <Typography >DELETE</Typography>
        </Box>
      </Grid>
    </Card>
    </Box>
  );
}
