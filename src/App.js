import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Donut from "./components/Donut";
import { Navbar, Container, Nav } from "react-bootstrap";
//import { useAppContext } from "./context/context";
//import { useMemo } from "react";

function App() {

  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            href="/"
            style={{ fontFamily: "cursive" }}
          >
            <i className="fas fa-chart-line chart-icon"></i>
            Mywellness Admin
          </Navbar.Brand>
          <Nav>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/chart" className="nav-link">Chart</Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/chart" component={Donut} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
