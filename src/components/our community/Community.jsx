import React from "react";
import heroImg from "../../assets/Frame 35.png"; 
// import lockImg from "../../src/assets/Unlock1.png";
 
import "./Community.css";
import App from "../../App";

function Community() {
      const cards =[
    {
         title: "Membership Organisations",
         desc: "Our membership management software provides full automation of membership renewals and payments",
         icon:"src/assets/Icon (1) (1).png",
  },
  {
        title:"National Associations",
        desc:"Our membership management software provides full automation of membership renewals and payments",
  },
  {
         title:"Clubs And Groups",
         desc:"Our membership management software provides full automation of membership renewals and payments",
  },
   
  ];
 return (
    <section className="card-wrapper">

         <div className="community-text">
          <h3> <span className="highlight">Our community</span></h3>
           <p>Manage your entire community in a single system<br/>Who is Nextcent suitable for?</p>
           </div>

    
      
        <div className="card-container">
               {/* <div className="icon">
               <img src="src/assets/Icon (1) (1).png"/>   
                 </div> */}
        {cards.map((item,index)=>(
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          
            </div>
          
        ))}
        
        </div> 
    
        <section className="hero-wrapper">
              <div className="lorem-text">
               <h2>The unseen of spending three years at Pixelgrade</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
               <button className="btns">Learn more</button>
        </div>
        
          <div className="hero-image">
                  <img  src={heroImg} alt=""/>
          </div>
        </section>
        
          {/* <h2>Achievements</h2> */}
            <section className="achievment">
           <div className="small-section">
               <h2>Achievements</h2>
              <p>Helping a local</p>
               <h3><span className="highlight">business reinvent itself</span></h3>
              <p>We reached here with our hard work and dedication</p>
           </div>
           <section className="achievment-wrapper">
            <div className="members">
                <img src="src/assets/menu  (1).png"/>
                <h4>2,245,341</h4>
                <p>Members</p>
            </div>

            <div className="events">
                <img src="src/assets/menu (2).png"/>
                <h4>1,926,4361</h4>
                 <p>Event Bookings</p>
            </div>

            <div className="payment">
               <img src="src/assets/menu (3).png"/>
                 <h4>46,328</h4>
                <p>payment</p>
            </div>

            
            <div className="clubs">
               <img src="src/assets/menu(4).png"/>
                 <h4>828,867</h4>
                   <p>clubs</p>
            </div>
           </section>
           </section>


           <section className="lock-sec">
            <div className="hero-text">
                     <h3>The unseen of spending three years at Pixelgrade</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                      <button className="btn">Learn more</button>
                 </div>  

             <div className="lock-img">
                   <img src="src/assets/Unlock1.png"/>
                     </div> 
              </section>

 
                   </section>
                  
        
 );
 }
export default Community;