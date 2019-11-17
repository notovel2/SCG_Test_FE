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
                                {this.sideProjectRender(sideProject)}
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
                    <div>
                        <Card.Subtitle>{skillItem.title}</Card.Subtitle>
                        {skillItem.data.map(value => (
                            <Row style={{alignItems: 'baseline', marginRight: 0, marginLeft: '20px'}}>
                                <Card.Subtitle style={{marginRight: '5px'}}>● {value.title}</Card.Subtitle>
                                <Card.Text>{value.itemslist.join(', ')}
                                </Card.Text>
                            </Row>
                        ))}
                    </div>
                )
            } else {
                return (
                    <Row style={{alignItems: 'baseline', marginRight: 0, marginLeft: 0}}>
                        <Card.Subtitle style={{marginRight: '5px'}}>{`${skillItem.title}:`}</Card.Subtitle>
                        <Card.Text>{skillItem.data.join(', ')}</Card.Text>
                    </Row>
                )
            }
            
        })
    }

    sideProjectRender(data) {
        console.log(data);
        
        return (
            <div>
                {data.map(section => (
                    <div style={{marginBottom: '1rem'}}>
                        <Card.Subtitle>{section.title}</Card.Subtitle>
                        {section.data.map(value => (
                            <div>
                                <Card.Text style={{marginBottom: '0px'}}>{value.title}</Card.Text>
                                <Card.Link href={value.url}>{value.url}</Card.Link>
                            </div> 
                        ))}
                    </div>
                ))}
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