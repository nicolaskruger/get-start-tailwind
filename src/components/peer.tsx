const Peer = () => {
  return (
    <div className="flex flex-col">
      <label className="first-letter:capitalize" htmlFor="email">
        email:
      </label>
      <input
        type="email"
        className="peer invalid:bg-red-50 invalid:text-red-600 text-black"
      />
      <p className="text-red-500 invisible peer-invalid:visible">
        invalid email
      </p>
    </div>
  );
};

export default Peer;
