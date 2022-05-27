import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigateTo = useNavigate();
  const goLogin = () => {
    navigateTo("/login");
  };

  return (
    <Nav className="justify-content-end" activeKey="/home">
      <span> Ya tienes una cuenta? </span>
      <Nav.Item>
        <Nav.Link onClick={goLogin}>Inicia sesión</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
