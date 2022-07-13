/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import './Loading.scss';

function Loading() {
  return (
    <div className="preloader" style={{ opacity: '1' }}>
      {/* <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
      </svg> */}
      <div className="text">
        LOOKING OUTSIDE FOR YOU... ONE SEC
      </div>
    </div>
  );
}

export default Loading;
