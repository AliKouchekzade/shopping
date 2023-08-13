import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../common/input";
import { Link } from "react-router-dom";
import { loginHttp } from "../services/http";
import { toast } from "react-toastify";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const { data } = await loginHttp({
          email: values.email,
          password: values.password,
        });
        console.log(data);
        toast.success("logined successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        toast.error(`${error.response.data.message}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("email is not valid")
        .required("email is required"),
      password: Yup.string().required("password is required"),
    }),
    validateOnMount: true,
  });

  return (
    <section className="bg-cyan-100 rounded-lg py-6 px-10 flex flex-col gap-y-5">
      <h2 className="text-3xl">Login</h2>
      <form className="flex flex-col gap-y-6" onSubmit={formik.handleSubmit}>
        <Input formik={formik} type="text" name="email" label="Email" />
        <Input
          formik={formik}
          type="password"
          name="password"
          label="Password"
        />
        <button
          type="submit"
          className={`bg-cyan-600 py-1.5 text-lg text-white rounded-lg mt-2 ${
            !formik.isValid && "opacity-30"
          }`}
        >
          Login
        </button>
      </form>
      <p>
        don't have account?{"  "}
        <Link to="/signup" className="text-blue-600">
          sign up here
        </Link>
      </p>
    </section>
  );
};

export default Login;
