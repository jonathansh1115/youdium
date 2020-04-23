import React from 'react'
import './styles/mainsection.css'

// icon
import Save from './pocket.svg'
import Dot from './dot.png'

// libraries
import {
    Row,
    Col
} from 'reactstrap'

// components
import Thumbnail from '../../components/thumbnail.jsx'

export default () => {

    const p = 'Lorem ipsum dolor sit, amet conse ctetur adipisi cing elit. At dolores expedita totam ea nihil incidunt fugit illum suscipit, cupiditate aliquam, tenetur pariatur accusamus eligendi vel inventore ab quam ipsa id?'

    const cut = (text, upperLim) => {
        if (text.length >= upperLim) {
            if (text[text.length-1] === '.') {
                return text.substring(0, upperLim-1)
            } else {
                return text.substring(0, upperLim-1) + ' ...'
            }
        } else {
            return text
        }
    }
    
    return (
        <Row>

            <Col xl='1' lg='1' className='d-none d-lg-block d-xl-block'>
                {/* spacing on xl screens */}
            </Col>

            {/* left */}
            <Col xl='7' lg='7' md='8' sm='12' xs='12'>
                <div style={{width:'100%', height:'26vh', marginBottom:'1vh'}}>

                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <Thumbnail src={'https://www.protexinvet.com/userfiles/image/cute-2500929_1920_(1).jpg'} width={'40%'} margin={'1.5vh'} />
                        <section style={{maxWidth:'60%', marginTop:'2vh'}}>
                            <h5>How the Energizer Bunny Saved My Company</h5>
                            <p style={{color:'rgba(0,0,0,0.425)'}}>{cut(p, 82)}</p>
                            
                            <div style={{display:'flex', justifyContent:'space-between', position:'relative', bottom:'-3vh'}}>
                                <span style={{color:'rgba(0,0,0,0.7)'}}>author_name&nbsp;|&nbsp;date_date_date</span>
                                <img className='pointer' src={Save} style={{position:'relative', right:'2vh'}} slt='' />
                            </div>
                        </section>
                    </div>
                    
                </div>
            </Col>

            {/* right */}
            <Col xl='3' lg='3' md='4' sm='12' xs='12'>
                <div style={{width:'100%', height:'18vh', display:'flex', marginBottom:'4vh'}}>
                    <h1 style={{width:'20%', color:'rgba(0,0,0,0.7)'}}>01</h1>
                    <div style={{width:'80%', marginLeft:'2vh'}}>
                        <h6>How the Black Death Radically Changed the Course of History</h6>
                        <p>{cut(p, 60)}</p>
                    </div>
                </div>

                <div style={{width:'100%', height:'18vh', display:'flex', marginBottom:'4vh'}}>
                    <h1 style={{width:'20%', color:'rgba(0,0,0,0.7)'}}>02</h1>
                    <div style={{width:'80%', marginLeft:'2vh'}}>
                        <h6>How the Black Death Radically Changed the Course of History</h6>
                        <p>{cut(p, 60)}</p>
                    </div>
                </div>

                <div style={{width:'100%', height:'18vh', display:'flex', marginBottom:'4vh'}}>
                    <h1 style={{width:'20%', color:'rgba(0,0,0,0.7)'}}>03</h1>
                    <div style={{width:'80%', marginLeft:'2vh'}}>
                        <h6>How the Black Death Radically Changed the Course of History</h6>
                        <p>{cut(p, 60)}</p>
                    </div>
                </div>
            </Col>

            <Col xl='1' lg='1' className='d-none d-lg-block d-xl-block'>
                {/* spacing on xl screens */}
            </Col>
            
        </Row>
    )
}