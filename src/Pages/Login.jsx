import React from "react";

export default function Login() {
  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...showUser, [name]: value });
  };

  const PostData = async () => {};
  return (
    <div className={LCss.mDIv}>
      <p>Login</p>
      <input type="email" name="email" placeholder="Email" onChange={DataInp} />
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password"
        onChange={DataInp}
      />
      <div
        onClick={() => {
          setPassword(!showPassword);
        }}
      >
        {showPassword ? "Show Password" : "Hide Password"}
      </div>

      <div>
        <button onClick={PostData}>Login</button>
      </div>
    </div>
  );
}
