import React from 'react'

export default (props) => {

    const { src, width, margin='2vh' } = props

    const thumbnail_box = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer'
    }

    const img_box = {
        width: '100%',
        height: '24vh',
        margin,
        padding: '2vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(225, 225, 225)'
    }
    
    return (
        <section style={{width}}>
            <div style={thumbnail_box}>
                <div style={img_box}>
                    <img 
                        src={src}
                        style={{width:'150%'}}
                        alt='' />
                </div>
            </div>
        </section>
    )
}