
import Logo from '@/assets/logo.svg';
import Menu from '@/assets/hamburger.svg'

export const Navbar = () =>{
    return (
        <header className="py-4 border-b border-white/15 md:border-none">
            <div className="container">
            <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl md:max-w-2xl md:mx-auto">
                <div className="border h-11 w-11 border-white/15 rounded-lg flex justify-center items-center">
                    <Logo className="w-8 h-8"/>
                </div>
                <div className="hidden md:block">
                    <nav className="flex gap-8 text-small">
                        <a className="text-white/70 hover:text-white transition" href='#'>Features</a>
                        <a className="text-white/70 hover:text-white transition" href="#">FAQs</a>
                        <a className="text-white/70 hover:text-white transition" href="#">Pricing</a>
                        <a className="text-white/70 hover:text-white transition" href='#'>Login</a>
                    </nav>
                </div>
                <div className="flex gap-4 items-center">
                <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#27005D] to-[#687EFF] shadow-[0px_0px_12px_#9EDDFF]">
    <div className="absolute inset-0">
        <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_10px_#BEFFF7] rounded-lg"></div>
    </div>
    <span className="relative z-10">Get Started</span>
</button>

                    <Menu className="md:hidden"/>
                </div>
            </div>
            </div>
        </header>
    )
}