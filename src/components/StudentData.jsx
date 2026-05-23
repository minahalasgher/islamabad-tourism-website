import { use, useEffect, useState } from "react";
import { supabase} from "../supabase-client";

function StudentData() {
  const[student,setstudent] =useState([]);
  const students = [
    {
      name: "Muhammad",
      email: "muhammad@gmail.com",
    },
    {
      name: "Ali",
      email: "ali@gmail.com",
    },
    {
      name: "Ahmed",
      email: "ahmed@gmail.com",
    },
  ];

  const fetchstudent=async()=>{
    const {data,error} = await supabase.from("student").select("*");
     
    if(error){
    console.log(error);
    }else{
      setstudent(data);
      console.log(data);
    }
  };

  useEffect(()=>{
   fetchstudent()
  },[])

  return (
    
    <div className="p-8">
      <h1 className="text-5xl font-bold mb-10">Students Data</h1>

      <div className="flex gap-6 flex-wrap">
        {students.map((student, index) => (
          <div
            key={index}
            className="w-72 bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            {/* <span>Roll # {student.roll-number}</span> */}
            <h2 className="text-4xl font-bold mb-4">{student.name}</h2>
            <p className="text-xl text-gray-700">{student.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentData;