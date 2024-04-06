import React, { Fragment } from "react";
import "./Pricing.scss";
import NavBar from "../../Components/Navs/NavBar";
import PropTypes from "prop-types";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//init props
Pricing.propTypes = {};

export default function Pricing(props = {}) {
  function render() {
    return (
      <div className="mainWrapper">
        <Fragment>
        <NavBar />
        <Container>
                    <Row>
                      <Col sm={8}><div>Hola Pricing</div></Col>
                    </Row>
                  </Container>
        </Fragment>
        
      </div>
    );
  }

  return render();
}
