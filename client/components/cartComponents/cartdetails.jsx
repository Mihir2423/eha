import productImage from '../../assets/png/pngwing 7.png';
import {nova_thai} from '../../utilities/font';
import CardTotal from './cardTotal';
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
import { Container, useMediaQuery } from '@mui/material';
import { useCart } from 'react-use-cart';
import { useSession } from 'next-auth/react';



export default function CartDetails({nextStep, prevStep}) {
  
  const { isEmpty, items, cartTotal, removeItem, updateItemQuantity } = useCart();
  let content;
  const theme = useTheme();
  
  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    
    <Container className="md:flex md:w-none w-full">
    <Box className={`bg-white md:px-4 md:pt-4 py-2 ${nova_thai.className}  shadow-lg drop-rounded-lg rounded-lg md:max-w-[1250px] `}>
    <Typography className="text-neutral-700 text-2xl font-medium border-b-2 mb-4 pb-2 flex md:px-4 px-3 py-4">Order Summary <Typography className='text-base m-2'>({items.length} items)</Typography></Typography>
    
      {items.map((item) => (
        <Card className={`${nova_thai.className} shadow-none rounded-none md:flex text-neutral-700 border-b-2`} key={item.id} >
    <center>
        <Image
                        src={item.img}
                        alt={item.name}
                        width={isMobile? "200" : "150"}
                        height={isMobile? "60" : "50"}
                        className="object-fill rounded-md md:py-4 flex items-center justify-center text-center"
      />
      </center>
      
      <Box className='md:flex-col md:w-[60%] '>
        <CardContent>
          <Typography component="div" variant="h8">
         {item.name} 
          </Typography>
          <Typography component={'div'} variant="subtitle1" color="text.secondary" className='flex mt-3 ml-2 space-x-3' >
          <Typography className="text-black text-lg ">
          ₹ {item.price}
          </Typography>
          <Typography className=" text-base font-sm line-through">
          ₹ {item.price}
          </Typography>
          <Typography className="text-green-600 text-base font-bold ">
          31% OFF
          </Typography>
          </Typography>
        </CardContent>
      </Box>
      {
        isMobile ? <Grid  className='flex  md:align-center md:p-2 md:justify-end md:w-[30%] p-4 justify-between' > 
        <Box className="flex items-center  text-gray-400 mt-1" onClick={() => handleRemoveItem(item.id)}>
        <IconButton aria-label="delete" >
        <DeleteIcon /> 
        </IconButton>
        <Typography >DELETE</Typography>
        </Box>
        <Box sx={{ display: 'flex'}} className="bg-red-200 rounded-md border-1 ">
        <IconButton aria-label="negative" className='p-2 border-2' onClick={() => handleRemoveItem(item.id)}>
        <RemoveIcon />
        </IconButton>
        <div className="p-3 font-semibold border-2  bg-white">{item?.quantity}</div>
        <IconButton aria-label="plus" className='p-1 border-2 '  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
             <AddIcon />
        </IconButton>
        </Box>
      </Grid> : null
      }
      {
        !isMobile ? <Grid  className='md:flex-end md:align-center md:p-2 md:justify-end md:w-[30%]' > 
        <Box sx={{ display: 'flex'}} className="bg-red-200 rounded-md border-1 flex-end justify-end">
            <IconButton aria-label="plus" className='p-1 border-2 '  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                 <AddIcon />
            </IconButton>
            <div className="p-3 font-semibold border-2  bg-white">{item?.quantity}</div>
            <IconButton aria-label="negative" className='p-2 border-2' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                    <RemoveIcon />
            </IconButton>
        </Box>
        <Box className="flex items-center ml-auto text-gray-400 mt-1" onClick={() => handleRemoveItem(item.id)}>
            <IconButton aria-label="delete" >
                    <DeleteIcon /> 
            </IconButton>
            <Typography >DELETE</Typography>
        </Box>
      </Grid> : null
      }
    </Card>
  ))}    
 </Box>
 {!isEmpty && <CardTotal className="fixed" cartTotal={cartTotal} items={items} nextStep={nextStep} prevStep={prevStep}/>}
    </Container>
  );
}
