import { CenterAllScreen } from "@/components/center-all-screen";

type Player = {
  name: string;
  description: string;
  id: string;
};

const ChoseYourPlayer = () => {
  return (
    <CenterAllScreen>
      <div>
        <input className="peer/aiko" type="radio" id="aiko" name="character" />
        <label className="peer-checked/aiko:text-blue-400" htmlFor="aiko">
          Aiko
        </label>
        <input
          className="peer/sashi"
          type="radio"
          id="sashi"
          name="character"
        />
        <label className="peer-checked/sashi:text-blue-400" htmlFor="sashi">
          Sashi
        </label>
        <p className="hidden peer-checked/sashi:block">artist</p>
        <p className="hidden peer-checked/aiko:block">teen</p>
      </div>
    </CenterAllScreen>
  );
};

export default ChoseYourPlayer;
