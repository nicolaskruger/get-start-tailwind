type CenterAllScreenProps = {
  children: React.ReactNode;
};

const CenterAllScreen = ({ children }: CenterAllScreenProps) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export { CenterAllScreen };
