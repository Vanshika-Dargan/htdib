type HeadingProps = {
    className?: string; 
    title?: string;    
  };
  
export const Heading:React.FC<HeadingProps> = ({className,title})=>{
    return (
        <div className={`${className} max-w-[50rem] mx-auto mb-10 lg:mb-12`}>
            {title && <h2>{title}</h2>}
        </div>
    )
}