"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
  const [currentTab, setCurrentTab] = useState("Mobile Number");

  const [user, setUser] = useState({
    mobileNumber: '',
    username: '',
    pin: '',
    password: '',
    district: ''
  })
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPin, setShowPin] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePinVisibility = () => {
    setShowPin(!showPin);
  };

  return (
    <div className='flex flex-col items-center justify-center bg-[#F1F1F1]'>
      <div className="flex items-center justify-center gap-2 my-8">
        <img src="/Logo.svg" alt="Logo" className='w-[101.5px] h-[101.5px]' />
        <div className='flex flex-col items-center justify-center text-[#000000]'>
          <p
            className='font-semibold text-[40px] leading-[60.05px] font-[family-name:var(--font-Jaldi)]'
          >
            एक इंच
          </p>
          <p
            className='font-normal text-[16px] leading-[20.18px] font-[family-name:var(--font-Jaldi)]'
          >
            आगे बड़े शौक से
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center p-12 bg-[#FFFFFF] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[10px] w-[652px] font-[family-name:var(--font-Poppins)] leading-8 mb-5">
        <div className="flex w-full h-[60px] rounded-md border border-[#D2D2D2] text-[#000000] text-center font-semibold text-[22px]">
          <button
            onClick={() => setCurrentTab("Mobile Number")}
            className={`w-1/2 py-2 ${currentTab === "Mobile Number" ? 'bg-[#FEBA0F]' : 'bg-transparent '}`}
          >
            Mobile Number
          </button>
          <button
            onClick={() => setCurrentTab("Username")}
            className={`w-1/2 py-2 ${currentTab === "Username" ? 'bg-[#FEBA0F]' : 'bg-transparent '}`}
          >
            Username
          </button>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full mt-4">
          {currentTab === "Mobile Number" ? (
            <>
              <input
                type="text"
                placeholder="Mobile Number*"
                value={user.mobileNumber}
                onChange={(e) => setUser({ ...user, mobileNumber: e.target.value })}
                required
                className="border border-gray-300 p-2 rounded-md"
              />
              <div className="relative">
                <input
                  type={showPin ? 'text' : 'password'}
                  placeholder="6 Digit Security PIN"
                  value={user.pin}
                  onChange={(e) => setUser({ ...user, pin: e.target.value })}
                  required
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
                <button
                  type="button"
                  className="absolute top-3 right-5 text-[#CBCBCB]"
                  onClick={togglePinVisibility}

                >
                  {showPin ? <FiEyeOff size={25} /> : <FiEye size={25} />}
                </button>
              </div>
              <input
                type="text"
                placeholder="District Magistrate"
                value={user.district}
                onChange={(e) => setUser({ ...user, district: e.target.value })}
                required
                className="border border-gray-300 p-2 rounded-md"
              />
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                required
                className="border border-gray-300 p-2 rounded-md"
              />
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  required
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
                <button
                  type="button"
                  className="absolute top-3 right-5 text-[#CBCBCB]"
                  onClick={togglePasswordVisibility}

                >
                  {showPassword ? <FiEyeOff size={25} /> : <FiEye size={25} />}
                </button>
              </div>
            </>
          )}

          <Link href="#" className="font-normal text-[#FE820F] hover:underline self-start">
            Forgot Security PIN?
          </Link>

          <button
            type="submit"
            className="bg-[#000000] text-white text-[24px] leading-9 font-bold py-2 rounded-[100px] w-full mt-2"
          >
            Sign In
          </button>

          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}


