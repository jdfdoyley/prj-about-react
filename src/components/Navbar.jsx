import icon from "../react-icon-sm.png";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <img className="Navbar--brand-icon" src={icon} alt="React js icon" />
      <h3 className="Navbar--brand-text">ReactFacts</h3>
      <h4 className="Navbar--title-text">React Course - Project 1</h4>
    </nav>
  );
}
