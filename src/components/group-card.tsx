export type Info = {
  name: string;
  img: string;
  role: string;
};

const GroupCard = ({ img, name, role }: Info) => {
  return (
    <button className="group/button flex justify-between items-center hover:bg-slate-900 rounded-3xl p-5 w-80">
      <div className="flex space-x-5">
        <img
          className="w-16 h-16 object-cover rounded-full"
          src={img}
          alt={name}
        />
        <div>
          <p className="text-start">{name}</p>
          <p className="text-start">{role}</p>
        </div>
      </div>
      <button className="group/call invisible group-hover/button:visible hover:bg-slate-800 hover:rounded-full w-14 p-1">
        call
      </button>
    </button>
  );
};

export { GroupCard };
