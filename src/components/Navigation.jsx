import { Link, useNavigate } from "react-router-dom";
import '../assets/style/index.css';
const Navigation=()=>{
    const  nav=useNavigate();
   
   return(
        <>
        <section id="nav">
        <ul>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/location">Location</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        

        <button onClick={nav}>Login</button>
        </ul>
        
       
       
        </section>
       
        </>
    )
}
export default Navigation;
