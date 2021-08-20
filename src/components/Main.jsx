import { Row, Col, Container } from "react-bootstrap";

const Main = () => {
    return (
        <Container>
            <Row style={{ height: "100vh"}} className="d-flex justify-content-center align-items-center">
                <Col xs={11} md={11} lg={9} className="d-flex justify-content-center align-items-center">
                <h1>Test</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;