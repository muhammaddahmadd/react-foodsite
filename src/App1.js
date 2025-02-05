import React from "react";




const ahmad = {
    name: "Muhammad Ahmad",
    intro() {
         return `Hi, i am ${ this.name }, i been working as a frontend web developer for the last 3 years`} ,
    age: 26,
    techStack: "frontend developer",
    skills : ["html", "reactjs", "css", "javascript", "nextjs", "tailwind", "bootstrap"],
    colors: ["orange", "blue", "red"," pink","yellow"]
}

function App1() {

    const intro = ahmad.intro();
    console.log(intro)

    const skls= ahmad.skills;
    console.log(skls)
   

    return (
        <div className="card">
            <Avatar />
            <div className="data">
            <Intro intro={intro}/>
            <SkillList skills={skls} colors ={ahmad.colors}/>
            </div>
        </div>
    );
}



function Avatar(){
    return <span>
        <img src="" alt="ahmad"/>
    </span>

}


function Intro({intro}) {
    return <p>
        {intro}
    </p>

}


function SkillList({ skills, colors }) {
    skills.map((skill, index) => { console.log(colors[index % colors.length]) })
    
    return (
        <ul>
            {skills.map((skill, index) => (
                <Skill skill={skill} clr={colors[index % colors.length]} key={skill} />
            ))}
        </ul>
    );
}



function Skill({skill, clr}){
    return <li style={{backgroundColor: clr}}>{skill}</li>
}
export default App1;