import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const AddTax = () => {
  return (
    <div className="p-20 relative h-screen w-screen flex flex-col gap-4 ">
      <h1 className="font-bold">Add Tax</h1>
      <div className="flex flex-col">
        <label>
          Tax Name<sup className="text-pink-600">*</sup>
        </label>
        <input className="px-3 py-1" type="text" />
      </div>
      <div className="flex flex-col">
        <label>
          Tax Rates<sup className="text-pink-600">*</sup>
        </label>
        <input className="px-3 py-1" type="text" />
      </div>
      <div className="flex flex-col">
        <label>
          Type<sup className="text-pink-600">*</sup>
        </label>
        <select>
          <option value=""> </option>
          <option value="option1">Percentage</option>
        </select>
      </div>
      <ToggleSwitch />
      <div className="flex gap-3 absolute bottom-20 right-20">
        <div className="border-2 border-blue-500 pr-3 pl-3 pt-1 pb-1 rounded-sm">
          <button className="border:blue text-blue-600">Cancel</button>
        </div>
        <div className="bg-purple-600 pr-3 pl-3 pt-1 pb-1 rounded-sm">
          <button className="text-white">Add Item</button>
        </div>
      </div>
    </div>
  );
};

export default AddTax;
