import { nova, nova_thai } from "@/utilities/font"
import { Instagram, YouTube, Facebook } from "@mui/icons-material"
import Script from "next/script"
import MapComponent from "./maps"
import CardsFooter from "@/components/footer/cards.footer"
import Link from "next/link"
import * as React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function footer() {

  return (
    <>

      <CardsFooter />
      <Box>
        <Box className="bg-black rounded-none">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-black text-white text-[15px] font-normal"
            >
              <Typography>Useful Links</Typography>
            </AccordionSummary>
            <AccordionDetails className={`text-center text-md bg-black text-white ${nova_thai.className}`}>
              <Box className=" hover:underline active:text-red-500 "><Link href='/'>Home</Link>     </Box>
              <Box className=" hover:underline active:text-red-500 "><Link href='/about'>About Us</Link>     </Box>
              <Box className=" hover:underline active:text-red-500 "><Link href='/contact'>Contact Us</Link></Box>
            </AccordionDetails>
          </Accordion>
        </Box>

        <div className={` bg-black ${nova_thai.className}`}>
          <Box className={`md:w-[141px] md:h-[77px] grid bg-black text-white p-4 md:font-md font-lg`}>
            <Box className={` border-green-600`} />
            <Typography className={`text-zinc-300 text-xl md:text-lg font-medium border-b-2 border-green-600 w-[180px]`}>
              For Queries :-
            </Typography>
            <Typography className={`text-zinc-300 text-xl font-medium m-2`}>
              +91 XXXXXXXXXX
            </Typography>
          </Box>

          <Box className=" md:flex justify-center  pr-[240px] hidden">
            <MapComponent />
          </Box>
          <Box className="">
            <Typography className="md:left-[1px]  text-zinc-300 md:font-medium  text-xl">Follow Us On:-</Typography>
            <div className=" border border-green-600"></div>
            <div className="flex text-white justify-between mt-2 text-xl">
              <div className="w-[38px] h-[38px] mr-10">
                <Instagram className="w-[38px] h-[38px]  absolute" />
              </div>
              <div className="w-[40px] h-[80px] mr-10">
                <YouTube className="w-[38px] h-[45px]   absolute" />
              </div>
              <div className="w-[38px] h-[38px] mr-10">
                <Facebook className="w-[38px] h-[38px]   absolute" />
              </div>
            </div>
          </Box>
        </div>
        <div className="relative border border-white"></div>
        <Box className="md:flex md:justify-between bg-black px-2">
        <Typography className="text-center text-white text-[15px] font-normal bg-black p-2 md:p-none">
          © 2023 EHA SHIVAM TECHNOLOGIES
        </Typography>
        <Typography className="text-center text-white text-[15px] font-normal bg-black">Designed by Void Work</Typography>

        </Box>
      </Box>
    </>
  )
}
