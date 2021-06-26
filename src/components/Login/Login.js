import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      {/*spotify logo*/}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify"
      />
      {/*end spotify logo*/}

      {/*login spotify button*/}
      <a>LOGIN WITH SPOTIFY</a>
      {/*end login spotify button*/}
    </div>
  );
};

export default Login;
