import React, { useRef, useEffect, useState } from 'react'
import './styles/topnews.css'

// libraries
import {
    Container,
    Row,
    Col
} from 'reactstrap'

// components
import Imgframe from '../../components/imgframe.jsx'


export default () => {

    return (
        <Row style={{marginTop:'10vh', marginBottom:'10vh', backgroundColor:'grey', paddingTop:'3vh', paddingBottom:'3vh'}}>
            <Container fluid>

                <Row>
                    <Col xl='1' lg='1' className='d-none d-lg-block d-xl-block'>
                        {/* spacing  */}
                    </Col>

                    <Col xl='10' lg='10' md='12' sm='12' xs='12' style={{marginBottom:'2vh'}}>
                        <h3>Coronavirus disease 2019 (COVID-19)</h3>
                    </Col>

                    <Col xl='1' lg='1' className='d-none d-lg-block d-xl-block'>
                        {/* spacing  */}
                    </Col>
                </Row>

                <Row>
                    <Col xl='1' lg='1' className='d-none d-lg-block d-xl-block'>
                        {/* spacing  */}
                    </Col>

                    <Col xl='4' lg='4' md='4' sm='12' xs='12'>
                        <div className='img_frame'>
                            <img 
                                src='https://cdn.mos.cms.futurecdn.net/JtVH5Khvihib7dBDFY9ZDR.jpg'
                                style={{
                                    width:'120%'
                                }}
                                alt='' />
                        </div>

                        {/* <Imgframe src={'https://cdn.mos.cms.futurecdn.net/JtVH5Khvihib7dBDFY9ZDR.jpg'} /> */}
                        
                    </Col>

                    <Col xl='6' lg='6' md='6' sm='12' xs='12'>

                        <div className="text_frame">
                            <p>
                                Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The disease was first identified in December 2019 in Wuhan, the capital of China's Hubei province, and has since spread globally, resulting in the ongoing 2019–20 coronavirus pandemic. Common symptoms include fever, cough, and shortness of breath. Other symptoms may include fatigue, muscle pain, diarrhea, sore throat, loss of smell, and abdominal pain. The time from exposure to onset of symptoms is typically around five days but may range from two to fourteen days. While the majority of cases result in mild symptoms, some progress to viral pneumonia and multi-organ failure. As of 15 April 2020, more than 1.98 million cases have been reported across 210 countries and territories, resulting in over 126,000 deaths. 
                            </p>
                        </div>
                        
                    </Col>
                    
                    <Col xl='1' lg='1' className='d-none d-lg-block d-xl-block'>
                        {/* spacing  */}
                    </Col>
                    
                </Row>

                {/* <Row>
                    <Col xl='1' lg='1' className='d-none d-lg-block d-xl-block'>

                    </Col>

                    <Col xl='2' lg='2' md='3' sm='6' xs='6'>
                        <div className='graph'>
                            <img src='https://www.mathsisfun.com/data/images/line-graph-example.svg' className='graphsss' alt='' /> 
                        </div>
                    </Col>

                    <Col xl='2' lg='2' md='3' sm='6' xs='6'>
                        <div className='graph'>
                            <img src='https://www.mathsisfun.com/data/images/line-graph-example.svg' className='graphsss' alt='' /> 
                        </div>
                    </Col>

                    <Col xl='2' lg='2' md='3' sm='6' xs='6'>
                        <div className='graph'>
                            <img src='https://www.mathsisfun.com/data/images/line-graph-example.svg' className='graphsss' alt='' /> 
                        </div>
                    </Col>

                    <Col xl='2' lg='2' md='3' sm='6' xs='6'>
                        <div className='graph'>
                            <img src='https://www.mathsisfun.com/data/images/line-graph-example.svg' className='graphsss' alt='' /> 
                        </div>
                    </Col>

                    <Col xl='2' lg='2' md='3' sm='6' xs='6'>
                        <div className='graph'>
                            <img src='https://www.mathsisfun.com/data/images/line-graph-example.svg' className='graphsss' alt='' /> 
                        </div>
                    </Col>

                    
                    <Col xl='1' lg='1' className='d-none d-lg-block d-xl-block'>

                    </Col>
                </Row> */}
            </Container>
        </Row>
    )
}