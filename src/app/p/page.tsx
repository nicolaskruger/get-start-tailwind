import { CenterAllScreen } from "@/components/center-all-screen";

const Page = () => {
  return (
    <CenterAllScreen>
      <div className="[&_p]:mt-4 [&_p]:text-red-500">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          provident ex, deleniti ut aut dolor. Repellendus id dolores et
          quibusdam ipsum, rem quasi ratione laudantium maxime aperiam iste
          temporibus vel!
        </p>
        <ul>
          <li>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              provident voluptas quis quam minima repellat atque, eligendi sit
              possimus, culpa adipisci placeat? Magnam tempora consequuntur
              voluptatibus ea, aperiam culpa totam!
            </p>
          </li>
        </ul>
      </div>
    </CenterAllScreen>
  );
};

export default Page;
