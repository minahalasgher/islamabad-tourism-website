import React from "react";
function Explore(){
    return(
      <section className="px-6 py-12 bg-gray-200  min-h-screen">
            <h2 className="text-3xl font-bold">Explore Top Categories</h2>
            <p className="text-base   text-gray-500 mt-5  ">Discover Skills That Shape Tomorrow. Dive Into Our Most Popular Learning Paths.
             </p>

             <div className="grid grid-cols-4 gap-4 mt-10 w-full">

              <div className="bg-white rounded-[30px] p-4  flex items-center  w-full">
                  <div className="flex items-center gap-4">
                   <img src="src/assets/megaphone.png"/>
                   </div>
                   <div className="flex flex-col ">
                   <h3 className="font-semibold">Digital Marketing</h3>
                   <p className="text-gray-400">BQ-001</p>
                   </div>
                   <span>↗</span>
                   </div>

               <div className="bg-white rounded-[30px] p-4 flex items-center">
                   <div className="flex items-center gap-4">
                   <img src="src/assets/PenNib.png"/>
                   </div>
                  <div className="flex flex-col ">
                   <h3 className="font-semibold">Graphic Designing</h3>
                   <p className="text-gray-400">BQ-002</p>
                   </div>
                </div>

               <div className="bg-white rounded-[30px] p-4 flex items-center">
                    <div className="flex items-center gap-4">
                   <img src="src/assets/ecommerce.png"/>
                   </div>
                   <div className="flex flex-col ">
                   <h3 className="font-semibold">E-commerence Development</h3>
                   <p className="text-gray-400">BQ-003</p>
                   </div>
               </div>

               <div className="bg-white rounded-[30px] p-4 flex items-center">
                 <div className="flex items-center gap-4">
                   <img src="src/assets/Detective.png"/>
                   </div>
                   <div className="flex flex-col ">
                   <h3 className="font-semibold">Amazon Virtual Assistent</h3>
                   <p className="text-gray-400">BQ-004</p>
                   </div>
               </div>
               <div className="bg-white rounded-[30px] p-4 flex items-center" >
                <div className="flex items-center gap-4">
                   <img src="src/assets/cyber-security.png"/>
                   </div>
                   <div className="flex flex-col ">
                   <h3 className="font-semibold">Cyber Security Fundamental</h3>
                   <p className="text-gray-400">BQ-005</p>
                   </div>
               </div>

                <div className="bg-white rounded-[30px] p-4 flex items-center" >
                <div className="flex items-center gap-4">
                   <img src="src/assets/computer.png"/>
                   </div>
                   <div className="flex flex-col ">
                   <h3 className="font-semibold">Computer&Inforamation</h3>
                   <p className="text-gray-400">BQ-006</p>
                   </div>
               </div>

                <div className="bg-white rounded-[30px] p-4 flex items-center" >
                <div className="flex items-center gap-4">
                   <img src="src/assets/web-programming.png"/>
                   </div>
                   <div className="flex flex-col ">
                   <h3 className="font-semibold">Web Development</h3>
                   <p className="text-gray-400">BQ-006</p>
                   </div>
               </div>

               <div className="bg-white rounded-[30px] p-4 flex items-center" >
                <div className="flex items-center gap-4">
                   <img src="src/assets/video.png"/>
                   </div>
                   <div className="flex flex-col ">
                   <h3 className="font-semibold">Video Editing</h3>
                   <p className="text-gray-400">BQ-007</p>
                   </div>
               </div>

               <div className="bg-white rounded-[30px] p-4 flex items-center" >
                <div className="flex items-center gap-4">
                   <img src="src/assets/front-end-programming.png"/>
                   </div>
                   <div className="flex flex-col ">
                   <h3 className="font-semibold">Ui and Ux Designing</h3>
                   <p className="text-gray-400">BQ-008</p>
                   </div>
               </div>

               
               <div className="bg-white rounded-[30px] p-4 flex items-center" >
                <div className="flex items-center gap-4">
                   <img src="src/assets/python (1).png"/>
                   </div>
                   <div className="flex flex-col ">
                   <h3 className="font-semibold">  Python Programming</h3>
                   <p className="text-gray-400">BQ-009</p>
                   </div>
               </div>
             </div>
            </section>
    );
}
export default Explore;