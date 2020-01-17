import React, { useEffect, useState } from 'react';



const Timer = () => {
    const [time, setTime] = React.useState(60);
    setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return <div>Time left: {time} </div>;
  };
// const Timer = () => {
//     const [timeleft, setTimeLeft] = React.useState(60);
//     const calculateTimeLeft = () => {
//         const time = 
//     }
    

//     return (
//         <div>
//             <h2 className="timerHeading">time remaining:</h2>
//             <span className="timer"></span>
//         </div>
//     )
// }

export default Timer;