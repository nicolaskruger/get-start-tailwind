const CustomInput = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input
      className="bg-slate-500 required:bg-blue-500 invalid:bg-purple-500 disabled:bg-green-500 read-only:border-l-orange-500  checked:bg-slate-500"
      {...props}
    />
  );
};

export { CustomInput };
