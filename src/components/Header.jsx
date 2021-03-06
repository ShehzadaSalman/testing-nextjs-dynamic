import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive'
import { getDeviceName } from '../lib/helper';
import { useRouter } from 'next/router'
import { FooterContext } from '../ContextApi/footerContext'
const ImagePath = "https://staging.techbay.co/storage/app/";
let deviceName = getDeviceName();

const Header = () => {
  const isNotMobile = useMediaQuery({ minDeviceWidth: 900 })

  const {menudata, bottomPages, companyInfo,  footerData, fetchData, fetchDataHeader}
    = useContext(FooterContext)



  const [addClass, setAddClass] = useState(false);
  const [isMenu, setIsMenu] = useState(true);
  const router = useRouter();
  const { locale } = router;
  
 


  useEffect(() => {
    fetchData()
    if(menudata || bottomPages ){

    }else{
     fetchDataHeader()
   
    }

 }, [])



  const changeLanguage = (e) => {
    e.preventDefault()
    if (locale === 'ar') {
      try {
        router.push(router.asPath, router.asPath, { locale: 'en-US' });
      }
      catch (e) {
      }

    } else {
      router.push(router.asPath, router.asPath, { locale: 'ar' });
    }
  }

  const changePage = (e, url) => {
    e.preventDefault();
    console.info("change the page", url);
    router.push(url);
    toggleHeaderMenuClassHandler();
  }
  const CategoryHeading = (menu) => {
    if (menu.slug === '/') {
      return <h1 className="cursor-pointer" onClick={refreshPage}>{locale === 'ar' ? menu.title_arabic : menu.title}</h1>
    }
     else {
      if (isNotMobile) {
        return <h1 className="cursor-pointer" onClick={(e) => changePage(e, menu.slug.toString())}>{locale === 'ar' ? menu.title_arabic : menu.title}</h1>
      }
      else{
        return (<a><h1 className="cursor-pointer">{locale === 'ar' ? menu.title_arabic : menu.title}</h1></a>)
      }
    }
  }


 




  const toggleHeaderMenuClassHandler = () => {
    if (addClass) {
      setAddClass(false);
    } else {
      setAddClass(true);
    }
    if (isMenu) {
      setIsMenu(false);
    } else {
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

    if (window.location.pathname == '/') {
      window.location.reload();
    } else {
      window.location.href = "/";
    }
  }
  const samePageRefresh = (event) => {

    let urlName = event.currentTarget.querySelector("a").getAttribute("href"); // get url of the clicked menu
  
    let currentURL = window.location.pathname;
    if (urlName == currentURL) {
      window.location.reload();
    }
  }











  return (<>
    <header className="mg-main-header" id="myHeader" style={{ direction: 'ltr' }}>
      <div className="container-fluid p-0">
        <div className={`row ${addClass ? 'drop-menu-top-bar' : ''}`}>
          <div className="col-3 logos-container" style={{ direction: 'ltr' }}>
            <a onClick={refreshPage}>
              {footerData.logo ?
                <img
                  src={ImagePath + footerData?.logo} className="img-fluid" alt="Tech Bay Solution" />
                : <img src='images/site-logos.svg' className="img-fluid" alt="Tech Bay Solution" />
              }
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
                          </i> +{companyInfo.phone}
                        </a>
                      </li>
                    }
                    {companyInfo.email && <>
                      <li>
                        <a href="mailto:info@techbay.co">
                          <i className='far fa-envelope'></i> {companyInfo.email}
                        </a>
                      </li>
                    </>}
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
                      ? <>{locale == 'ar' ? <>القائمة</> : <>Menu</>}</>
                      : <>{locale == 'ar' ? <>قفل</> : <>Close</>}</>
                  }
                </button>

                <button className="btn mg-link-btn py-0 my-0 d-none d-md-block " onClick={(e) => changeLanguage(e)}>
                  {locale === 'ar'
                    ? <img src="/images/new-svg-images/language-icon.svg" className="d-none d-md-block" alt="change-lang" style={{height: "45px"}} />
                    : <img src="/images/new-svg-images/arabic-flag.svg" className="d-none d-md-block" alt="change-lang" style={{height: "45px"}} />
                  }
                </button>
                <div className={`drop-menu-listing ${addClass ? 'show' : ''}`}>
                  <div id="menu-content-section" className="drop-menu-link">
                    <div className="menu-container-class container-fluid">
                      <div
                        className="new-menu-wrapper box-direction text-direction">
                        {(menudata.length > 0) && menudata.map(menu => (
                          <div key={menu.id} onMouseEnter={openNewMenu} onMouseLeave={closeNewMenu} className={menu.services.length > 0 ? "new-menu-item sub" : "new-menu-item"}>

                            {CategoryHeading(menu)}
                            {/* {menu.slug == '/'
                              ? <h1 onClick={refreshPage}>{menu.title}</h1>
                              : <>{deviceName != 'Mobile'
                                ? <h1><Link href={menu.slug ? menu.slug : ''}><a>
                                  {locale == 'ar' ? menu.title_arabic : menu.title}
                                </a></Link></h1>
                                : <h1>{locale == 'ar' ? menu.title_arabic : menu.title}</h1>
                              } </>
                            } */}
                            <a>
                              <span></span>

                              <div className="new-menu-sub text-direction">
                                {menu?.services.length > 0 && menu.services.map(li => {
                                  return (<div onClick={samePageRefresh}>
                                    <Link href={li.slug}>
                                      <a>
                                        <li>
                                          {locale == 'ar' ? li.title_arabic : li.title}
                                        </li>
                                      </a>
                                    </Link>
                                  </div>)
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
                                    {locale == 'ar' ? m.title_arabic : m.title}
                                    <i className="fas fa-chevron-down"></i></a>
                                  <div className="custom-menu-list text-direction">
                                    <ul style={{ top: "-65px" }}>
                                      {m.services.map(m => {

                                        return (
                                          <li><Link
                                            href={m.slug || m.link}>
                                            <a>
                                              {locale == 'ar' ? m.title_arabic : m.title}
                                            </a>
                                          </Link>
                                          </li>);
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
                            </a>}
                            {companyInfo.linkedin && <a href={companyInfo.linkedin} target="_blank">
                              <i className="fab fa-linkedin-in"></i>
                            </a>}
                            {companyInfo.instagram && <a href={companyInfo.instagram} target="_blank">
                              <i className="fab fa-instagram"></i>
                            </a>}
                            {companyInfo.youtube && <a href={companyInfo.youtube} target="_blank">
                              <i className="fab fa-youtube"></i>
                            </a>}
                            {companyInfo.twitter && <a href={companyInfo.twitter} target="_blank">
                              <i className="fab fa-twitter"></i>
                            </a>}
                          </>}


                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

<style>{`

@media only screen and (max-width: 900px) {
  .new-menu-item .new-menu-sub a li{list-style-type: none;}
}

@media only screen and (max-width: 900px) {
  .new-menu-wrapper .new-menu-item h1{ font-size: 1.3rem; padding-top: 20px}
  .new-menu-wrapper .new-menu-item .new-menu-sub a {font-size: 14px;}
}
@media only screen and (max-width: 400px) {
  .new-menu-wrapper .new-menu-item h1{ font-size: 1rem; padding-top: 20px}
  .new-menu-wrapper .new-menu-item .new-menu-sub a {font-size: 12px;}
}

`}

</style>


<style jsx>
        {`


@media only screen and (max-width: 900px) {
  .text-direction{text-align: center;}
  .new-menu-wrapper .new-menu-item h1{ font-size: 1rem;}
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

@media only screen and (max-width: 900px) {
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
   font-size: 17px;
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


