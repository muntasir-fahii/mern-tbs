import { useEffect, useState } from "react";
import axios from "axios";
import SectorsSelect from "./SectorsSelect";
import { FiEdit } from "react-icons/fi";
import { baseURL } from "../utils/baseUrl";

const Form = () => {
  const [name, setName] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [userId, setUserId] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    axios.get(`${baseURL}/users`).then((res) => {
      console.log(res.data);
    });
  }, []);

  const addUsers = () => {
    const userData = { name, sector: selectedSector, agreedToTerms };

    axios.post(`${baseURL}/save`, userData).then((res) => {
      // console.log(res.data);
      if (res.data) {
        setName(res.data.name);
        setSelectedSector(res.data.selectedSector);
        setAgreedToTerms(res.data.agreedToTerms);
        setUserId(res.data._id.toString());
        setIsEditMode(false);
      }
      setName("");
      setSelectedSector("");
      setAgreedToTerms(false);
    });
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const updateUser = () => {
    const userData = { name, sector: selectedSector, agreedToTerms };

    axios.put(`${baseURL}/edit/${userId}`, userData).then((res) => {
      console.log(res.data);
      if (res.data) {
        setName(res.data.name);
        setSelectedSector(res.data.selectedSector);
        setAgreedToTerms(res.data.agreedToTerms);

        setIsEditMode(true);
      }
      setName("");
      setSelectedSector("");
      setAgreedToTerms(false);
    });
  };

  return (
    <div className="grid justify-center items-center mx-auto bg-violet-600 py-10 px-5  md:py-20 md:px-10 rounded-lg shadow-xl gap-10 w-[28] md:w-[40rem]  mt-6 md:mt-12 ">
      <h2 className="text-3xl text-white">
        Please enter your name and pick the Sectors you are currently involved
        in.
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="grid justify-center items-center mx-auto gap-5 px-8 py-16 h-[28rem] border rounded-xl"
      >
        <div className="flex items-center gap-3">
          <label className="text-xl text-white font-medium">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="outline-none bg-whitesmoke rounded-md"
          />
          {isEditMode ? null : (
            <button type="button">
              <FiEdit
                className="text-white text-xl hover:text-orange-500 duration-300"
                onClick={handleEdit}
              />
            </button>
          )}
        </div>
        <div className="flex items-center gap-3">
          <label className="text-xl text-white font-medium">Sectors:</label>
          <SectorsSelect
            placeholder="e.g. Sector"
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-5">
          <label className="text-xl text-white font-medium">
            Agree to Terms:
          </label>
          <input
            type="checkbox"
            value={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            required
          />
        </div>
        <button
          className="text-xl text-white rounded-md font-medium bg-orange-600 py-2 px-4 md:w-1/2 mx-auto hover:bg-slate-50 hover:text-violet-600 duration-300"
          type="submit"
          onClick={isEditMode ? updateUser : addUsers}
        >
          {isEditMode ? "Edit" : "Save"}
        </button>
      </form>
    </div>
  );
};

export default Form;
