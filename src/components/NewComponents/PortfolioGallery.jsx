import React, { useState, useEffect } from "react";
import Image from 'next/image';

const portfolio = [
  {
    name: "images/portfolio-page/img1-svg.svg",
    category: ["all", "design"],
    title: "Diana Ahadpour",
    description: "Created a structured and striking E-commerce store with an easy shopping cart system. We focused on showcasing their dresses in the highest-quality graphics in a stunning manner."
  },
  {
    name: "images/portfolio-page/activstudy.svg",
    category: ["all", "design"],
    title: "Activestudy",
    description: "Developed a smooth running website, so they can easily conduct multiple online classes and have a glitch-free, fully functioning and attractive online portal for their users. "
  },
  {
    name: "images/portfolio-page/img3.svg",
    category: ["all", "design"],
    title: "RentMyRide",
    description: "Provided a unique online presence with an easily managed website. Applied latest digital marketing tools to rank their rental cars and managed their social media handles for maximum leads."
  },
  {
    name: "images/portfolio-page/halidai.svg",
    category: ["all", "mobile app"],
    title: "Halidai",
    description: "We created a modernized, integrated and feature-rich app which fascinated their clients to book the best options of luxury hotels and luxury apps."
  },
  {
    name: "images/portfolio-page/img4-svg.svg",
    category: ["all","branding"],
    title: "FixMyRide (Branding)",
    description: "Created their logo and built their website presence from scratch. Created digital marketing and branding campaigns for their services. "
  },
  {
    name: "images/portfolio-page/ahmad-ali.svg",
    category: ["all", "design"],
    title: "Ahmed Ali",
    description: "Gave them a professional and trusted website, where people can easily book competent lawyers and get all the information with their situation. "
  },
  {
    name: "images/portfolio-page/service-myride.svg",
    category: ["all", "design"],
    title: "ServiceMyRide",
    description: "Designed a systematic and tidy look for their website. Promoted their idea of pick and drop car maintenance services on digital and social handles, guaranteeing promising returns."
  },
  {
    name: "images/portfolio-page/fixahome.svg",
    category: ["all", "logo"],
    title: "Fixahome",
    description: "We set them up with a clean layout, so people can easily contact them when stuck on the road. Created digital and social campaigns for maximum awareness.  "
  },
  {
    name: "images/portfolio-page/legalworks.svg",
    category: ["all", "design"],
    title: "Legal Works",
    description: "Designed a layout that showed their true purpose of providing convenient legal advice on various matters. Built their website using latest trends and tactics. "
  },
  {
    name: "images/portfolio-page/rentmyride-cups.svg",
    category: ["all", "branding"],
    title: "RentMyRide (Branding)",
    description: "We streamlined a strategy that would best describe and boost their potential in the market. Created a stunning logo and designed their merchandise and promotional mugs. "
  },
  {
    name: "images/portfolio-page/faqi.svg",
    category: ["all", "design", "mobile"],
    title: "Fakeeh",
    description: "Fakeeh wanted a lively yet caring look for their website. We developed a detailed and easily navigable website for them that showed all their courses strategically. "
  },
  {
    name: "images/portfolio-page/legalworks-branding.svg",
    category: ["all", "branding"],
    title: "Legal Works (Branding)",
    description: "Set down strong foundations for Legal Works by creating a self stating Logo, stylized it in a way that it stood out in the industry. "
  },
  {
    name: "images/portfolio-page/AAF.svg",
    category: ["all", "logo"],
    title: "American Alzheimer's Foundation (Logo, Layout)",
    description: "We helped them bring their dedication to the virtual world in an inspirational and firm way. Set them up with an interactive logo and aspirational website. "
  },
  {
    name: "images/portfolio-page/ready-set-go.svg",
    category: ["all", "design"],
    title: "Ready Set Go",
    description: "Designed a playful layout, so they could have a safe and trusted online space, where parents can book a place for the birthday parties and other events for their kids."
  },
  {
    name: "images/portfolio-page/fixmyride.svg",
    category: ["all", "design"],
    title: "FixMyRide",
    description: "We set them up with a clean layout, so people can easily contact them when stuck on the road. Created digital and social campaigns for maximum awareness."
  },
  {
    name: "images/portfolio-page/tripzy.svg",
    category: ["all", "design"],
    title: "Tripzy",
    description: "Developed a website that sumptuously showed their services and created a layout, where people can know all about their services and book them with ease."
  },
  {
    name: "images/portfolio-page/baytik.svg",
    category: ["all", "design"],
    title: "Baytik",
    description: "Set them with a robust online portal/social media platform where the vendors can put up their services and consumers can book and share their luxury trip activities."
  },
  {
    name: "images/portfolio-page/Luxury-Trip.svg",
    category: ["all", "logo"],
    title: "Luxury Trip",
    description: "We designed a stylized logo for them that showed their purpose and enthusiasm to provide exciting luxury trips to their clients."
  },
  {
    name: "images/portfolio-page/guides.svg",
    category: ["all", "branding"],
    title: "Guides",
    description: "We wrote and designed multiple guides that will help our clients to understand and practice digital marketing and development tools in a prolific manner."
  },
  {
    name: "images/portfolio-page/crypto.svg",
    category: ["all", "design"],
    title: "Crypto International",
    description: "We created a bitcoin themed layout and developed the website that shouted profits for their clients. We also handled their social media platforms and brought them potential leads."
  },
  {
    name: "images/portfolio-page/opal.svg",
    category: ["all", "design"],
    title: "Opal",
    description: "Developed a professional and tidy look for them that showed their clients true insights and potential of property investment. We strategized effective PPC marketing strategies and brought them potential leads. "
  },
  {
    name: "images/portfolio-page/creative.svg",
    category: ["all", "design"],
    title: "S3",
    description: "Designed a technology-oriented, refreshing and responsive website for them which stated their services and purpose clearly."
  },

];

