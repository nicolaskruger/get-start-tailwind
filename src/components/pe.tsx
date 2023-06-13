const PE = () => {
  return (
    <div className="bg-white text-black px-4 py-4 flex items-center space-x-4 rounded-2xl">
      <div className=" w-20 h-20 flex items-center justify-center bg-slate-500 rounded-full">
        <p className="text-4xl">🥒</p>
      </div>
      <div className="flex-col space-y-1">
        <p className="font-bold">pick rick</p>
        <p className="text-slate-500">pickle</p>
        <button className="text-purple-600 rounded-full border py-2 px-4 border-purple-600 hover:text-white hover:bg-purple-600 font-bold focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          i{"'"}m a pickle
        </button>
      </div>
    </div>
  );
};

export { PE };
