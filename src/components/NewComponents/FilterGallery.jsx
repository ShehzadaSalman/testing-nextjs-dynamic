import React, { useState, useEffect } from "react";
const ImagePath = process.env.ImagePath

function FilterGallery({images, tags}) {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  // filtered images 
  const portfolio = images.map(li => ({
      name: ImagePath + li.image,
      category: ["all", li.title]
  }))

  // filters names
  const portfolioFilter = images.map(li => li.title.toLowerCase())
  let set = new Set(portfolioFilter);
  let setArray = [...set]
  let finalFilterArray = setArray.filter(li  => li !== 'all')
  console.info(finalFilterArray)

  const SelectFilter = (event) => {
 // removing all the active class from the filters elements
 let checking = event.target.parentNode.querySelectorAll('.filter-name');
for (let i = 0; i < checking.length; i++) {
 checking[i].classList.remove("active");
}
// adding the active class to the selected link
let selectedFilter = event.currentTarget;
let filtername = selectedFilter.innerHTML;
setFilter(filtername.toLowerCase());  
event.target.classList.add("active");


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
        <a className = "filter-name active"  active={filter == "all"} 
        onClick={SelectFilter}>
          ALL
        </a>

 
{/* 
        <a className = "filter-name"
          active={filter === "branding"}
          onClick={SelectFilter}
        >
          Branding
        </a> */}
        {finalFilterArray && finalFilterArray.map(filter => {
          return (
            <a className = "filter-name" style ={{ textTransform: "uppercase" }}
            active={filter == {filter}}
            onClick={SelectFilter}>
            {filter}
           </a>
          )
        })}
  
    
   
   
      </div>
      <div className="portfolio__container">
          <div className = "row">
        {projects.map(item =>
          item.filtered == true ? 
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
