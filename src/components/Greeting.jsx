import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessage } from '../redux/regardReducer';
import '../App.css';

const Greeting = () => {
  const regard = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);
  return (
    <>
      <h1>Welcome to the Front-end: </h1>
      <h3>The message below is coming from the API:</h3>
      <p>{regard.message}</p>
    </>
  );
};

export default Greeting;
