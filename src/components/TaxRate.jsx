import React from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const TaxRate = () => {
  const navigate = useNavigate();
  const clickhandler = () => {
       navigate('/addtax')
  }
  return (
    <div className='p-5 flex flex-col gap-7'>
       <div className='flex justify-between'>
          <h1 className='text-2xl font-bold'>Tax Rates</h1>
          <div className='flex justify-between items-center bg-indigo-500 px-5 py-1 rounded-sm '
          onClick={clickhandler}>
          <IoMdAddCircle style={{ fontSize: "15px", color: "white" }} />
          <p className='text-white'>Add Tax</p>
          </div>
       </div>
       <div className='border border-black h-96 w-full'></div>
       <div>
        
       </div>
    </div>
  )
}

export default TaxRate