import { View, Text } from 'react';
import React, { useEffect, useState } from 'react';
import { Navbar,} from '../components';
import { TypeAnimation } from "react-type-animation";
import {logo} from '../assets/'
//import 'animate.css/animate.min.css';
import Footer from '../components/Footer';

const AboutUs = () => {

    useEffect(() => {
        document.body.classList.add('bg-slate-900');
        return () => {
          document.body.classList.remove('bg-slate-900');
        };
      }, []);

  
      const sentenceAnimationSequence = ['Take', 'a', 'Leep', 'towards', 'your', 'future'];
      const [index, setIndex] = useState(0);
    
      useEffect(() => {
        if (index < sentenceAnimationSequence.length) {
          setTimeout(() => {
            setIndex((prevIndex) => prevIndex + 1);
          }, 1000);
        }
      }, [index, sentenceAnimationSequence]);
    
      const animatedText = sentenceAnimationSequence.slice(0, index).join(' ');
      

  return (
<div>

        <div className="flex flex-col items-center justify-center text-center">
          <img src={logo} className="w-32 mb-4" alt="Leep" />
          <h1 className="text-2xl md:text-4xl font-bold text-gray-200">
            <span className="text-white uppercase">{animatedText}</span>
          </h1>
    
          <div
            className="text-center bg-white text-slate-900 rounded-md p-5 md:p-9 max-w-screen-md mx-auto my-8">
            <h4 className="text-lg md:text-xl">
              Embark on a journey into the future of innovation with Leep – the dynamic hub where dreams leap into reality.
              Here, the next big thing isn't just an idea; it's a promise waiting to be fulfilled, a vision ready to soar.
              Explore a world where creativity knows no bounds, and possibilities are as vast as the imagination.
            </h4>
          </div>


          <div className="mt-8 text-center bg-white p-8 rounded-lg shadow-md w-full">
            <div className="bg-white p-4 md:p-8 mx-auto rounded-lg shadow-md">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 animate__animated animate__fadeInDown">
                   Ready to raise funds for your idea?
                 </h2>
              </div>

             <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
                 <p className="text-lg md:text-xl text-gray-800 font-serif leading-relaxed px-10 md:px-20">
                     Join the movement where dreams become reality! Break free from traditional constraints and 
                        receive support from a diverse range of backers who believe in your project. 
                            Experience the thrill of success together with your backers, creating a shared achievement that resonates far beyond the funding campaign.
                              <br/>
                            Your idea deserves to thrive,
                            and Leep is here to make it happen.
                   </p>

                    <div className="flex justify-center mt-4 p-3">
                       <button className="bg-yellow-500 text-white font-bold px-8 py-4 mx-2 rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
                          Explore Projects
                          </button>
                        <button className="bg-green-600 text-white font-bold px-8 py-4 mx-2 rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
                           Start CrowdFunding
                         </button>
                      </div>
                 </div>
           
           </div>




          <div className="flex justify-center items-center h-screen animate__animated animate__fadeInDown">
          <div className="bg-white p-8 m-12 mb-8 mt-[-4rem] h-[50vh]">
  <h2 className="text-slate-900 font-bold text-4xl">What is CrowdFunding</h2>
  <p className="pt-4 text-lg md:text-xl text-gray-800 font-serif leading-relaxed px-10 md:px-20">
    This is not just funding; this is a movement where every pledge is a vote of confidence,
    and every backer becomes a part of your success story.
    Break free from the traditional financial barriers and step into the world of success.
  </p>
</div>

<div className="bg-white p-8 m-12 mb-8 mt-[-4rem] h-[50vh]">
    <h2 className="text-slate-900 font-bold text-4xl">Why choose LEEP</h2>
    <p className="pt-4 text-lg md:text-xl text-gray-800 font-serif leading-relaxed px-10 md:px-20">
    We provide a platform for startups, and projects to access the capital they need to thrive.
    Explore the endless possibilities with LEEP. Your journey begins here, 
    where passion meets purpose, and innovation knows no bounds.
  </p>
  </div>
</div>

        
         
   </div>

   <Footer/>

   </div>
      );
    };
    
export default AboutUs;