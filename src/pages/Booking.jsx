import React from "react";
import { supabase } from "../supabaseClient";

function Booking() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    tour: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("SUBMIT WORKING ✔");

    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          tour: formData.tour,
        },
      ]);

    console.log(data, error);

    if (error) {
      alert(error.message);
    } else {
      alert("Booking successful ✅");

      setFormData({
        name: "",
        email: "",
        tour: "",
      });
    }
  };

  return (
    <div>
      <h2>Book Tour</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Tour Name"
          value={formData.tour}
          onChange={(e) =>
            setFormData({ ...formData, tour: e.target.value })
          }
        />

        <button type="submit">Book Tour</button>
      </form>
    </div>
  );
}

export default Booking;