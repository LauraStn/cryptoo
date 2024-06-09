const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-10/12 mx-auto flex items-center flex-wrap">
      {children}
    </div>
  );
};

export default CardWrapper;
