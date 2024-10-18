import { Heading } from "@/components/Heading"
import { features} from "@/constants/index.js"
export const Features = () =>{
    return (
       <div className="container">
       <Heading className="text-xl" title="Learn The Smart Way, Not The Hard Way"/>
       <div className="flex flex-wrap gap-10 mb-10">
        {features.map((feature)=>(
            <div className="relative block p-0.5 w-96 h-[366px] border border-white/15 rounded-2xl" key={feature.id}>
                <div className="absolute inset-0 bg-[#47406066] backdrop-blur rounded-2xl">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_#687EFF] rounded-2xl"></div>
                </div>
               <div className="relative">
                <h5>{feature.title}</h5>
                </div>
            </div>
        ))}
       </div>
        </div>
    )
}