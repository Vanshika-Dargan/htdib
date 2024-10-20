import { Heading } from "@/components/Heading"
import robot from "@/assets/robot.png"
import Image from "next/image"
import Cone from "@/assets/Visual.svg"
import Circle from "@/assets/circle.svg"


export const Services=()=>{
    return (
        <div className="container mt-12 lg:mt-20 flex items-center">
          
           <div className="relative flex flex-col justify-between items-center">
           
           <Heading className="text-3xl lg:text-5xl" title="How Can You Learn Better?"/>
           <div className="text-white/80 text-md mb-12">Now you might be wondering is this some other social media app, well Hell No!</div>
           <div className="relative flex flex-row rounded-3xl border border-white/20 overflow-hidden mb-10">
           <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 bg-black rounded-xl rounded-bl-none w-[16rem] h-[5rem] px-6 py-3 hidden md:block">Hey HTDIB, help me learn about robotics
           <svg className="absolute right-full bottom-0 transform scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" width="26" height="37"><path className="" d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"></path></svg>
           </div>
            <div className="relative  flex-row items-center z-1 h-[39rem] lg:h-[46rem] mb-5 overflow-hidden hidden md:flex">
            <div className="w-full h-full">
            <Image
              src={robot} // Use the imported robot image
              alt="Robot Image" // Provide an alt attribute
              className="w-full h-full object-cover"
            />
            </div>
            </div>
            <div className="relative h-[39rem] lg:h-[46rem]">
            <div className="w-full h-full">
            <Image
              src={robot} // Use the imported robot image
              alt="Robot Image" // Provide an alt attribute
              className="w-full h-full object-cover"
            />
            </div>
             <div className="absolute inset-0 left-0 md:backdrop-blur-xl shadow-xl md:p-6">
             <div className="relative w-full h-full p-6 flex flex-col justify-center items-center align-center">
                <div>
             <Heading className="text-3xl md:text-3xl" title="What We Offer?"/>
             <div className="text-white/80 text-sm md:text-md mb-12">Now you might be wondering is this some other social media app, well Hell!</div>
             </div>
             <div className="w-[300px]">
             <div className="border border-white/10 mt-4 mb-4 w-full"></div>
             <div className="flex flex-row gap-10">
                <div className="w-5 h-5 rounded-full bg-[radial-gradient(75%_75%_at_center_center,rgb(104,126,255,.5)_78%,transparent)]"></div>
                <div>Talk With Any AI agent</div>
             </div>
             <div className="border border-white/10 mt-4 mb-4 w-full"></div>
             <div className="flex flex-row gap-10">
                <div className="w-5 h-5 rounded-full bg-[radial-gradient(75%_75%_at_center_center,rgb(104,126,255,.5)_78%,transparent)]"></div>
                <div>No AI hallucination</div>
             </div>
             <div className="border border-white/10 mt-4 mb-4 w-full"></div>
             <div className="flex flex-row gap-10">
                <div className="w-5 h-5 rounded-full bg-[radial-gradient(75%_75%_at_center_center,rgb(104,126,255,.5)_78%,transparent)]"></div>
                <div>Learn from the best</div>
             </div>
             <div className="border border-white/10 mt-4 mb-4 w-full"></div>
             </div>
             </div>
             </div>
            </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-10 w-full">
            <div className="relative flex items-center justify-center z-10 h-[20rem] w-full lg:w-[29rem] mb-5 rounded-3xl overflow-hidden border border-white/20">
    <div className="flex items-center justify-center h-full">
        <Circle className="max-w-full max-h-full" />
    </div>
</div>
<div className="relative flex items-center justify-center z-10 h-[20rem] w-full lg:w-[29rem] mb-5 rounded-3xl overflow-hidden border border-white/20">
    <div className="flex items-center justify-center h-full">
        <Cone className="max-w-full max-h-full" />
    </div>
</div>
</div>


           </div>
        </div>
    )
}