import React from "react";
import CommonSection from "../shared/CommonSection";

import "../styles/tour.css";

import tourData from './../assets/data/tours'
import SearchBar from './../shared/SearchBar'
import TourCard from './../shared/TourCard'
import { Col, Container, Row } from "reactstrap";

const Tours = () => {
    
    return (
        <>
            <CommonSection title={"All Tours"} />
            <section>
                <Container>
                    <Row>
                        <SearchBar />
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Container>
                    <Row>
                        {
                            tourData ?.map(tour => <Col lg='3' className="mb-4" key={tour.id}><TourCard tour={tour} /></Col>)
                        }
                        
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default Tours;