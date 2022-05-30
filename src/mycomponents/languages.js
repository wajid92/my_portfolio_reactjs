import React from 'react'

export const Language = () => {
    let langStyle = {
        backgroundColor: '#04AA6D',
        
        padding: '2px 2vw',
        fontFamily: 'caveat,cursive'
    }
    let h2Style={
        marginLeft:'2vw',
        backgroundColor:'#b3f542',
        padding:'1.5px 2vw',
        display:'inline',
        borderRadius:'20px'
    }
    let htmlStyle={
        marginLeft:'3vw',
        border:'2px solid black',
        padding:'2px 1vw',
        marginTop:'10px',
        marginRight:'10vw',
        borderRadius:'5px',
        marginBottom:'10px',
        backgroundColor:'#cce3a8'
    }
    let starStyle={
        marginTop:'18px',
        marginRight:'1vw',
    }
    let starStyle2={
        marginTop:'18px',
        marginRight:'1vw',
        color:'yellow'
    }
    let html2Style={
        marginRight:'auto',
        color:'#04AA6D',
    }
    let separate={
        display:'flex',
    }
    
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet"/>
                <h1 style={langStyle}>MY LANGUAGES</h1>
                <h2 className="commhead"style={h2Style}>Technical Languages</h2>
                <div style={htmlStyle}>
                    <div style={separate}>
                    <p style={html2Style}><b>HTML</b></p>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    </div><hr></hr>
                    <div style={separate}>
                    <p style={html2Style}><b>CSS</b></p>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    </div><hr></hr>
                    <div style={separate}>
                    <p style={html2Style}><b>JavaScript</b></p>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    </div><hr></hr>
                    <div style={separate}>
                    <p style={html2Style}><b>ReactJs</b></p>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    </div><hr></hr>
                    <div style={separate}>
                    <p style={html2Style}><b>C++</b></p>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    </div><hr></hr>
                    <div style={separate}>
                    <p style={html2Style}><b>C</b></p>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    </div><hr></hr>
                </div>

                <h2 className="commhead"style={h2Style}>Communication Languages</h2>
                <div style={htmlStyle}>
                    <div style={separate}>
                    <p style={html2Style}><b>English</b></p>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    </div><hr></hr>
                    <div style={separate}>
                    <p style={html2Style}><b>Hindi</b></p>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    </div><hr></hr>
                    <div style={separate}>
                    <p style={html2Style}><b>Urdu</b></p>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    </div><hr></hr>
                    <div style={separate}>
                    <p style={html2Style}><b>Arabic</b></p>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    </div><hr></hr>
                    <div style={separate}>
                    <p style={html2Style}><b>German</b></p>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    </div><hr></hr>
                    <div style={separate}>
                    <p style={html2Style}><b>Turkish</b></p>
                    <i class="fa-solid fa-star" style={starStyle2}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    <i class="fa-regular fa-star" style={starStyle}></i>
                    </div><hr></hr>
                </div>
            </>
            )
}