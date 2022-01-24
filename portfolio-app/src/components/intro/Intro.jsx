import "./intro.scss";

export default function intro() {
  return <div className='intro' id='intro'>
    <div className="left">
      <div className="imgContainer">
        <img src="assets/LarryB.jpg" alt=""/>
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2> Hi There, I am </h2>
        <h1>Olanrewaju Alli Oke</h1>
        <h3>Full Stack Web Developer<span></span></h3>
      </div>

      <a href="#portfolio"> 
      <img src="assets/down.png" alt=""/>
       </a>
    </div>
  </div>;
}
