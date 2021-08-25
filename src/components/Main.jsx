import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { boardState } from "../features/board/boardSlice";
import Board from "./Board";

const Main = () => {
  const board = useSelector(boardState);
  const doubleCheck = () => {
    console.log("checking async in Main: ", board);
  } 
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
          <Board double={doubleCheck} />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
