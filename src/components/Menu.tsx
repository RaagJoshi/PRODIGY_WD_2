import { Link } from "react-router-dom";

function Menu({ content }: string) {
  return (
    <>
      <div className="navbar">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
        <Link className="link" to="/services">
          Services
        </Link>
      </div>

      <div className="content">
        <b>{content}</b>
      </div>
    </>
  );
}

export default Menu;
