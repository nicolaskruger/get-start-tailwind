const OddEven = () => {
  return (
    <ul>
      {"_"
        .repeat(10)
        .split("")
        .map((_, i) => {
          return (
            <li className="odd:bg-blue-700 even:bg-red-700" key={i}>
              {i % 2 === 0 ? "odd" : "even"}
            </li>
          );
        })}
    </ul>
  );
};

export { OddEven };
