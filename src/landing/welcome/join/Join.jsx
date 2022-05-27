import { Container, Row, Col } from "react-bootstrap";
import { BsBriefcase } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const cardsInfo = [
  {
    title: "Developer",
    desc: "Encuentra a personas para entrar en el mundo dev",
    type: "1", // id for developers
  },
  {
    title: "Business",
    desc: "Tienes o perteneces a una compañía",
    type: "2", // id for business
  },
];

function Join() {
  const navigateTo = useNavigate();
  const goRegDev = () => {
    navigateTo("/registerdev");
  };

  const goRegBuss = () => {
    navigateTo("/registerbuss");
  };

  let userTypes = cardsInfo.map((card, index) => {
    return (
      <div className="card-box" onClick={card.type == 1 ? goRegDev : goRegBuss}>
        <Row key={index}>
          <Col sm="3">
            <div className="icon-reg">{card.title === "Developer" ? <FaRegUser /> : <BsBriefcase />}</div>
          </Col>
          <Col sm="9">
            <h5>{card.title}</h5>
            <p className="description">{card.desc}</p>
          </Col>
        </Row>
      </div>
    );
  });

  return (
    <Container>
      <div className="title-subtitle">
        <Row>
          <h3>¡Únete a la comunidad!</h3>
          <h5>Para empezar, dinos qué cuenta te gustaría abrir:</h5>
        </Row>
      </div>
      <div className="p-3">{userTypes}</div>
    </Container>
  );
}

export default Join;
