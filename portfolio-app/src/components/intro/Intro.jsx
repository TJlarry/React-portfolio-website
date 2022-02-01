import "./intro.scss";
// import { init } from "ityped";
//  import { useEffect, useRef} from "react";

export default function intro() {
  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed:60,
  //     strings: ["Developer", "Designer", "Content Creator"],
  //   });
  // }, []);
  

  return (<div className='intro' id='intro'>
    <div className="left">
      <div className="imgContainer">
        <img src="assets/LarryB.jpg" alt=""/>
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2> Hi There, I am </h2>
        <h1>Olanrewaju Alli Oke</h1>
        <h3>Full Stack Web Developer   <span> full Developer</span>
        <a href="assets/Resume.pdf" className="view">View Resume</a>   
        </h3>
      </div>

      <a href="#portfolio"> 
      <img src="assets/down.png" alt=""/>
       </a>
    </div>
  </div>)
}
