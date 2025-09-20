{/*stateless funcuitonal component, template for navbar: */}
const Navbar = () => {
    return (
    <nav className="navbar">
        <h1>The Dojo Blog</h1>

        <div className="links"></div>
        <a href="/">Home</a>
        {/*Outer braces in stlye meaning a dynamic value is being used
        inside is the javascript object*/}
        <a href="/create" style={{
            //key pairs; css property & value for that propert
            color: "white",
            backgroundColor: "pink"}}>New Blog</a>
</nav>
    );
}
 
export default Navbar;

