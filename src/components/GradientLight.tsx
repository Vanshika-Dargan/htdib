export const GradientLight = ({ className }: { className: string }) => {
    return (
      <div
        className={`${className} absolute -z-1 -top-[8rem] w-72 h-[280px] rounded-[50%]`}
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.4), transparent 70%)',
        }}
      />
    );
  };
  