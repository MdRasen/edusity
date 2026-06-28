const Input = ({ label, type, placeholder, name }) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} name={name} required />
    </>
  );
};

export default Input;
