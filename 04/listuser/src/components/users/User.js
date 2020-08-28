import React from "react";

import css from "./user.module.css";

export default function User({ user }) {
  const { first_name, last_name, avatar, email } = user;

  return (
    <div className={css.flexRow}>
      <img className={css.avatar} src={avatar} alt={first_name} />
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
