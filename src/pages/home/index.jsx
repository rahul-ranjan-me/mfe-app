import React, { useContext, useRef } from "react";
import { GlobalContext } from "shared/Components";
import { Link } from "react-router-dom";

const Home = () => {
  const { user, setUser } = useContext(GlobalContext);
  const userRef = useRef();
  const onBtnClick = () => setUser(userRef.current.value);

  return (
    <>
      <h1>{`This is a home page ${user}`}</h1>
      <input type="text" ref={userRef} />
      <button type="button" onClick={onBtnClick}>
        Update
      </button> <br /><br />
      <Link to="/payments/about">Go to same micro-frontend deeper link</Link> <br />
    </>
  );
};

export default Home;
