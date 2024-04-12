import React, { useState } from "react";

export const Message = ({ message, onSubmit }) => {
  const [data, setData] = useState(message);
  const [crash, setCrash] = useState(false);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (data === "crash") {
      setCrash(true);
    }

    onSubmit(data);
    setData("");
  };

  if (crash) throw { message: "CRASHED" };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={data} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
