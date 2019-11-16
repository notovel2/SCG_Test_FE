import React from 'react';
import { Container, Card, Row } from 'react-bootstrap';
import './CVPage.css'
import {works} from '../../constants/cv'

class CVPage extends React.Component {
    render() {
        return (
            <Container>
                <Card className="custom-card">
                    <Card.Header>
                        <Card.Title>Watthanai Chotcheewasunthorn</Card.Title>
                    </Card.Header>
                    <Card.Body style={{textAlign: 'left'}}>
                        <div className="section">
                            <Card.Title>Experience</Card.Title>
                            {works.map(work => this.workExperienceRender(work))}
                        </div>

                        <Row>
                            <div className="col-sm-6 section">
                                <Card.Title>Skills</Card.Title>
                            </div>
                            <div className="col-sm-6 section">
                                <Card.Title>Side Projects</Card.Title>
                            </div>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        )
    }

    workExperienceRender(work) {
        return (
            <div style={{marginTop: '10px'}}>
                <Card.Subtitle>{work.position}</Card.Subtitle>
                <Card.Subtitle>{work.workPlace} {work.period}</Card.Subtitle>
                {work.responsibillity.map(value => this.bulletSection(value))}
            </div>
        )
    }

    bulletSection(text) {
        return (
            <Card.Text 
                style={{marginLeft: '5px', marginTop: '0px', marginBottom: '0px'}}>
                ● {text}
            </Card.Text>
        )
    }
    
}

export default CVPage