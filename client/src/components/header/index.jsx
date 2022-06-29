import logo from "../assets/choonsik_hobby.jpeg";
import "./Header.css";

function index() {
  return (
    <nav className="navbar">
      <div className="container">
        <div>
          <img src={logo} alt="logo" className="logo" />
          <div id="title">Chonsa Online Bullet Journal</div>
        </div>
      </div>
    </nav>
  );
}

export default index;
