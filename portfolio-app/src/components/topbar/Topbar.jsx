import "./topbar.scss";
import {Person,Mail, GitHub, LinkedIn} from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {
  return (<div className={"topbar " + (menuOpen && "active")}>
         <div className="wrapper">
          <div className="left">
           <a href="#intro" className="logo">Love2Code</a>
           <div className="itemContainer">
               <Person className="icon"/>
               <span>204-293-5652</span>
           </div>
           <div className="itemContainer">
               <Mail className="icon"/>
               <span>alliokelanre@gmail.com</span>
           </div>
           <div className="itemContainer">
               
                <span> <a href="https://github.com/TJlarry">  <GitHub className="icon"/> </a></span>
           </div>
           <div className="itemContainer">
               
                <span><a href="https://www.linkedin.com/in/olanrewajuallioke/"><LinkedIn className="icon"/> </a></span>
           </div>

           </div>
        
          
          <div className="right">
              <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                  <span className="line1"> </span>
                  <span className="line2"> </span>
                  <span className="line3"> </span>
              </div>           
          </div>
      </div>
  </div>);
}
