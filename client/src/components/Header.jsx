import logo from "./assets/choonsik_hobby.jpeg";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>Chonsa Online Bullet Journal</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
