
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { nova, nova_thai } from '@/utilities/font';
import { Box } from '@mui/material';

function CardTotal({cartTotal,items,nextStep,prevStep}) {
  return (
    <div className={`${nova_thai.className} p-4 md:p-0 bg-white md:fixed md:right-0 md:mr-10 md:mt-5 md:w-1/5 md:h-2/5 rounded-md shadow-lg`}>
      <div className="p-0">
        <div className="p-2">
          <h6 className="border-b-2 mb-2 mt-1 text-lg font-semibold">
            Payment Details
          </h6>

          <div className="flex justify-between mt-1">
            <p className="text-black text-sm font-semibold">
              Price ({items.length} items)
            </p>
            <p className="text-black text-sm font-medium">
              ₹ {cartTotal}
            </p>
          </div>

          <div className="flex justify-between mt-1 border-b-2 mb-2">
            <p className="text-black text-sm font-semibold mb-1">
              Delivery Charges
            </p>
            <p className="text-green-600 text-sm font-medium">
              FREE
            </p>
          </div>

          <div className="flex justify-between mt-2">
            <p className="text-black text-sm font-semibold">
              Total Amount
            </p>
            <p className="text-black text-sm font-medium">
              ₹ {cartTotal}
            </p>
          </div>
        </div>

        <div className="flex justify-between py-2 bg-green-200 mt-1 px-2">
          <p className="text-green-600 text-sm font-semibold">
            You will save ₹ 76,000 on this order
          </p>
        </div>

        <div className={`${nova.className} px-4`}>
          <button
            className="w-full mt-6 p-4 rounded-md bg-green-500 hover:bg-green-700 text-lg px-4 text-white"
            onClick={nextStep}
          >
            PROCEED
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardTotal;
