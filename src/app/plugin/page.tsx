const names = ["naota", "mamimi", "kant"];

const Page = () => {
  return (
    <ul>
      {names.map((v) => (
        <li className="third:text-red-500" key={v}>
          {v}
        </li>
      ))}
    </ul>
  );
};

export default Page;
