import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getDeviceName } from '../lib/helper';
import axios from 'axios';
import { useRouter } from 'next/router'
import { UserConsumer } from '../ContextApi/usercontext';
const ImagePath  = "https://staging.techbay.co/storage/app/";
let deviceName = getDeviceName();
let initialData = 
  [{"id":10,"title":"HOME","title_arabic":"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629","slug":"\/","services":[]},{"id":11,"title":"BRANDING","title_arabic":"\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629","slug":"\/branding","services":[{"id":23,"menu_id":11,"title":"DESIGN SERVICES","title_arabic":"DESIGN SERVICES","slug":"\/design-services","type":1},{"id":24,"menu_id":11,"title":"BRANDING SERVICES","title_arabic":"BRANDING SERVICES","slug":"\/branding-services","type":1},{"id":25,"menu_id":11,"title":"MEDIA AGENCY","title_arabic":"MEDIA AGENCY","slug":"\/media-agency","type":1},{"id":26,"menu_id":11,"title":"PUBLIC RELATION","title_arabic":"PUBLIC RELATION","slug":"\/public-relation","type":1},{"id":27,"menu_id":11,"title":"MOTION DESIGNING","title_arabic":"MOTION DESIGNING","slug":"\/motion-designing","type":1},{"id":28,"menu_id":11,"title":"VIDEO PRODUCTION","title_arabic":"VIDEO PRODUCTION","slug":"\/video-production","type":1},{"id":29,"menu_id":11,"title":"ADVERTISING AGENCY","title_arabic":"ADVERTISING AGENCY","slug":"\/advertising-agency","type":1},{"id":50,"menu_id":11,"title":"BRANDING AND PC NEW MENU","title_arabic":"BRANDING AND PC NEW MENU","slug":"\/branding-and-pc-new-menu","type":1}]},{"id":12,"title":"DEVELOPMENT","title_arabic":"\u062a\u0637\u0648\u064a\u0631","slug":"\/development","services":[{"id":30,"menu_id":12,"title":"WEBSITE DESIGNING","title_arabic":"WEBSITE DESIGNING","slug":"\/website-designing-old","type":1},{"id":31,"menu_id":12,"title":"UI\/UX DESIGNING","title_arabic":"UI\/UX DESIGNING","slug":"\/ui\/ux-designing","type":1},{"id":32,"menu_id":12,"title":"WEB DEVELOPMENT","title_arabic":"WEB DEVELOPMENT","slug":"\/web-development","type":1},{"id":33,"menu_id":12,"title":"MOBILE APP DEVELOPMENT","title_arabic":"MOBILE APP DEVELOPMENT","slug":"\/mobile-app-development","type":1},{"id":34,"menu_id":12,"title":"CONTENT MANAGEMENT SYSTEM","title_arabic":"CONTENT MANAGEMENT SYSTEM","slug":"\/content-management-system","type":1},{"id":35,"menu_id":12,"title":"ENTERPRISE RESOURCE PLANNING","title_arabic":"ENTERPRISE RESOURCE PLANNING","slug":"\/enterprise-resource-planning","type":1},{"id":36,"menu_id":12,"title":"E-COMMERCE","title_arabic":"E-COMMERCE","slug":"\/e-commerce","type":1},{"id":37,"menu_id":12,"title":"CUSTOMER RELATIONSHIP MANAGEMENT","title_arabic":"CUSTOMER RELATIONSHIP MANAGEMENT","slug":"\/customer-relationship-management","type":1},{"id":49,"menu_id":12,"title":"APP DESIGNING","title_arabic":"APP DESIGNING","slug":"\/app-designing","type":1}]},{"id":13,"title":"MARKETING","title_arabic":"\u062a\u0633\u0648\u064a\u0642","slug":"\/marketing","services":[{"id":38,"menu_id":13,"title":"SEARCH ENGINE OPTIMIZATION","title_arabic":"SEARCH ENGINE OPTIMIZATION","slug":"\/search-engine-optimization","type":1},{"id":39,"menu_id":13,"title":"PAY-PER-CLICK ADVERTISEMENT","title_arabic":"PAY-PER-CLICK ADVERTISEMENT","slug":"\/pay-per-click-advertisement","type":1},{"id":40,"menu_id":13,"title":"CONVERSION RATE OPTIMIZATION","title_arabic":"CONVERSION RATE OPTIMIZATION","slug":"\/conversion-rate-optimization","type":1},{"id":41,"menu_id":13,"title":"CONTENT MARKETING","title_arabic":"CONTENT MARKETING","slug":"\/content-marketing","type":1},{"id":42,"menu_id":13,"title":"SOCIAL MEDIA MARKETING","title_arabic":"SOCIAL MEDIA MARKETING","slug":"\/social-media-marketing","type":1},{"id":43,"menu_id":13,"title":"RETARGETING & REMARKETING","title_arabic":"RETARGETING & REMARKETING","slug":"\/retargeting-&-remarketing","type":1},{"id":44,"menu_id":13,"title":"COPY WRITING","title_arabic":"COPY WRITING","slug":"\/copy-writing","type":1}]},{"id":14,"title":"PACKAGES","title_arabic":"\u0627\u0644\u062d\u0632\u0645","slug":"\/packages","services":[{"id":45,"menu_id":14,"title":"SEO PACKAGES","title_arabic":"SEO PACKAGES","slug":"\/seo-packages","type":2},{"id":46,"menu_id":14,"title":"PPC Packages","title_arabic":"PPC Packages","slug":"\/ppc-packages","type":2},{"id":47,"menu_id":14,"title":"SMM Packages","title_arabic":"SMM Packages","slug":"\/smm-packages","type":2},{"id":48,"menu_id":14,"title":"STARTUP Packages","title_arabic":"STARTUP Packages","slug":"\/startup-packages","type":2}]},{"id":15,"title":"CONTACT US","title_arabic":"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627","slug":"\/contact-us","services":[]}]
  
