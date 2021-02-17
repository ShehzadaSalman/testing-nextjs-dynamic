import {useState, useEffect} from 'react'
import axios from 'axios';
import { useRouter } from 'next/router'
export default (props) => {
  const router = useRouter();
  const {locale} = router;


const [footerData, setFooterData] = useState({})
const [bottomFooter, setBottomFooter] = useState({});

  const fetchData = async () => {
    const info = await  axios.get('https://staging.techbay.co/api/get-addresses');
    const finalCompanyInfo = await  info.data.response;
    setFooterData(finalCompanyInfo);
    const infotwo = await  axios.get('https://staging.techbay.co/api/get-header-footer-content');
    const finalCompanyInfotwo = await  infotwo.data.response;
    setBottomFooter(finalCompanyInfotwo);
  }



  useEffect(() => {
    fetchData();
     },[])


     





  return (
    <div className='footers'>
      <div className="container pb-0 pb-md-3">
        <div className="row mb-0 mb-md-5">

    
        {footerData.addresses &&
        <>
        {footerData.addresses.map(f => (
<div className="col-sm-12 col-md-6  copyright" key={f.address}>
<div className="maps mb-3">
<iframe src={f.map}></iframe>
</div>
<p className="text-direction">{
locale == 'ar'
? f.address_arabic
: f.address
}</p>
<div className="mg-footer-contact-selector text-direction">
<ul>
<li className="mx-2">
<a href={"tel:"+f.phone} className="mx-2"><i className="fa fa-phone"></i>{f.phone}</a>{' '}
</li>
<li className="mx-2">
<a href={"mailto:"+f.email} className="mx-2">
  <i className="far fa-envelope"></i> 
  {f.email}
  </a>
</li>
</ul>

</div>
</div>
  ))}

        </>  
        }
         
          
        </div>
      </div>

      <div style={{ backgroundColor: "#f8f9fa" }} className=" copyright mt-3 mt-md-5 pt-0 border-none">
        <div className="container pt-2 pb-2">
          <div className="row pt-1">
            {/* the ending footer is here */}
            <div className="col-md-4 d-flex justify-content-center mb-3 mb-md-0 mt-3 mt-md-0">
              <div className="social d-flex mb-0 text-left align-items-center">
              
              {bottomFooter &&   <>
                {bottomFooter.fb &&  <a href={bottomFooter.fb}>
                  <i className="fab fa-facebook-f"></i>
                </a>   }
                {bottomFooter.linkedin &&  <a href={bottomFooter.linkedin}>
                  <i className="fab fa-linkedin-in"></i>
                </a>}
                {bottomFooter.instagram &&  <a href={bottomFooter.instagram}>
                  <i className="fab fa-instagram"></i>
                </a>   }
                {bottomFooter.youtube &&  <a href={bottomFooter.youtube}>
                  <i className="fab fa-youtube"></i>
                </a>   }
                {bottomFooter.twitter &&  <a href={bottomFooter.twitter}>
                  <i className="fab fa-twitter"></i>
                </a>   }
              </>}
              
      
              </div>
            </div>
            <div className="col-md-4  d-flex align-items-center justify-content-center mb-3 mb-md-0">
              <p className="text-center">© 2021 — Techbay Solutions. All Rights Reserved.</p>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <img src="/svg-pic/payment.svg" className="img-fluid mb-0" alt=" payments" />
            </div>
          </div>
        </div>
      </div>


      <style>
        {
          `
          .footer{
            padding-bottom: 0px;
          }
          .text-direction{text-align: ${locale === 'ar' ? 'right' : 'left'}}
          .box-align{direction: ${locale === 'ar' ? 'ltr' : 'rtl'}}
          border-none{
            border: none;
          }
          `
        }
      </style>
    </div>
  );
};
