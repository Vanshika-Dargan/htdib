
export const Button = (props: React.PropsWithChildren) =>{
    return (
        <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#27005D] to-[#687EFF] shadow-[0px_0px_12px_#9EDDFF]">
        <div className="absolute inset-0">
            <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
            <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
            <div className="absolute inset-0 shadow-[inset_0_0_10px_#BEFFF7] rounded-lg"></div>
        </div>
        <span className="relative z-10">{props.children}</span>
    </button>
    )
}