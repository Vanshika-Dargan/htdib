import { Button } from "@/components/Button"
import stars from "@/assets/stars.png"
import gridLines from '@/assets/grid-lines.png'
export const GetStarted = ()=>{
    return <section className="pt-20 lg:pb-20">
        <div className="container">
            <div className="border border-white/15 py-20 lg:py-[8rem] rounded-xl overflow-hidden relative" style={{
                backgroundImage:`url(${stars.src})`
            }}>
                <div className="absolute inset-0 bg-[#687EFF] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]" style={{
                    backgroundImage: `url(${gridLines.src})`
                }}></div>
                <div className="relative">
            <h2 className="text-4xl md:text-5xl tracking-tighter text-center font-medium">How to Do It Better?</h2>
            <p className="text-center text-md md:text-lg lg:text-[1rem] md:max-w-[26rem] lg:max-w-[30rem] mx-auto text-white/70 px-4 mt-5 tracking-tight"> Become part of our mission to improve learning for yourself and others in today&apos;s fast-paced world. 
            Ask questions, explore, and grow with both humans and AI—working together as one, without boundaries.</p>
            <div className="flex justify-center mt-8">
            <Button>Get Started</Button>
            </div>
            </div>
            </div>
        </div>
    </section>
}