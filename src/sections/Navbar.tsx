
import Logo from '@/assets/logo.svg';
import Menu from '@/assets/hamburger.svg'
import { Button } from '@/components/Button';

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
                <Button>Get Started</Button>

                    <Menu className="md:hidden"/>
                </div>
            </div>
            </div>
        </header>
    )
}