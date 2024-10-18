import { Button } from "@/components/Button"
import { GradientLight } from "@/components/GradientLight"
import { Heading } from "@/components/Heading"
import { features} from "@/constants/index.js"
export const Features = () =>{
    return (
       <div className="container mt-10 lg:mt-20">
       <Heading className="text-3xl font-medium ml-1" title="Learn The Smart Way, Not The Hard Way"/>
       <div className="flex flex-wrap gap-10 mb-10">
        {features.map((feature)=>(
            <div className="relative block p-0.5 w-[21rem] h-[320px] border border-white/15 rounded-2xl overflow-hidden" key={feature.id}>
                <div className="absolute inset-0 bg-[#47406066] backdrop-blur rounded-2xl">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_#687EFF] rounded-2xl"></div>
                </div>
               <div className="relative flex flex-col p-[2.4rem]">
                <h5 className="text-2xl mb-5">{feature.title}</h5>
                <p className=" text-white/70">{feature.text}</p>
                {/* <div className="flex items-center mt-auto">
                    Find Out More &gt;
                </div> */}
               
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <Button>Find Out More &gt;</Button>
                </div>
                {/* gradient light */}
          </div>
        ))}
       </div>
        </div>
    )
}