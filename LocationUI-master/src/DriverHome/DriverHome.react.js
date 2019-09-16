import React from 'react';

import './DriverHome.css';
import Nav from 'react-bootstrap/Nav';

class DriverHome extends React.Component {
    constructor(props) {
        super(props);

        
    }
    handleRouting() {
        window.location.replace("http://localhost:3002/");
    }
    
    render() {
        return (
            <div className='driverhome_wrapper'>
                <Nav variant="pills" defaultActiveKey="/home" className="justify-content-center bg-dark">
                <Nav.Item>
                        <Nav.Link onClick={this.handleRouting} href="/home"><button className="btn btn-primary">Home</button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/startTrip"><button className="btn btn-primary">View Assigned Trip</button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/History"><button className="btn btn-primary">History</button></Nav.Link>
                    </Nav.Item>
                    </Nav>
                    
                </div>
        );
    }
}

export default DriverHome;