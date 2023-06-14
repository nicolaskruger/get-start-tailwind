const Group = () => {
  return (
    <button className="group hover:bg-slate-800 space-y-4 p-8 flex w-96 flex-col bg-slate-50 rounded-3xl text-slate-900 hover:text-white">
      <div className="flex space-x-6">
        <p className="text-4xl">🥒</p>
        <p className="group-hover:font-bold">new pickle</p>
      </div>
      <p className="text-start">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam mollitia
      </p>
    </button>
  );
};

export { Group };
