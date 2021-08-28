import { Row, Col, Container } from "react-bootstrap";
import Board from "./Board";
import Scoreboard from "./Scoreboard";

const Main = () => {
  return (
    <Container>
      <Row
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Col
          xs={11}
          md={11}
          lg={9}
          className="d-flex justify-content-center align-items-center"
        >
          <Row>
            <Col className="d-block">
              <Scoreboard />
              <Board />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
