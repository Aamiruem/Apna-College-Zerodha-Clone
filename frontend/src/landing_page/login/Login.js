// import React, { useState } from "react";
// import axios from "axios";

// function Login() {

//   const [user, setUser] = useState({
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:3002/login", user);
//       alert(res.data.message);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>

//       <h2>Login</h2>

//       <form onSubmit={handleSubmit}>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />

//         <br /><br />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />

//         <br /><br />

//         <button type="submit">Login</button>

//       </form>

//     </div>
//   );
// }

// export default Login;




import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ Basic validation
        if (!user.email || !user.password) {
            alert("Please fill all fields");
            return;
        }

        try {
            const res = await axios.post(
                "http://localhost:3002/api/login", // ✅ FIXED URL (important)
                user
            );

            alert(res.data.message);
        } catch (err) {
            console.log(err);

            // ✅ Better error handling
            if (err.response) {
                alert(err.response.data.message || "Login failed");
            } else {
                alert("Server not responding");
            }
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                />

                <button type="submit">Login</button>
            </form>

            <p>
                Don't have an account? <Link to="/signup">Signup</Link>
            </p>
        </div>
    );
}

export default Login;
