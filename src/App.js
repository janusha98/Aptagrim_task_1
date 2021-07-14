import "./styles.css";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

export default function App() {
  const arr = [2, 4, 5, 6];
  console.log(arr.reduce((a, v) => (a = a + v), 0));
  return (
    <div className="App">
      <Row>
        <div>
          <h1>Hello CodeSandbox</h1>
          <h2>Edit to see some magic happen!</h2>
        </div>
      </Row>
    </div>
  );
}
