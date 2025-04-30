import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import signup from "../../assets/signup.png";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

type LoginFormData = yup.InferType<typeof schema>;

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Login Page location", location);
  const from = location.state?.from || "/"; // Default to home if no redirect path
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormData) => {
    const { username, password } = data;

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user exists and password matches
    const user = users.find(
      (u: { username: string; password: string }) => 
        u.username === username && u.password === password
    );

    // Also check for the default test user
    if (user || (username === "Rimel" && password === "123456")) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem(
        "currentUser",
        JSON.stringify(user || { username: "Rimel", email: "rimel1111@gmail.com" })
      );

      setMessage({ text: "Login successful. Redirecting...", type: "success" });

      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);
    } else {
      setMessage({ text: "Invalid username or password", type: "error" });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#ebf5f8] rounded-lg p-8 flex items-center">
          <img src={signup} alt="Shopping" className="w-full h-auto" />
        </div>
        <div>
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-medium mb-6">Log in to SnapShop</h1>
            <p className="text-gray-600 mb-8">Enter your details below</p>

            {message && (
              <div
                className={`mb-4 p-3 rounded-md text-sm ${
                  message.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message.text}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  {...register("username")}
                  className="w-full border rounded-md px-4 py-2"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  className="w-full border rounded-md px-4 py-2"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-[#e74c3c] text-white rounded-md px-8 py-3 font-medium hover:bg-[#c0392b] transition-colors"
                >
                  Log in
                </button>
                <Link to="/forgot-password" className="text-[#e74c3c] py-3">
                  Forgot Password?
                </Link>
              </div>
            </form>

            <p className="text-center mt-6">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#e74c3c]">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
