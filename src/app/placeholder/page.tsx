import { CenterAllScreen } from "@/components/center-all-screen";

const Page = () => {
  return (
    <CenterAllScreen>
      <input
        type="text"
        className="placeholder:italic placeholder:text-slate-400"
        placeholder="Naruto"
      />
    </CenterAllScreen>
  );
};

export default Page;
