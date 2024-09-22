import { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";

const name = "";
const password = "";
const Register = () => {
  const navigate = useNavigate(); //페이지 이동을 위한 react-router-dom hook
  const [state, setState] = useState({ name, password });
  const [err, setErr] = useState("");
  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = async () => {
    setErr("");
    try {
      const data = await register(state);
      navigate("/login");
    } catch (error) {
      const data = error.response.data;
      setErr(data);
    }
  };
  return (
    <div className="w-full h-screen px-[200px] py-[50px] bg-[#1F2028] flex justify-center">
      <div className="mt-[40px] w-[420px] h-[420px] bg-[#2A2B37] rounded-sm">
        <h1 className="text-center text-[#CAC3C9] font-bold text-[32px] mt-[50px] mb-[40px]">
          Sign Up
        </h1>
        <h2 className="text-[#FCECAF] text-center text-[13px]">{err}</h2>
        <div className="flex justify-center">
          <input
            className="min-h-[40px] mt-[10px] mb-[10px] w-[250px] px-[10px] rounded text-white bg-[#1F2028]"
            type="text"
            name="name"
            onChange={onChange}
            placeholder="ID"
          />
        </div>
        <div className="flex justify-center">
          <input
            className="min-h-[40px] w-[250px] px-[10px] rounded text-white bg-[#1F2028]"
            type="password"
            name="password"
            onChange={onChange}
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="mt-[45px] w-[100px] h-[40px] rounded-sm bg-[#FCECAF] text-[#2A2B37] text-[13px] font-semibold"
            onClick={onSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
