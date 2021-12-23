import { Container, Row } from "react-bootstrap";

function Home() {
    return (
        <div>
            <Row nogutters="true" className="text-center align-items-center">
                <Container style={{ marginTop: "12rem" }}>
                    <div className="items-center">
                        <h1 style={{ marginBottom: "12rem", color: "#e63946" }}>Welcome to Mywellness Admin!</h1>
                        <button className="mt-6 btn-main">If you're looking for results follow any navigation link!</button>
                    </div>
                </Container>
            </Row>
        </div>
    )
}

export default Home
