import React from 'react'
import './styles/topsection.css'

// icons 
import More from './more-horizontal.svg'

// libraries
import {
    Row,
    Col
} from 'reactstrap'

// components
import Thumbnail from '../../components/thumbnail.jsx'
import Imgframe from '../../components/imgframe.jsx'


export default () => {

    return (
        <Row>
            <Col xl='1' className='d-none d-xl-block'>
                {/* spacing on xl screens */}
            </Col>

            {/* left */}
            <Col xl='3' lg='4' md='6' sm='12' xs='12'>
                <div style={{width:'100%', height:'55vh'}}>
                    
                    <Thumbnail src={'https://cdn.mos.cms.futurecdn.net/AVh8XjwENpNQyHsEmt4u4S.jpg'} width={'90%'} />

                    <section id='title_box'> 
                        {/* max 127 characters */}
                        <h5 className='pointer'>Embrace the Lawlessness of Quarantine Eating</h5>
                        <img 
                                src={More} 
                                className='pointer'
                                alt='' />
                    </section>

                    <section id='cretor_box'>
                        <div id='profile_pic'>
                            <img
                                src='https://pbs.twimg.com/profile_images/1216124424463630336/Dxvmy7xF_400x400.jpg'
                                style={{width:'6vh'}}
                                alt='' />
                        </div>

                        <div>
                            <h6 style={{margin:'2px 0 2px 0'}}>Lazarbeam</h6>
                            <p style={{margin:'0'}}>10M Follower</p>
                        </div>
                    </section>

                </div>
            </Col>

            {/* mid */}
            <Col xl='4' lg='4' md='6' sm='12' xs='12'>
                <div style={{width:'100%', height:'55vh'}}>
                    <div className='mid_box'>

                        <Imgframe src={'https://miro.medium.com/max/1400/1*AKlwMtEJV4zq2yEu7MfhCA.jpeg'} />
                        
                        <section className='headline pointer'>
                            <h6>This Is What the Earth’s Climate Will Look Like in 2050</h6>
                            <img 
                                src={More} 
                                className='pointer'
                                alt='' />
                        </section>

                    </div>

                    <div className='mid_box'>

                        <Imgframe src={'https://static.techspot.com/images2/news/bigimage/2019/11/2019-11-21-image-6.png'} />
                        
                        <section className='headline pointer'>
                            <h6>This Is What the Earth’s Climate Will Look Like in 2050</h6>
                            <img 
                                src={More} 
                                className='pointer'
                                alt='' />
                        </section>

                    </div>
                    
                    <div className='mid_box'>

                        <Imgframe src={'https://expertvagabond.com/wp-content/uploads/antarctica-ice-arch-900x600.jpg'} />

                        <section className='headline pointer'>
                            <h6>This Is What the Earth’s Climate Will Look Like in 2050</h6>
                            <img 
                                src={More} 
                                className='pointer'
                                alt='' />
                        </section>

                    </div>
                    
                </div>
            </Col>

            {/* right */}
            <Col xl='3' lg='4' md='6' sm='12' xs='12' className='d-none d-xl-block d-lg-block'>
                <div style={{width:'100%', height:'55vh'}}>
                    
                    <Thumbnail src={'https://scdn.slashgear.com/wp-content/uploads/2020/01/ikonik_skin_fortnite-1280x720.jpg'} width={'90%'} />

                    <section id='title_box'> 
                        {/* max 127 characters */}
                        <h5 className='pointer'>Epic is taking an exclusive Fortnite skin away from some players</h5>
                        <img 
                            src={More} 
                            className='pointer'
                            alt='' />
                    </section>

                    <section id='cretor_box'>
                        <div id='profile_pic'>
                            <img
                                src='https://fortsettings.com/wp-content/uploads/2019/08/muselk.png'
                                style={{width:'6vh'}}
                                alt='' />
                        </div>

                        <div>
                            <h6 style={{margin:'2px 0 2px 0'}}>Muselk</h6>
                            <p style={{margin:'0'}}>10M Follower</p>
                        </div>
                    </section>

                </div>
            </Col>

            <Col xl='1' className='d-none d-xl-block'>
                {/* spacing on xl screens */}
            </Col>
        </Row>
)
}