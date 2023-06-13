const names = ["punpun", "aiko", "seki", "sashi"];

const FirstLast = () => {
  return (
    <div>
      <ul>
        {names.map((name) => (
          <li className="bg-black first:bg-red-950 last:bg-blue-950" key={name}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { FirstLast };
