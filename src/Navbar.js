import {Link} from "react-router-dom";

{/*stateless funcuitonal component, template for navbar: */}
const Navbar = () => {
    return (
    <nav className="navbar">
        <h1>The Dojo Blog</h1>

        <div className="links"></div>
        <Link to="/">Home</Link>
        
        <Link to="/create" style={{
            //key pairs; css property & value for that property
            color: "white",
            backgroundColor: "pink"}}>New Blog</Link>
</nav> //Outer braces in stlye meaning a dynamic value is being used inside is the javascript object
    );
}
 
export default Navbar;

