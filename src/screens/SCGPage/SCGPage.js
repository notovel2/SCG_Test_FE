import React from 'react';
import { Card } from 'react-bootstrap';

class SCGPage extends React.Component {
    MATCH_ARRAY = ['x', 'y', 'z']
    INPUT_ARRAY = ["X","5","9","15","23","y","z"]
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>SCG</Card.Header>
                    <Card.Body>
                        {this.renderResult(this.findXYZ(this.INPUT_ARRAY))}
                    </Card.Body>
                </Card>
            </div>
        )
    }

    renderResult(result) {
        return Object.keys(result).map(key => (
            <Card.Text key={key}>{key} : {result[key]}</Card.Text>
        ))
    }

    findXYZ(array){
        let result = {}
        let tmpMatchArray = this.MATCH_ARRAY
        
        try {
            if (Array.isArray(array)) {
                array.forEach((value, index) => {
                    if (tmpMatchArray.length <= 0) { return }
                    value = value.toLowerCase()
                    let matchIndex = tmpMatchArray.findIndex(matchItem => matchItem.toLowerCase() === value)
    
                    if (matchIndex >= 0) {
                        let key = tmpMatchArray[matchIndex].toLowerCase()
                        result[key] = index
                        tmpMatchArray.splice(matchIndex, 1)
                    }
                })
            }
        } catch (error) {
            console.log(error);
            throw error
        }
        console.log(result);
        
        return result
    }
}

export default SCGPage