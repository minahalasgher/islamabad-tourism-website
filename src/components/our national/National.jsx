function National(){
    return(
        <section className="px-6 py-12 bg-gray-200  min-h-screen">
            <h2 className="text-3xl font-bold">Our Nationwide Impact</h2>
            <p className="text-base  text-gray-500 ">Empowering communities across Pakistan – bringing opportunity closer to you, wherever you are.</p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div>
                <div className="bg-white rounded-[50px] p-4 pt-2">
                    <img src="src/assets/punjab.png" 
                    className="w-full" />
                    <h4 className="text-2xl font-bold font-2xl mt-4 ml-4">Punjab</h4>
                </div>
            </div>
            <div>
                <div>
                <div className="bg-white rounded-[50px] p-4 pt-2">
                    <img src="src/assets/sindh.png" 
                    className="w-full" />
                    <h4 className="text-2xl font-bold font-2xl mt-4 ml-4">Sindh</h4>
                </div>
                </div>
            </div>
            <div>
                <div>
                <div className="bg-white rounded-[50px] p-4 pt-2">
                    <img src="src/assets/balochistan (1).png" 
                    className="w-full" />
                    <h4 className="text-2xl font-bold font-2xl mt-4 ml-4">Bloachistan</h4>
                    </div>
                </div>
            </div>
            <div>
                <div>
                <div className="bg-white rounded-[50px] p-4 pt-2">
                    <img src="src/assets/khyber_pukhtoon_khua.png" 
                    className="w-full" />
                    <h4 className="text-2xl font-bold font-2xl mt-4 ml-4">Khyber</h4>
                    </div>
                </div>
            </div>
            <div>
                 <div>
                <div className="bg-white rounded-[50px] p-4 pt-2">
                    <img src="src/assets/kashmir.png" 
                    className="w-full" />
                    <h4 className="text-2xl font-bold font-2xl mt-4 ml-4">Kasmihir</h4>
                    </div>
                </div>
            </div>

            <div>
                <div className="bg-white rounded-[50px] p-4 pt-2">
                    <img src="src/assets/islamabad.png" 
                    className="w-full" />
                    <h4 className="text-2xl font-bold font-2xl mt-4 ml-4">Islamabad</h4>
                    </div>
                </div>
         </div>
        </section>
    );
}
export default National;