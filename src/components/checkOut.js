import { useEffect } from "react";
import { useAuth, useAuthActions } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const { isLogin } = useAuthActions();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLogin());
    if (!isLogin()) navigate("/login");
  }, [isLogin,navigate]);

  const userInfo = useAuth() || {};
  return (
    <section className="bg-cyan-100 rounded-lg py-6 px-10 flex flex-col gap-y-5">
      <p>{userInfo.name}</p>
      <p>{userInfo.email}</p>
      <p>{userInfo.phoneNumber}</p>
    </section>
  );
};

export default CheckOut;
