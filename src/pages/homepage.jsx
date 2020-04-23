import React from 'react'

// libraries
import {
    Container,
    Row,
    Col
} from 'reactstrap'

// components
import Topsection from './components_homepage/topsection.jsx'
import Topnews from './components_homepage/topnews.jsx'
import Mainsection from './components_homepage/mainsection.jsx'

export default () => {
    return (
        <main>
            <Container fluid>
                <Topsection />

                <Topnews />

                <Mainsection />

                <Row style={{marginTop:'10vh'}}>
                    <Col xs='12' style={{height:'20vh'}}>
                        
                    </Col>
                </Row>
            </Container>
        </main>
    )
}