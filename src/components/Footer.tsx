import Github from '@/assets/github.svg'
export const Footer=()=>{
    return (
        <div className="container mt-5 py-8 flex flex-col md:flex-row justify-center items-center md:justify-between border-t border-white/10 gap-3">
            
           <div className="text-white/70 text-sm"> © 2024. All rights reserved.</div>
           <div className="flex flex-row gap-2 items-center justify-center"> 
           <div className="text-white/70 text-sm">
           Crafted By: Vanshika Dargan 
           </div>
           <a className='bg-transparent p-1' target='_blank' href='https://github.com/Vanshika-Dargan'>
           <Github/>
           </a>
           </div>
           
            
            </div>
    )
}