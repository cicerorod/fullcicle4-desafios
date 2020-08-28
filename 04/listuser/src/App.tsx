import React, { useState, useEffect } from "react";
import Users from "./components/users/Users";
import "materialize-css/dist/css/materialize.min.css";
import axios from "axios";

import "./styles";
import { AppContainer, Content } from "./styles";

export default function App() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      axios.get(`https://reqres.in/api/users?per_page=12`).then((res) => {
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
    <AppContainer>
      {/* <div className="container"> */}
      <Content>
        <Users users={users} />
      </Content>
      {/* </div> */}
    </AppContainer>
  );
}
