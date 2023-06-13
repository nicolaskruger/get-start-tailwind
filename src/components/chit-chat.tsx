const ChitChat = () => {
  return (
    <button className="bg-white text-black flex p-6 items-center rounded-lg space-x-8 shadow-lg">
      <p className="text-2xl">🥒</p>
      <div className="flex-col">
        <p className="text-left font-bold">ChitChat</p>
        <p className="text-slate-500">You have new message!</p>
      </div>
    </button>
  );
};

export { ChitChat };
