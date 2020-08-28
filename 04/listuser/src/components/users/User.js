import React from "react";

import css from "./user.module.css";

export default function User({ user }) {
  const { first_name, last_name, avatar, email } = user;
  const classes = `card ${css.cardExtra}`;

  return (
    <div className={css.flexRow}>
      {/* <div className={"card"}> */}
      <img className={css.avatar} src={avatar} alt={first_name} />
      {/* <div style={{ fontWeight: "bold" }}>
        {first_name} {last_name}{" "}
      </div>
      <br /> */}
      <span>
        <span style={{ fontWeight: "bold" }}>
          {" "}
          {first_name} {last_name}{" "}
        </span>
        <br />
        {email}
      </span>
    </div>
  );
}

// "id": 1,
// "email": "george.bluth@reqres.in",
// "first_name": "George",
// "last_name": "Bluth",
// "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
