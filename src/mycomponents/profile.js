import React from 'react'

export const Profile = () =>{
    let profileStyle = {
        borderRadius:'50%',
        width:'25vw',
        height:'25vw',
        marginTop:'10px',
        marginBottom:'10px',
        display:'block',
        marginLeft:'auto',
        marginRight:'auto',
        border:'5px solid #04AA6D'
    }
    let socialStyle={
        padding:'5px 0px',
        fontSize:'3vw',
        float:'right',
        marginTop:'-26vw',
        marginLeft:'55%',
        backgroundColor:'#04AA6D',
        marginRight:'2vw',
        borderRadius:'4px'
    }
    let socialStylea={
        marginLeft:'2vw',
        textDecoration:'none',
        color:'white'
    }
    let socialStyleaG={
        marginLeft:'2vw',
        textDecoration:'none',
        color:'white',
        marginRight:'2vw'
    }
    return (
        <>
        <img src="wajid2.jpg"
            style={profileStyle}/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div style={socialStyle}>
        <a href='https://www.facebook.com/profile.php?id=100037298980442'target='_blank' class='fa fa-facebook' style={socialStylea}></a>
        <a href='https://www.instagram.com/mohammad_wajid_ali/' target='_blank' class='fa fa-instagram' style={socialStylea}></a>
        <a href='https://www.linkedin.com/in/mohammad-wajid-ali-95b8001b7/' target='_blank' class='fa fa-linkedin' style={socialStylea}></a>
        <a href='https://github.com/wajid92' class='fa fa-github' target='_blank' style={socialStyleaG}></a>
        </div>
        </>
    )
}