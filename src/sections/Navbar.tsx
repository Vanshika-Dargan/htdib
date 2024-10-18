
import Logo from '@/assets/logo.svg';
import { Button } from '@/components/Button';
import Search from '@/assets/search.svg';

export const Navbar = () =>{
    return (
        <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
            <div className="container">
            <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl md:max-w-2xl md:mx-auto backdrop-blur">
                <div className="border h-11 w-11 border-white/15 rounded-lg flex justify-center items-center">
                    <Logo className="w-8 h-8"/>
                </div>
                <div className="hidden md:block">
                    {/* <nav className="flex gap-8 text-small">
                        <a className="text-white/70 hover:text-white transition" href='#'>Features</a>
                        <a className="text-white/70 hover:text-white transition" href="#">FAQs</a>
                        <a className="text-white/70 hover:text-white transition" href="#">Pricing</a>
                        <a className="text-white/70 hover:text-white transition" href='#'>Login</a>
                    </nav> */}
                    <div className="relative w-[28rem]">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="bg-transparent border border-white/15 text-white px-4 py-2 rounded-full focus:outline-none focus:border-white/50 w-full"
                    />
                    <button 
                        className="absolute right-3 top-2.5 text-white/70 hover:text-white transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M12.9 14.32a8 8 0 111.42-1.42l4.85 4.85a1 1 0 01-1.42 1.42l-4.85-4.85zM8 14a6 6 0 100-12 6 6 0 000 12z" />
                        </svg>
                    </button>
                </div>
                </div>
                <div className="flex gap-4 items-center">
                <Button>Login</Button>

                    <div className="md:hidden p-2 border border-white/20 text-white/70 rounded-xl">
                    <Search/>
                    </div>
                </div>
            </div>
            </div>
        </header>
    )
}