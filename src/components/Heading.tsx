type HeadingProps = {
    className?: string; 
    title?: string;    
  };
  
export const Heading:React.FC<HeadingProps> = ({className,title})=>{
    return (
        <div className={`${className} max-w-[50rem] mx-auto mb-5 lg:mb-5 font-medium`}>
            {title && <h2>{title}</h2>}
        </div>
    )
}