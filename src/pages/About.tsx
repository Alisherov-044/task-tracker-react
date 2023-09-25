import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <main className="main">
      <div className="wrapper">
        <h4 className="text">version: 1.0.0</h4>
        <h4 className="text">release: 2023</h4>
        <h4 className="text">framework: Next js</h4>
        <Link className="link" to="/">
          go back
        </Link>
      </div>
    </main>
  );
}
