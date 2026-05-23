import React, { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    persons: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/book-tour", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    alert(data.message);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-[350px]"
      >
        <h1 className="text-2xl font-bold mb-5 text-center">
          Book Tour
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          className="border w-full p-2 mb-4 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          className="border w-full p-2 mb-4 rounded"
        />

        <input
          type="number"
          name="persons"
          placeholder="Persons"
          onChange={handleChange}
          className="border w-full p-2 mb-4 rounded"
        />

        <button className="bg-black text-white px-4 py-2 rounded w-full">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Booking;