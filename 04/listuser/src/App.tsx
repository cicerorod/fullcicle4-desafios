import React, { useState, useEffect } from "react";
import Users from "./components/users/Users";
import "materialize-css/dist/css/materialize.min.css";
import axios from "axios";

export default function App() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      axios.get(`https://reqres.in/api/users`).then((res) => {
        setusers(res.data.data);
      });
      // const res = await fetch("https://reqres.in/api/users");
      // const json = await res.json();
      // console.log(json);
      // setusers(json.data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <Users users={users} />
    </div>
  );
}

//https://reqres.in/api/users

// "id": 1,
// "email": "george.bluth@reqres.in",
// "first_name": "George",
// "last_name": "Bluth",
// "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
