import React, { useState, useEffect } from "react";
const ImagePath = process.env.ImagePath

function FilterGallery({images, tags}) {
  console.info(images);
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  
  const portfolio = images.map(li => ({
      name: ImagePath + li.image,
      category: ["all", "branding"]
  }))

  const SelectFilter = (event) => {
 // removing all the active class from the filters elements
 let checking = event.target.parentNode.querySelectorAll('.filter-name');
 console.log(checking);
// let checking = document.querySelectorAll('.portfolio-content .container .portfolio__labels .filter-name');  
// if(!checking){ console.log("can't pick up the form-filter")}
for (let i = 0; i < checking.length; i++) {
 checking[i].classList.remove("active");
}
// adding the active class to the selected link
let selectedFilter = event.currentTarget;
let filtername = selectedFilter.innerHTML;
console.log(filtername.toLowerCase());
setFilter(filtername.toLowerCase());  
event.target.classList.add("active");
console.log(event.target);
console.log("this event is running");
  

 }


  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>

      <div className="portfolio__labels text-center">
        <a className = "filter-name active"  active={filter === "all"} 
        onClick={SelectFilter}
        >
          All
        </a>
        <a className = "filter-name"
          active={filter === "branding"}
          onClick={SelectFilter}
        >
          Branding
        </a>
        <a className = "filter-name"
          active={filter === "logo"}
          onClick={SelectFilter}
        >
          Logo
        </a>
        <a className = "filter-name"
          
          active={filter === "ux-ui"}
          onClick={SelectFilter}
        >
          UI/UX
        </a>
        <a className = "filter-name" 
          active={filter === "frontend"}
          onClick={SelectFilter}
        >
          Web Design
        </a>
   
      </div>
      <div className="portfolio__container">
          <div className = "row">
        {projects.map(item =>
          item.filtered === true ? 
           <div className = "col-md-4 portfolio-item">
              <img src = {item.name} className = "img-fluid" alt = "portfolio" /> 
          </div>
          : ""
        )}
        </div>
      </div>
      <style>
          {`
          .filter-name{
              padding: 10px 20px;
              font-weight: 500;
              display: inline-block;
              font-size: 1.1rem;
          }
          .portfolio__container{
              margin-top: 40px;
          }
          .portfolio-item{
              padding: 10px;
              text-align:center;
          }
          .filter-name{ cursor: pointer;}
          a.filter-name.active {
            border: none;
            border-bottom: solid 2px #4A91BD;
        }
              
              
              
         `}
      </style>
    </>
  );
}

export default FilterGallery;
