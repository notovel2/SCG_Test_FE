import React from 'react';
import { Card, Form, Button, Table } from 'react-bootstrap';
import { getPlaces } from '../../services/ScgService';
import { ClipLoader } from 'react-spinners';
class SearchPlaces extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {places: [], fetching: false}
        
    }

    componentDidMount() {
        this.setState({fetching: true})
        getPlaces().then((response) => {
            this.setState({
                fetching: false,
                places: response.data
            })
        })
    }

    render() {
        if (this.state.fetching) {
            return (
                <div style={{'alignSelf': 'center'}}>
                    <ClipLoader loading={this.state.fetching}/>
                </div>
            )
        }
        return (
            <Card>
                <Card.Header>Restaurant around Bangsue</Card.Header>
                <Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Area</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows(this.state.places)}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
    
    renderRows(datalist) {
        return datalist.map((data, index) => (
            <tr key={index.toString()}>
                <td>{data.name}</td>
                <td>{data.vicinity}</td>
            </tr>
        ))
    }
}

export default SearchPlaces