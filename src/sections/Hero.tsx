import { Button } from "@/components/Button"
import starryBg from "@/assets/stars.png"
export const Hero = () => {
    return (
       <section className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" style={{
        backgroundImage: `url(${starryBg.src})`
       }}>
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(69,123,255,.5)_15%,rgb(0,14,36,.5)_78%,transparent)]"></div>
        {/* planet start */}
        <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-blue-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_79.8%_16.3%,white,rgb(158,221,255)_20.7%,rgb(24,0,66))] shadow-[20px_-20px_50px_rgb(255,255,255,.5),20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(79,117,255)]"></div>
        {/* plant end */}
        {/* first ring */}
        <div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] rounded-full border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        {/* dot left */}
        <div className="absolute h-2 w-2 left-0 rounded-full bg-white top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        {/* dot top */}
        <div className="absolute h-2 w-2 left-1/2 rounded-full bg-white top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 left-full rounded-full border border-white top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
        <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
        </div> 
        {/* second ring */}
        <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>
        {/* third ring */}
        <div className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
         {/* dot left */}
         <div className="absolute h-2 w-2 left-0 rounded-full bg-white top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        {/* dot top */}
        <div className="absolute h-2 w-2 left-full rounded-full bg-white top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container relative mt-16">
        <div className="flex justify-center">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(79,117,255,0.5))] text-transparent bg-clip-text text-center w-fit">HTDIB</h1>
        </div>
        <div className="flex items-center justify-center max-w-xl mx-auto">
        <p className="text-lg md:text-xl md:leading-[1.7] text-white/70 mt-5 text-center max-w-xl mx-auto">Engage In Converstaions With AI and Humans and Learn <span className="text-white">&quot;How To Do Your Task At Hand Better&quot;</span></p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[8rem] md:translate-y-[11rem] flex justify-center">
        <Button>Get Started</Button>
        </div>
        </div>
    </section>
    )
}