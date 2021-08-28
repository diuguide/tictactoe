import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { boardState } from "../features/board/boardSlice";

const Scoreboard = () => {
  const board = useSelector(boardState);

  return (
    <Row>
      <Col
        className="d-flex justify-content-center"
        style={{ height: "75px", textAlign: "center" }}
      >
        <div className="announcment">
          {board.move && <div className="ann-banner">WINNER</div>}
          <div className="winner">{board.msg}</div>
        </div>
      </Col>
    </Row>
  );
};

export default Scoreboard;
