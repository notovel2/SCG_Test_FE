import React from 'react';
import { Container, Card, Row } from 'react-bootstrap';
import './CVPage.css'
import { works, skills, sideProject, education, contact } from '../../constants/cv'

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
                                {this.skillsRender(skills)}
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

    workExperienceRender(data) {
        return (
            <div style={{marginTop: '10px'}}>
                <Card.Subtitle>{data.position}</Card.Subtitle>
                <Card.Subtitle>{data.workPlace} {data.period}</Card.Subtitle>
                {data.responsibillity.map(value => this.bulletSection(value))}
            </div>
        )
    }

    skillsRender(data) {
        return data.map(skillItem => {
            if (skillItem.isDataObject) {
                return (
                    <Card.Subtitle>{skillItem.title}</Card.Subtitle>
                )
            } else {
                return (
                    <div>
                        <Row style={{alignItems: 'baseline', flexDirection: 'row'}}>
                            <Card.Subtitle style={{marginRight: '5px'}}>{`${skillItem.title}:`}</Card.Subtitle>
                            <Card.Text>{skillItem.data.join(', ')}</Card.Text>
                        </Row>
                    </div>
                )
            }
            
        })
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