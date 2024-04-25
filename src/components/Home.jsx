import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";




const Home = () => {
  const navigate = useNavigate();
  const clickhandler = () => {
    navigate('/service')
  }
  
  return (
    <div className="m-3">
      <h1 className="text-2xl font-bold">Add Invoice</h1>
      <div className="flex flex-col">
        <div className="flex justify-between m-3">
          <div className="flex flex-col">
            <label>Invoice Number</label>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="flex flex-col">
            <label>
              Customer Name <sup className="text-pink-600">*</sup>
            </label>
            <div className="flex gap-3">
              <input type="text" />
              <div className="flex h-full w-full justify-center items-center bg-violet-700 p-2 rounded-sm">
                <IoMdAddCircle style={{ fontSize: "15px", color: "white" }} />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label>
              Invoice Date <sup className="text-pink-600">*</sup>
            </label>
            <div>
              <input type="date" placeholder="Select date" />
            </div>
          </div>
        </div>
        <div className="flex justify-between m-3">
          <div className="flex flex-col">
            <label>
              Due Date<sup className="text-pink-600">*</sup>
            </label>
            <div>
              <input type="date" />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Reference Number</label>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="flex flex-col">
            <label>
              Payment Method<sup className="text-pink-600">*</sup>
            </label>
            <select>
              <option value="">Select...</option>
              <option value="option1">Cash</option>
              <option value="option2">Netbanking</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label>
            Services <sup className="text-pink-600">*</sup>
          </label>
          <div className="flex gap-3">
            <select className="flex-grow">
              <option value="">select service</option>
              <option value="Hotel">Hotel</option>
              <option value="Flight">Flight</option>
            </select>
            <button className="flex w-fit justify-center items-center bg-violet-700 p-2 rounded-sm" 
            onClick={clickhandler}
             >
              <IoMdAddCircle style={{ fontSize: "15px", color: "white" }} />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;