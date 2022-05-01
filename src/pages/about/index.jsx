import React, { useContext, useRef, Suspense, useState } from "react";
import { GlobalContext } from "shared/Components";

const Home = () => {
  const { user, setUser } = useContext(GlobalContext);
  const userRef = useRef();
  const onBtnClick = () => setUser(userRef.current.value);

  return (
    <Suspense fallback="loading">
      <h1>{`This is an about page ${user}`}</h1>
      <input type="text" ref={userRef} />

      <button type="button" onClick={onBtnClick}>
        Update
      </button>
    </Suspense>
  );
};

export default Home;
