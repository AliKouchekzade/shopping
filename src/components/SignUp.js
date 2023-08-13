import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../common/input";
import { Link } from "react-router-dom";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => console.log(values),
    validationSchema: Yup.object({
      firstName: Yup.string().required("first name is required"),
      lastName: Yup.string().required("last name is required"),
      email: Yup.string()
        .email("email is not valid")
        .required("email is required"),
      phoneNumber: Yup.string()
        .required("number is required")
        .test(
          "len",
          "invalid phone number",
          (val) => val.toString().length === 10
        ),
      password: Yup.string()
        .min(8, "at least 8 characters")
        .matches(/[a-z]/, "at least one lowercase char")
        .matches(/[A-Z]/, "at least one uppercase char")
        .required("password is required"),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "passwords must match")
        .required("password confirm is required"),
    }),
    validateOnMount: true,
  });

  return (
    <section className="bg-cyan-100 rounded-lg py-6 px-10 flex flex-col gap-y-5">
      <h2 className="text-3xl">Sign Up</h2>
      <form className="flex flex-col gap-y-6" onSubmit={formik.handleSubmit}>
        <Input
          formik={formik}
          type="text"
          name="firstName"
          label="First Name"
        />
        <Input formik={formik} type="text" name="lastName" label="Last Name" />
        <Input formik={formik} type="text" name="email" label="Email" />
        <Input
          formik={formik}
          type="number"
          name="phoneNumber"
          label="Phone Number"
        />
        <Input
          formik={formik}
          type="password"
          name="password"
          label="Password"
        />
        <Input
          formik={formik}
          type="password"
          name="passwordConfirm"
          label="Password Confirm"
        />
        <button
          type="submit"
          className={`bg-cyan-600 py-1.5 text-lg text-white rounded-lg mt-2 ${
            !formik.isValid && "opacity-30"
          }`}
        >
          sign up
        </button>
      </form>
      <p>
        have account?{"  "}
        <Link to="/login" className="text-blue-600">
          Login here
        </Link>
      </p>
    </section>
  );
};

export default SignUp;
