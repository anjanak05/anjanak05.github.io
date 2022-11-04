import React from 'react'
import "../Components/Navbar.css"




const Navbar = () => {
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
            name:"Project"
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
    <div className='stickyNavbar'>
        <a className='logo' href="/"><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR11AmTQZImMGxu2ipobVMUJ3rdhkMa9L88sBdDOPQbsu_yPGDj" alt="logodvd"></img></a>

        
              <div className='containerNavbar'>
        {navLinks.map((e)=>{
            return (
                <a key={e.id} href={e.url} onClick={handleClick}>{e.name}</a>
            )
        })}
       
              <a
              
                href="/Anjana_Kushwaha_Resume.pdf"
                download="Anjana Kushwaha Resume"
              >
                 Resume
              </a>
           
        </div>
        
    </div>
  )
}

export default Navbar