const Header = () => {
  const [addClass , setAddClass] = useState(false);
  const [isMenu , setIsMenu] = useState(true);
  const [menudata, setMenuData] = useState(initialData);
  const [bottomPages, setBottomPages] = useState([]);
  const [companyInfo, setCompanyInfo] = useState({});
  const router = useRouter();
  const {locale} = router;

  const changeLanguage = (e) => {
  if(locale === 'ar'){
    try{
      router.push(router.asPath, router.asPath, {locale: 'en-US'});
      console.info("pathname is ", router.asPath);
    }
    catch(e){
      console.info('ERROR is'+e);
    }

  } else{
    router.push(router.asPath, router.asPath, {locale: 'ar'});
    console.info("pathname is ", router.asPath);
  }
  }
 const toggleHeaderMenuClassHandler = () => {
   console.log("I'm being clicked")
   
   if(addClass){
    setAddClass(false);
    }else{
    setAddClass(true);
    }
     if(isMenu){
      setIsMenu(false);
     }else{
      setIsMenu(true);
     }
  };

  const openNewMenu = (event) => {
    event.currentTarget.querySelector('h1').style.color = '#1C5B82';
    event.currentTarget.querySelector('span').style.color = '#1C5B82';
    event.currentTarget.querySelector('.new-menu-sub').style.display = 'block';
    let menuName = event.currentTarget.querySelector('h1').innerHTML;

  }
  const closeNewMenu = (event) => {
    event.currentTarget.querySelector('h1').style.color = '#212121';
    event.currentTarget.querySelector('span').style.color = '#212121';
    event.currentTarget.querySelector('.new-menu-sub').style.display = 'none';
  }
  const refreshPage = () => {
    console.log("well we clicked the refresh page");
    if (window.location.pathname == '/') {
      window.location.reload();
    } else {
      window.location.href = "/";
    }
  }
  const samePageRefresh = (event) => {
    console.log("Header Four: we clicked on samePAgeRefresh");
    let urlName = event.currentTarget.querySelector("a").getAttribute("href"); // get url of the clicked menu
    console.log(urlName);
    let currentURL = window.location.pathname;
    if (urlName == currentURL) {
      window.location.reload();
    }
  }




   const fetchData = async () => {


    const result = await  axios.get('https://staging.techbay.co/api/get-navbar-menu');
    const finalData = await  result.data.response;
    setMenuData(finalData);

   const bpage = await  axios.get('https://staging.techbay.co/api/get-footer-menu');
   const finalBottomPages  = await  bpage.data.response;
   setBottomPages(finalBottomPages)
   

  const cinfo = await  axios.get('https://staging.techbay.co/api/get-header-footer-content');
   const finalCompanyInfo = await  cinfo.data.response;
   setCompanyInfo(finalCompanyInfo);
 }




  useEffect(() => {
  setTimeout(() =>{
    fetchData();
  }, 3000)
 
    },[!menudata,!bottomPages, !companyInfo])
 
   // fetching the bottom pages





  return (<>
<header className="mg-main-header" id="myHeader">
<div className="container-fluid p-0">
  <div className={`row ${addClass ? 'drop-menu-top-bar' : ''}`}>
    <div className="col-3 logos-container">
      <a onClick={refreshPage}>
        {companyInfo?.logo && 
        <img 
        src={ImagePath + companyInfo?.logo} className="img-fluid" alt="Tech Bay Solution" />}
      </a>

    </div>
    <div className="col-6 d-flex contctDetails xs-hidden">
      <div className="mg-language-selector">
        <ul className="pl-0">
   
              
            
          {(companyInfo) && 
          <>
           {/* display the phone number if it exist  */}
          {companyInfo.phone && 
          <li>
          <a href="tel:+97144257880">
            <i className='fa fa-phone'>
            {companyInfo.phone}
          </i>       
          </a>
        </li>
          }
     
          {companyInfo.email &&  <>
            <li>
            <a href="mailto:info@techbay.co">
              <i className='far fa-envelope '></i> {companyInfo.email}
            </a>
          </li>
          </> }




        </>
          }
   
        </ul>
      </div>
    </div>
    <div className="col-3 justyfiedMenu">
      <div className="mg-header-content-wrapper d-flex align-items-center justify-content-md-end justify-content-end">
        <div style={{ borderColor: "#212121" }}
          className="mg-header-icon hamburger-icon"
          onClick={toggleHeaderMenuClassHandler}
        >
          <img src="/images/mg-menu-icon.svg" alt="icon" />
        </div>
        <span className="mg-menu-hr"></span>
        <div className="mg-menu-wrapper">
          <button
            style={{ color: "#212121" }}
            type="button"
            onClick={toggleHeaderMenuClassHandler}
            className="btn mg-link-btn prox-font hamburger"
          >
            {
            isMenu 
            ? <>{locale == 'ar' ? <>قائمة طعام</>  : <>Menu</> }</> 
            : <>{locale == 'ar' ? <>قائمة طعام</>  : <>Close</> }</>             
            }
          </button>
         
          <button className="btn mg-link-btn" onClick={changeLanguage}>
            {locale === 'ar'
             ? <img src="/images/new-svg-images/language-icon.svg"  alt = "change-lang"/>
             : <img src="/images/new-svg-images/arabic-flag.svg"  alt = "change-lang"/>
             }
            </button>
          <div className={`drop-menu-listing ${addClass ? 'show' : ''}`}>
            <div id="menu-content-section" className="drop-menu-link">
              <div className="menu-container-class container-fluid">
                <div className="new-menu-wrapper box-direction text-direction">

 
                {menudata?.map(menu => (
                          <div key={menu.id}  onMouseEnter={openNewMenu} onMouseLeave={closeNewMenu} className= {menu.services.length > 0 ? "new-menu-item sub" : "new-menu-item" }>
                          
                         {menu.slug == '/' 
                         ? <h1 onClick={refreshPage}>{menu.title}</h1>
                            :  <>{deviceName != 'Mobile'
                            ? <h1><Link   href={menu.slug ? menu.slug : '' }><a>
                              { locale == 'ar' ? menu.title_arabic : menu.title}
                              </a></Link></h1>
                           : <h1>{locale == 'ar' ? menu.title_arabic :  menu.title}</h1>
                           } </>
                        }
                       <a>
                            <span></span>
                     
          <div className="new-menu-sub text-direction">
                { menu?.services.length > 0 &&  menu.services.map(li => {
                return( <div onClick={samePageRefresh}>
                  <Link  href={li.slug}>
                    <a>
                      <li>
                      { locale == 'ar' ? li.title_arabic :  li.title}
                      </li>
                    </a>
                  </Link>
                </div> )
                })}         
         </div>
              </a>
            </div>
                ))}
                </div>

              </div>



              <div className="headerFooter">
             
             
            
             
             
          <div className="abouts"> 
              
                 {(bottomPages?.length > 0) 
                 && 
                 <>
                 {bottomPages.map(m => {
                    return (
                      <div className="header-custom-dropdown">
                      <a className="dropdown-title">
                        { locale == 'ar' ?  m.title_arabic : m.title} 
                        <i className="fas fa-chevron-down"></i></a>
                      <div className="custom-menu-list text-direction">
                        <ul style={{ top: "-65px" }}>
                         {m.services.map(m => {
                         
                         return (
                         <li><Link 
                              href={m.slug || m.link}>
                           <a>
                           { locale == 'ar' ?  m.title_arabic : m.title} 
                           </a>
                           </Link>
                           </li> );
                         })}
                        </ul>
                      </div>
                    </div>
                    );

                 })}
                 </>
                }
            </div> 
        
            
            {/* about us ends here */}



                <div className="socials">
            
                  {companyInfo && 
                  <>
                  {companyInfo.fb && <a href={companyInfo.fb} target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a> }
                  {companyInfo.linkedin && <a href={companyInfo.linkedin} target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a> }
                  {companyInfo.instagram && <a href={companyInfo.instagram} target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a> }
                  {companyInfo.youtube && <a href={companyInfo.youtube} target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>  }
                  {companyInfo.twitter &&  <a href={companyInfo.twitter} target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>  }
                  </>  }  

          
                </div>
              </div>
            </div>
         
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
<style>
  {`


#brandingmenu{
  left: 45%;
  top: 45%;

}
.selected-bg-menu h1 a{
  color: #337093;
  text-decoration: none;
}
.new-menu-item a {
  color: inherit;
  text-decoration: none;
}

@media only screen and (max-width: 1025px) {
  .new-menu-item{
    margin-top: 0vh !important;
  }
  .drop-menu-link .headerFooter .abouts a{
    margin-right: 10px;
  }
  .drop-menu-link .headerFooter{
    padding: 0 15px;
  }

  


  .drop-menu-listing .custom-dropdown-menu.show{
    margin-left: 0;
    overflow: scroll;
    max-height: 193px;
  }
}
.position-fixed{
  position: fixed;
}

.white-color{color: #fff !important;}
.dark-color{color: #212121;}
    
.drop-menu-listing .custom-dropdown-menu.show{
  background-color: rgba(48, 120, 157, 0.6);
  max-height: 270px;
  overflow-y: auto;
}
.drop-menu-listing .custom-dropdown-menu.show::-webkit-scrollbar{
  width: 8px;
  background-color: rgba(48, 120, 157, 0.3);
  
}
.drop-menu-listing .custom-dropdown-menu.show::-webkit-scrollbar-track{
  border-radius: 10px;
  background-color: rgba(48, 120, 157, 0.3);
}

.drop-menu-listing .custom-dropdown-menu.show::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background-color: rgba(241, 246, 249, 1);

}
.drop-menu-listing .custom-dropdown-menu.show a{
  padding-left: 10px;
  padding-right: 10px;
}

@media screen and (max-width: 1300px) and (min-width: 920px) {

  .drop-menu-listing .custom-dropdown-menu.show{
    background-color: rgba(48, 120, 157, 0.6);
    max-height: 200px;
    overflow-y: auto;
  }

}


 #menu-content-section{
  background-image: url('/images/new-menu-banner-small.png');
  background-color: #fff;
  background-position: center;
  background-size: cover;
  height: 100vh;
  background-repeat:no-repeat;
}
.new-menu-item{
 position: relative;
 display: inline-block;
 padding-left: 10px;
 padding-right: 10px;
 margin-top: 20vh;
 -webkit-transition: all .3s ease-in-out;
 -o-transition: all .3s ease-in-out;
 transition: all .3s ease-in-out;

}
.new-menu-item h1{
 display: inline-block;
 padding-top: 20px; 
 color: #212121;
 font-weight: bold;
}

.new-menu-wrapper{
 display: flex;
 justify-content: space-around; 
 position: relative;
/* margin-top: -120px;  */  
}
.new-menu-item .new-menu-sub{
 display: none;
}
.new-menu-item:hover  .new-menu-item .new-menu-sub{
-webkit-transition: all .3s ease-in-out;
transition: all .3s ease-in-out;    
-o-transition: all .3s ease-in-out;
 display: block;
}
.new-menu-item.sub:hover{
margin-top: 0;
-webkit-transition: all .3s ease-in-out;
-o-transition: all .3s ease-in-out;
transition: all .3s ease-in-out;}


.new-menu-item .new-menu-sub a{
width: 100%;
padding-top: 4px;
padding-bottom: 4px;
display: block;
color: #212121;
font-family: 'Roboto', sans-serif;   
font-size: 1.3rem;
cursor: pointer;
}
.new-menu-item .new-menu-sub a:hover{
 color: #337093;
}
.selected-bg-menu h1{
 font-size: 9rem;
 color: #337093;
 opacity: 0.07;
 /* margin-bottom: -13px; */
 position: relative;
 margin-bottom: 0;
}

@media only screen and (max-width: 1050px) {
.new-menu-wrapper{       display: flex;
   justify-content: space-around; 
   position: relative;
   margin-top: -120px;
   flex-direction: column;
   text-align: center;
   padding-top: 14vh;
 }
 .new-menu-item h1{
   font-size: 2.2rem;
 }
 .new-menu-item span{
   display: none;
 }
 .selected-bg-menu h1{
   font-size: 70px;
   display: none;
 }
 .new-menu-item .new-menu-sub a{
   font-size: 1.5rem;
 }
}

@media only screen and (max-width: 800px) {
.new-menu-wrapper{       display: flex;
      justify-content: space-around; 
      position: relative;
      margin-top: -120px;
      flex-direction: column;
      text-align: center;
      padding-top: 14vh;
    }
    .new-menu-item h1{
      font-size: 1.5rem;
    }
    .new-menu-item span{
      display: none;
    }
    .selected-bg-menu h1{
      font-size: 70px;
      display: none;
    }
    .new-menu-item .new-menu-sub a{
      font-size: 14px;
    }
  }
@media only screen and  (max-width: 600px) {
.new-menu-wrapper{       display: flex;
      justify-content: space-around; 
      position: relative;
      margin-top: -120px;
      flex-direction: column;
      text-align: center;
      padding-top: 14vh;
    }
    .new-menu-item h1{
      font-size: 2.2rem;
    }
    .new-menu-item span{
      display: none;
    }
    .selected-bg-menu h1{
      font-size: 70px;
      display: none;
    }
    .new-menu-item .new-menu-sub a{
      font-size: 14px;
    }
  }
@media only screen and (max-width: 450px) {
.new-menu-item h1{
  font-size: 19px;
}
.new-menu-item .new-menu-sub a {
  font-size: 14px;
 }
.new-menu-item .new-menu-sub{
  max-height: 150px;
  overflow: auto;
}
}

.box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
.text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}


`}
</style>
</header>

  </>

  );


}

export default React.memo(Header)


