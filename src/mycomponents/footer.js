import React from 'react'

export const Footer =()=>{
    let footerStyle ={
        top: '100%',
        backgroundColor:'#333'
    }
    let paraStyle ={
        padding:'12px',
        color:'white'
    }
    return (
        <>
        <footer style={footerStyle}>
            <p style={paraStyle}>Copyright &copy; MyResume</p>
        </footer>
        </>
    )
}