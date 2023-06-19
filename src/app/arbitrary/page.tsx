import { CenterAllScreen } from "@/components/center-all-screen";

const names = ["naruto", "sasuke", "sakura"];

const Page = () => {
  return (
    <CenterAllScreen>
      <ul>
        {names.map((name) => (
          <li key={name} className="[&:nth-child(3)]:underline">
            {name}
          </li>
        ))}
      </ul>
    </CenterAllScreen>
  );
};

export default Page;
