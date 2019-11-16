import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './CVPage.css'
import works from '../../constants/workExperience'

class CVPage extends React.Component {
    render() {
        return (
            <Container>
                <Card className="custom-card">
                    <Card.Header>
                        <Card.Title>Watthanai Chotcheewasunthorn</Card.Title>
                    </Card.Header>
                    <Card.Body style={{textAlign: 'left'}}>
                        <Card.Title>Experience</Card.Title>
                        {works.map(work => this.workExperienceRender(work))}
                    </Card.Body>
                </Card>
            </Container>
        )
    }

    workExperienceRender(work) {
        return (
            <div>
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