function PortfolioGallery() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);



  // hover to show the caption using onHover
  const showCaption = (event) => {
    event.persist();
    console.log(event.currentTarget);

    let checking = event.target.querySelector(".caption");
    console.log(checking);
    console.log(event.target);
    console.log("display the caption card");
  }
  const removeCaption = () => {
    console.log("remove the caption card");
  }
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
        <a className="filter-name active" active={filter === "all"}
          onClick={SelectFilter}
        >
          All
        </a>
        <a className="filter-name"
          active={filter === "branding"}
          onClick={SelectFilter}>
          Branding
        </a>
        <a className="filter-name"
          active={filter === "design"}
          onClick={SelectFilter}>
          Design
        </a>
        <a className="filter-name"
          active={filter === "mobile app"}
          onClick={SelectFilter} >
            Mobile App
        </a>
        <a className="filter-name"
          active={filter === "logo"}
          onClick={SelectFilter}>
          Logo
        </a>

      </div>
      <div className="portfolio__container">
        <div className="row">
          {projects.map(item =>
            item.filtered === true ?
              <div key={item.name} className="col-md-6 portfolio-item" >
                <img src={item.name} className="img-fluid" alt="portfolio" />
                
     {/* <Image
        src={"/"+item.name}
        alt="Picture of the author"
        width={730}
        height={463}
      />       */}
                
                <div className="caption-parent" style={{ height: "100%", width: "100%", position: "absolute", top: "0" }} >
                  <div className="caption">
                    <h3 className="title">{item.title}</h3>
                    <p className="description">{item.description}</p>
                  </div>
                </div>
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
          .portfolio-item{
            position: relative;            
          }
          .portfolio-item .caption-parent{ opacity: 0;}
          .portfolio-item .caption-parent:hover{ opacity: 1;}
          .portfolio-item .caption{ margin: 14px;  padding: 15px;  width: 60%;  position: absolute; bottom: 10px;  background-color: rgba(33, 33, 33, 0.8); } 
          .portfolio-item .caption:hover{ opacity: 1;}    
          .portfolio-item h3.title{ margin:0; padding:0; text-align: left;  color: white; font-size: 21px;}
          .portfolio-item p.description{margin:0; padding:0; text-align: left; color: #f5f5f5; font-size: 14px; margin-top: 15px;}
         
              
              
         `}
      </style>
    </>
  );
}

export default PortfolioGallery;
