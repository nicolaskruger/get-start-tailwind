import { CustomInput } from "./custom-input";

const CustomForm = () => {
  return (
    <form className=" flex flex-col justify-center ">
      <label htmlFor="required">required</label>
      <CustomInput required id="required" />
      <label htmlFor="invalid">invalid</label>
      <CustomInput type="email" id="invalid" />
      <label htmlFor="disabled">disabled</label>
      <CustomInput disabled id="disabled" />
      <label htmlFor="read-only">read-only</label>
      <CustomInput readOnly id="read-only" />
      <label htmlFor="checked">checked</label>
      <CustomInput checked id="checked" />
      <button className="bg-red-700">submit</button>
    </form>
  );
};

export { CustomForm };
