import React, { useState } from "react";
import axios from "axios";
import "../../styles/login.scss";
import { Link } from "react-router-dom";
import { sz } from "../../assets/index";
// import Investorpage from "../../pages/Investorpage";
// import Investors from '../../pages/Investors';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user_type, setUserType] = useState("investor");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
        user_type,
      }); 
      setLoading(false);
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        // Redirect to dashboard or any other page
        switch (user_type) {
          case "investor":
            window.location.href = "/investor-dashboard";
            break;
          case "distributor":
            window.location.href = "/distributor-dashboard";
            break;
          case "administrator":
            window.location.href = "/admin/dashboard";
            break;
          default:
            break;
        }
      }
    } catch (error) {
      setLoading(false);
      setError("Invalid username or password");
    }
  };

  return (
    <body>
    <main>
    <div className="loginComponent">
      
    
    
      <div className="image">
      <Link to="/">
          <img src={sz} width={80} height={80} alt="Smart Zindagi" />
         </Link>
         
      </div>
      <form onSubmit={handleSubmit}>

<div className="loginForm">
  
  <div> 
  <p> Manage Your Account...</p>
<div className="inputs"> 
      <label >Login as : </label>
      <select className="dropdown"
       name="user_type"
               value={user_type}
              onChange={(e) => setUserType(e.target.value)}
      >
                  
                 <option value="investor">Investor</option>
                 <option value="distributor">Distributor</option>
                <option value="administrator">Administrator</option>

      </select>
       </div>

       <div className="inputs">
      <label > Username  :</label> 
      <input type="text" name="username"
               placeholder=" Enter the username"
               value={username}
             onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div className="inputs">
      <label > Password :</label>
      <input
                 type="password"
                 name="password"
                placeholder=" Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
               />
      </div>

      {error && <p className="error">{error}</p>}
<div>
<h6 className="credential">Login credentials are case sensitive</h6>
<button type="submit" id="login" disabled={loading}>
 {loading ? "Logging in..." : "Login"}
 </button></div>
 <div>
  <div className="footer">
<h6 className="hyperlink"><Link to="/">Forgot Password?</Link></h6>

<h6 className="createNew"><Link to="/sign-up">Create new Account</Link></h6>

</div>
</div>
</div>
</div>
        </form>
    

  </div>
</main>
</body>
  );
};

export default Login;


// const Login = () => {
//   return (
//     <>
//     <form className='loginContainer'>
//       <div className='loginHeader'>
//         <h4>Manage Your Account</h4>
//       </div>

//       <div className="inputs">
//       <div >
//         <label htmlFor="loginAs">Login as:</label>
//         <select id="loginAs" name="loginAs">
//         <option value="investor">Investor</option>
//           <option value="distributor">Distributor</option>
//           <option value="administrator">Administrator</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="userName">User Name:</label>
//         <input type="text" id="userName" placeholder="Enter User Name" name="userName" />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" placeholder="Enter Your Password" name="password" />
//       </div>
//       </div>
//      <p className='credentials'>Login credentials are case sensitive
// </p>
//       <button type='submit' id="login">Login</button>

//      <div>
//      {/* <label htmlFor="forgot_password">Forgot Password</label> */}
//      {/* <input type="email" id="forgot_password" placeholder="Enter your Email" name="email" />
//      <br /> <br /> */}
//      {/* <button type='submit'>Submit</button> */}
//      </div>
//     </form>
//      <div>

//      </div>
//     </>
//   );
// };

// export default Login;