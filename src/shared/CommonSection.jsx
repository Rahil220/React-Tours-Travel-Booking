
import React from 'react'
import './common-section.css'
import { Container, Row, Col} from 'reactstrap';

const CommonSection = ({title}) => {
  return (
        <div className="common__section">
            <Container>
                <Row>
                    <Col lg="12">
                        <h1>{title}</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CommonSection