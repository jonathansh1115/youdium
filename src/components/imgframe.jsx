import React from 'react'

export default (props) => {

    const { src } = props

    const display_box = {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '40%',
        cursor: 'pointer'
    }

    const img_frame = {
        width: '100%',
        height: '80%',
        margin: '0 0 0 0',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyontent: 'center',
    }
    
    return (
        <section style={display_box}>
            <div style={img_frame}>
                <img 
                    src={src}
                    style={{
                        width:'150%'
                    }}
                    alt='' />
            </div>
        </section>
    )
}