import React from 'react'

export const Achievements = (props) => {
    let achieveStyle = {
        backgroundColor: '#04AA6D',
        padding: '2px 2vw',
        fontFamily: 'caveat,cursive'
    }
    const sites = [
        {
            id: 1,
            name: "Leetcode",
            desc: "Solved 50+ questions on Leetcode",
            link: 'https://leetcode.com/wajidali786/'
        },
        {
            id: 2,
            name: "Codechef",
            desc: "2 star coder at codechef",
            link: 'https://www.codechef.com/users/wajid92'
        },
        {
            id: 3,
            name: "Hackerrank",
            desc: "5 star in C++ , 3 star in problem solving",
            link: "https://www.hackerrank.com/wajidmohdali786"
        },
        {
            id: 4,
            name: "Google Cloud",
            desc: 'successfully completed 30 days of google cloud program',
            link: "https://www.cloudskillsboost.google/public_profiles/205802bb-d7c8-45b2-9c87-20d35bd78ec1"
        }
    ]
    let containerStyle = {
        display: 'flex'
    }
    let outerBox = {
        marginLeft: '3vw',
        border: '2px solid black',
        padding: '2px 1vw',
        marginTop: '10px',
        marginRight: '10vw',
        borderRadius: '5px',
        marginBottom: '10px',
        backgroundColor:'#cce3a8'
    }
    let siteStyle = {
        color: '#04AA6D',
        textDecoration: 'none',
        margin: 'auto 4px auto 0px',
    }

    function createSites(site) {
        return (
            <>
                <div style={outerBox}>
                    <div style={containerStyle}>
                        <a href={site.link} target="_blank" style={siteStyle}><b>{site.name}:</b></a>
                        <p>{site.desc}</p>
                    </div>
                </div>
            </>
        )
    }
    function createAcades(site) {
        return (
            <>
                <div style={outerBox}>
                    <div style={containerStyle}>
                        <p href={site.link} target="_blank" style={siteStyle}><b>{site.name}:</b></p>
                        <p>{site.desc}</p>
                    </div>
                </div>
            </>
        )
    }
    const projects = [
        {
            id: 1,
            name: 'My Portfolio',
            desc: 'Created a portfolio website (this one) using HTML, CSS, JavaScript and ReactJs',
            link: "#"
        },
        {
            id: 2,
            name: 'Todo app',
            desc: 'Created a Todo App using HTML, CSS, JavaScript and ReactJs',
            link: "#"
        },
        {
            id: 3,
            name: 'Clock',
            desc: 'Created using HTML, CSS and JavaScript',
            link: "#"
        },
        {
            id: 4,
            name: 'Ecommerce website',
            desc: 'Ecommerce website design using HTML and CSS',
            link: "#"
        }
    ]
    const academics = [
        {
            id: 1,
            name: 'B.Tech(ECE)',
            desc: 'Pursuing from Jamia Millia Islamia, New Delhi'
        },
        {
            id: 2,
            name: '12th',
            desc: 'Benhur High School and College, Allahabad'
        },
        {
            id: 3,
            name: '10th',
            desc: 'Benhur High School and College, Allahabad'
        }
    ]
    if (props.title == 'MY ACHIEVEMENTS') {
        return (
            <>
                <h1 style={achieveStyle}>{props.title}</h1>
                {sites.map(createSites)}
            </>
        )
    }
    else if (props.title == 'MY PROJECTS') {
        return (
            <>
                <h1 style={achieveStyle}>{props.title}</h1>
                {projects.map(createSites)}
            </>
        )
    }
    else if (props.title == 'MY ACADEMICS') {
        return (
            <>
                <h1 style={achieveStyle}>{props.title}</h1>
                {academics.map(createAcades)}
            </>
        )
    }
}