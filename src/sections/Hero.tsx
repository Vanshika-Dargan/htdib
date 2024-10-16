import { Button } from "@/components/Button"
import starryBg from "@/assets/stars.png"
export const Hero = () => {
    return (
       <section className="h-[492px] flex items-center" style={{
        backgroundImage: `url(${starryBg.src})`
       }}>
        <div className="absolute h-64 w-64 bg-blue-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_79.8%_16.3%,white,rgb(158,221,255)_20.7%,rgb(24,0,66))] shadow-[20px_-20px_50px_rgb(255,255,255,.5),20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(79,117,255)]"></div>
        <div className="container relative">
        <div className="flex justify-center">
        <h1 className="text-7xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(79,117,255,0.5))] text-transparent bg-clip-text text-center w-fit">ABCXYZ</h1>
        </div>
        <div className="flex items-center justify-center">
        <p className="text-lg text-white/70 mt-5 text-center max-w-xl mx-auto">Generate Reports, Presentations, and Quizzes from PDFs, PowerPoints, YouTube, and Web Pages with AI-Powered Precision</p>
        </div>
        <div className="flex justify-center mt-5">
        <Button>Get Started</Button>
        </div>
        </div>
    </section>
    )
}