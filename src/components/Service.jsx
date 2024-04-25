import React from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from 'react-icons/md';

const Service = () => {
  const navigate = useNavigate();
  const clickhandler = () =>{
        navigate('/taxrate')
  }
  return (
    <div className=" p-5 relative h-screen w-screen overflow-scroll ">
      <h1 className="text-3xl font-bold">Add Services Details</h1>
      <br />
      
      <h1 className="font-bold">Basic Details</h1>
      <div>
        <div className="flex gap-x-80">
          <div>
            <label>
              Service Type<sup className="text-pink-600">*</sup>
            </label>
            <div>
              <input type="text" />
            </div>
          </div>
          <div>
            <label>
              Selling Price<sup className="text-pink-600">*</sup>
            </label>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="flex flex-col ">
            <label>
              Discount Type<sup className="text-pink-600">*</sup>
            </label>
            <select>
              <option value="">Select...........................</option>
              <option value="option1">Percentage</option>
            </select>
          </div>
        </div>
        <br />
        <div className="flex  gap-x-80">
          <div>
            <label>
              Discount Value<sup className="text-pink-600">*</sup>
            </label>
            <div>
              <input type="text" />
            </div>
          </div>
          <div>
            <label>
              Tax<sup className="text-pink-600">*</sup>
            </label>
            <div onClick>
              <select>
                <option value="">
                  Select..................................
                </option>
                <option value="option1">GST (18%)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 absolute bottom-4 right-4">
        <div className="border-2 border-blue-500 pr-3 pl-3 pt-1 pb-1 rounded-sm">
          <button className="border:blue text-blue-600"
          onClick={()=>{
            navigate('/');
          }}
          >Cancel</button>
        </div>
        <div className="bg-purple-600 pr-3 pl-3 pt-1 pb-1 rounded-sm">
          <button className="text-white">Add Item</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
