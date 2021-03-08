import {createContext, useState, useEffect} from 'react';
import axios from 'axios'
export const FooterContext = createContext(null);
const {Provider} = FooterContext; 


const FooterProvider = (props) => {

  const [footerData, setFooterData] = useState({})
  const [bottomFooter, setBottomFooter] = useState({});
  const [menudata, setMenuData] = useState({});
  const [bottomPages, setBottomPages] = useState({});
  const [companyInfo, setCompanyInfo] = useState({});




  {/* fetching data for the footer */}
  const fetchData = async () => {
    const info = await  axios.get('https://staging.techbay.co/api/get-addresses');
    const finalCompanyInfo = await  info.data.response;
    setFooterData(finalCompanyInfo);
    const infotwo = await  axios.get('https://staging.techbay.co/api/get-header-footer-content');
    const finalCompanyInfotwo = await  infotwo.data.response;
    setBottomFooter(finalCompanyInfotwo);
  }

  {/* fetchng data for the header */}
 const fetchDataHeader = async () => {
    const result = await  axios.get('https://staging.techbay.co/api/get-navbar-menu');
    const finalData = await  result.data.response;
    setMenuData(finalData);
   
   const bpage = await  axios.get('https://staging.techbay.co/api/get-footer-menu');
   const finalBottomPages  = await  bpage.data.response;
   setBottomPages(finalBottomPages)
   console.info("this is the bottompages")


  const cinfo = await  axios.get('https://staging.techbay.co/api/get-header-footer-content');
  const finalCompanyInfo = await  cinfo.data.response;
  setCompanyInfo(finalCompanyInfo);
  
} 





  useEffect(() => {
    fetchDataHeader();
    fetchData();
     },[])





    return (<Provider value={{
      footerData,
      bottomFooter,
      menudata,
      bottomPages,
      companyInfo,
      fetchData,
      fetchDataHeader
       }}>
           {props.children}
         </Provider>)
}
export default FooterProvider;