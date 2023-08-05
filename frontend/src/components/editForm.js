// import React, { useState, useEffect } from "react";
// import axios from "axios";
import SectorsSelect from "./SectorsSelect";
import { FiEdit } from "react-icons/fi";

const editForm = () => {
  return (
    <div className="grid justify-center items-center mx-auto bg-violet-600 py-10 px-5  md:py-20 md:px-10 rounded-lg shadow-xl gap-10 w-[28] md:w-[40rem]  mt-6 md:mt-12 ">
      <h2 className="text-3xl text-white">
        Please enter your name and pick the Sectors you are currently involved
        in.
      </h2>
      <form className="grid justify-center items-center mx-auto gap-5 px-8 py-16 h-[28rem] border rounded-xl">
        <div className="flex items-center gap-3">
          <label className="text-xl text-white font-medium">Name:</label>
          <input
            type="text"
            required
            className="outline-none bg-whitesmoke rounded-md"
          />
          <button type="button">
            <FiEdit className="text-white text-xl hover:text-orange-500 duration-300" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-xl text-white font-medium">Sectors:</label>
          <SectorsSelect placeholder="Sector" required />

          <button type="button">
            <FiEdit className="text-white text-xl hover:text-orange-500 duration-300" />
          </button>
        </div>
        <div className="flex items-center gap-5">
          <label className="text-xl text-white font-medium">
            Agree to Terms:
          </label>
          <input type="checkbox" required />
        </div>
        <button
          className="text-xl text-white rounded-md font-medium bg-orange-600 py-2 px-4 md:w-1/2 mx-auto hover:bg-slate-50 hover:text-violet-600 duration-300"
          type="submit"
        >
          save
        </button>
      </form>
    </div>
  );
};

export default editForm;
