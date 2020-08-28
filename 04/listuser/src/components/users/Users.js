import React, { useState, useEffect } from "react";
import User from "./User";

export default function Users({ users }) {
  const [secondsVisible, setsecondsVisible] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setsecondsVisible(secondsVisible + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [secondsVisible]);

  return (
    <div>
      <ul>
        {users.map((user) => {
          const { id } = user;
          return (
            <div
              key={id}
              style={{
                fontSize: "1,5rem",
                color: "#000000",
                background: "#E0E0E0",
                marginTop: "05px",
                padding: "05px",
                margin: "05px",
              }}
            >
              <User user={user} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
