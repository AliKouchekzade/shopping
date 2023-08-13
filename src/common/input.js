const Input = ({ formik, name, type, label }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex justify-between">
        <label className="font-semibold text-lg" htmlFor={name}>{label}</label>
        <label
          className={`text-red-500 relative top-2 ${
            formik.errors[name] && formik.touched[name] ? null : "opacity-0"
          }`}
        >
          {formik.errors[name]}
        </label>
      </div>
      <input
        className="px-8 py-1.5 rounded-lg outline-cyan-700 border-cyan-700 border"
        placeholder={name}
        id={name}
        type={type}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </div>
  );
};

export default Input;
