import React, { useState } from 'react';

const Progress = () => {

  const [progress,setProgress]= useState(0);
  const [stroke,setStroke]= useState(0);

    window.addEventListener('scroll', () => {
      const body = document.body,
        html = document.documentElement;
      //gets the total height of page till scroll
      const totalheight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      // calculates the total stroke value
      setProgress(totalheight);
      const currentDistance = window.scrollY / (totalheight / 3000);
      // calculates the current stroke value
      setStroke(totalheight - currentDistance / 8);
      // condition to hide scroll progress if page in top
      if (window.scrollY == 0) {
         setStroke(totalheight);
      }
      // condition to make scroll progress to 100 if page in bottom
      if (window.innerHeight + window.scrollY >= totalheight) {
         setStroke(0);
      }
    });
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }
  return (
    <>
      <div onClick={scrollToTop} className={`progress-wrap ${stroke < progress?'active-progress':''}`} >
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: 'stroke-dashoffset 10ms linear 0s',
              strokeDasharray: `${progress}px, ${progress}px`,
              // strokeDasharray: '307.919px, 307.919px',
              strokeDashoffset: `${stroke}px`,
            }}
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Progress;
