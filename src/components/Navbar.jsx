import logo from "../assets/Logo.png"
function Navbar() {
  return (
    <nav className="navbar">
     <div className="logo-container">
        <img src={logo} alt="Dhruv Logo" className="nav-logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#work">Works</a></li>
        <li><a href="#skills">Skills</a></li>        
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;