import logo from "../images/logo.svg";

export default function Nav() {
  return (
    <nav className="flex justify-around">
      <img src={logo} alt="licker" height="50px" width="50px" />
      <a href="/">liqs 'r us</a>
    </nav>
  );
}
