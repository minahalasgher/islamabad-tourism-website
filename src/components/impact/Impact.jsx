function Impact(){
    return(
       <section className=" px-6 py-12 bg-gray-200  min-h-screen">
        <h1 className="text-3xl font-bold">Our Impact in Numbers</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white rounded-[20px] p-4 pt-2 ">
                  <img src="src/assets/miku.png"/>
                  <h1 className="font-bold mt-30 text-2xl  text-[45px] ...">1.3M</h1>
                  <h2 className="font-semibold">Enrolled Students</h2>
            </div>

             <div className="bg-white rounded-[20px] p-4 pt-2">
                   <img src="src/assets/miku2.png"/>
                   <h1 className="font-bold mt-30  text-2xl  text-[45px] ...">155+</h1>
                    <h2 className="font-semibold">IT Centers</h2>
            </div>

            <div className="bg-white rounded-[20px] p-4 pt-2">
                   <img src="src/assets/miku3.png"/>
                   <h1 className="font-bold mt-30  text-2xl  text-[45px] ...">90k+</h1>
                   <h2 className="font-semibold">Successful Students</h2>
            </div>

             <div className="bg-white rounded-[20px] p-4 pt-2">
                  <img src="src/assets/miku.png"/>
                   <h1 className="font-bold mt-30  text-2xl  text-[45px] ...">29+</h1>
                    <h1 className="font-semibold">Courses</h1>
            </div>
        </div>
       </section>
    );
}
export default Impact;