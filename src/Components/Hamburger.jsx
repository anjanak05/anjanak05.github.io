import React from "react";
import "../Components/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Hamburger() {
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  let navLinks =[
    {id:1,
        url:"#home",
        name:"Home"
    },
    {id:2,
        url:"#about",
        name:"About"
    },
    {id:3,
        url:"#skills",
        name:"Skills"
    },
    {id:4,
        url:"#project",
        name:"Projects"
    },
    {id:5,
        url:"#contact",
        name:"Contact"
    },
]


const handleClick=(e)=>{
  e.preventDefault()
const target = e.target.getAttribute('href')
const location = document.querySelector(target).offsetTop
console.log(location)

window.scrollTo({
left:0,
top:location - 80
})
}
  return (
    <div className="topnav">
      <a href="/" className="active">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR11AmTQZImMGxu2ipobVMUJ3rdhkMa9L88sBdDOPQbsu_yPGDj"
          alt="logodvd"
        ></img>
      </a>
      <div id="myLinks">
      {navLinks.map((e)=>{
            return (
                <a key={e.id} href={e.url} onClick={handleClick}>{e.name}</a>
            )
        })}
         <a
          href="/Anjana_Kushwaha_Resume.pdf"
          // download="Anjana Kushwaha Resume"
          target="_blank"
        >
          Resume
        </a>
      </div>
     
      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
        <GiHamburgerMenu></GiHamburgerMenu>
      </a>
    </div>
  );
}
