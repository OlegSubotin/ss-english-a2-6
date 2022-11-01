import React from 'react';
import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 60,
      }}
    >
      <ReactLoading type="spinningBubbles" color=" #50A4FF" />
    </div>
  )
};

export default Loader