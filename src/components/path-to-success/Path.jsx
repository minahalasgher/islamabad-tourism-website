import React from "react";
function Path(){
    return(
        <section className="px-6 py-12 bg-gray-200  min-h-screen">
            <h2 className="text-3xl font-bold">Your Path to Success</h2>
            <p className="text-base  text-gray-500 ">Building a Brighter Future, One Step at a Time. Join Us on Our Path to Empowerment.

            </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

                <div className="bg-white rounded-[50px] p-4 pt-2">
                    <img src="src/assets/journey_img.png" 
                    className="w-full"
                    
                    />
                    <h4 className="text-2xl font-bold font-2xl mt-4 ml-4">Registration</h4>
                </div>

                <div className="bg-white rounded-[50px] p-4 pt-2">
                    <img src="src/assets/journey_img_2.png"
                     className="w-full"
                    />
                    <h4 className="text-2xl font-bold mt-4 ml-4">Aptitude Test</h4>
                </div>

                <div className="bg-white rounded-[50px] p-4 pt-2">
                    <img src="src/assets/bano 1.png"
                    className="w-full"
                    />
                    <h4 className="text-2xl font-bold mt-4 ml-4" >Interview</h4>
                </div>

                <div className="bg-white rounded-[50px] p-4 pt-2">
                    <img src="src/assets/journey_img_1.png"
                     className="w-full"
                     />
                    <h4  className="text-2xl font-bold mt-4 ml-4">Classes</h4>
                </div>

                <div className="bg-white rounded-[50px] p-4 pt-2">
                    <img src="src/assets/bano2.png"
                    className="w-full"
                    />
                    <h4  className="text-2xl font-bold mt-4 ml-4">Graduation</h4>
                </div>
                <div>
                    {/* <h1 className="font-bold bt-6xl">Glimps of Event </h1> */}
                    

                </div>
                </div>
                </section>
                
              
            
        
    );
}
export default Path;