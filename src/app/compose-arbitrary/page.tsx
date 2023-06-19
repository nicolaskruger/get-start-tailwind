import { CenterAllScreen } from "@/components/center-all-screen";

const names = ["aiko", "punpun", "seki", "sachi"];

const Page = () => {
  return (
    <CenterAllScreen>
      <ul>
        {names.map((v) => (
          <li className="lg:[&:nth-child(3)]:hover:underline" key={v}>
            {v}
          </li>
        ))}
      </ul>
    </CenterAllScreen>
  );
};

export default Page;
