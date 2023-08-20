
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { nova, nova_thai } from '@/utilities/font';
import { Box } from '@mui/material';

function CardTotal({cartTotal,items,nextStep,prevStep}) {
  return (
    <Card className={`${nova.className} md:fixed md:right-0 md:mr-[50px]`}>
      <CardContent className="p-0">
      <Box className="p-2">
        <Typography variant='h6' className="border-b-2 mb-2 mt-1">
          Payment Details
        </Typography>

        <div className='flex justify-between mt-1 '>
          <Typography className="text-black text-sm font-semibold">
            Price ({items.length} items)
          </Typography>
          <Typography className="text-black text-sm font-medium">
            ₹ {cartTotal}            
          </Typography>
        </div>

        <div className='flex justify-between mt-1 border-b-2 mb-2'>
          <Typography className="text-black text-sm font-semibold mb-1">
            Delivery Charges
          </Typography>
          <Typography className="text-green-600 text-sm font-medium">
            FREE
          </Typography>
        </div>

        <div className='flex justify-between mt-2 '>
          <Typography className="text-black text-sm font-semibold">
            Total Amount
          </Typography>
          <Typography className="text-black text-sm font-medium">
          ₹ {cartTotal}  
          </Typography>
        </div>
        </Box>
        
<div className='flex justify-between py-2 bg-green-200 mt-1 px-2'>
          <Typography className="text-green-600 text-sm font-semibold">
            You will save ₹ 76,000 on this order
          </Typography>
        </div>
        <Box className="px-4">
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowRightAltIcon />}
          className="w-full mt-4 p-3 rounded-md bg-green-600 hover:bg-green-700 text-lg px-4"
          onClick={nextStep}
        >
          PROCEED
        </Button>
        </Box>
      </CardContent>
      
    </Card>
  );
}

export default CardTotal;
