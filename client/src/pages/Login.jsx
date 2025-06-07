import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const Login = () => {
  const { backendUrl, setIsLoggedin, navigate } = useContext(AppContext);

  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true;
      if (state === "register") {
        const { data } = await axios.post(backendUrl + "/api/auth/register", {
          name,
          email,
          password,
          date_of_birth,
        });
        if (data.success) {
          setIsLoggedin(true);
          navigate("/home");
        } else {
          alert(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/auth/login", {
          email,
          password,
        });
        if (data.success) {
          setIsLoggedin(true);
          navigate("/home");
        } else {
          alert(data.message);
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="pt-20 bg-cyan-500 h-screen">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-blue-950"
      >
        <p className="text-2xl font-medium m-auto bg-cyan-500 p-3">
          {state === "login" ? "LOGIN" : "SIGN UP"}
        </p>
        <img
          id="passport"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Avatar_user_enterprise.png/640px-Avatar_user_enterprise.png"
          alt=""
          className="w-20 mx-auto rounded-full"
        ></img>

        {state === "register" && (
          <div className="w-full">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-cyan-500 bg-white/30 text-white"
              type="text"
              required
            />
          </div>
        )}
        <div className="w-full ">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-cyan-500 bg-white/30 text-white"
            type="email"
            required
          />
        </div>
        {state === "register" && (
          <div className="w-full ">
            <input
              onChange={(e) => setDate_of_birth(e.target.value)}
              value={date_of_birth}
              placeholder="Date of Birth"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-cyan-500 bg-white/30 text-white"
              type="date"
              required
            />
          </div>
        )}
        <div className="w-full ">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-cyan-500 bg-white/30 text-white"
            type="password"
            required
          />
        </div>
        {state === "login" ? (
          <p>
            Create an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-cyan-500 cursor-pointer"
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Already have account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-cyan-500 cursor-pointer"
            >
              click here
            </span>
          </p>
        )}
        <button className="bg-cyan-500 hover:bg-cyan-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
