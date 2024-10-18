import { Heading } from "@/components/Heading"
import robot from "@/assets/robot.png"
import Image from "next/image"
import Cone from "@/assets/Visual.svg"
import Circle from "@/assets/circle.svg"


export const Services=()=>{
    return (
        <div className="container ml-1 mt-12">
          
           <div className="relative flex flex-col justify-between items-center">
           <Heading className="text-3xl" title="How Can You Learn Better?"/>
           <div className="text-white/80 text-md mb-12">Now you might be wondering is this some other social media app, well Hell No!</div>
            <div className="relative flex items-center z-1 h-[39rem] mb-5 rounded-3xl overflow-hidden border border-white/20 lg:w-full">
            <div className="w-full h-full">
            <Image
              src={robot} // Use the imported robot image
              alt="Robot Image" // Provide an alt attribute
              className="w-full h-full object-cover"
            />
            </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-10 w-full">
            <div className="relative flex items-center justify-center z-10 h-[20rem] w-full lg:w-[32rem] mb-5 rounded-3xl overflow-hidden border border-white/20">
    <div className="flex items-center justify-center h-full">
        <Circle className="max-w-full max-h-full" />
    </div>
</div>
<div className="relative flex items-center justify-center z-10 h-[20rem] w-full lg:w-[32rem] mb-5 rounded-3xl overflow-hidden border border-white/20">
    <div className="flex items-center justify-center h-full">
        <Cone className="max-w-full max-h-full" />
    </div>
</div>
</div>


           </div>
        </div>
    )
}