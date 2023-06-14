import { GroupCard, Info } from "./group-card";

const INFO: Info[] = [
  {
    name: "punpun",
    img: "/punpun.webp",
    role: "depression",
  },
  {
    name: "aiko",
    img: "/aiko.webp",
    role: "depression",
  },
  {
    name: "sachi",
    img: "/sachi.webp",
    role: "depression",
  },
];

const NestedGroup = () => {
  return (
    <ul>
      {INFO.map((info) => (
        <li key={info.name}>
          <GroupCard {...info} />
        </li>
      ))}
    </ul>
  );
};

export { NestedGroup };
