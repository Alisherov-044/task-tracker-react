import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h5 className="footer--copyright">Copyright © {year}</h5>
      <Link className="footer--link" to="/about">
        about
      </Link>
    </footer>
  );
}
