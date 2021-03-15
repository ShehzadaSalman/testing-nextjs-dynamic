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
  const [email, setEmail] =  useState({});




  {/* fetching data for the footer */}
  const fetchData = async () => {
    try{
    
      const info = await  axios.get('https://staging.techbay.co/api/get-addresses');
      const finalCompanyInfo = await  info.data.response;
      setFooterData(finalCompanyInfo);


      const infotwo = await  axios.get('https://staging.techbay.co/api/get-header-footer-content');
      const finalCompanyInfotwo = await  infotwo.data.response;
      setBottomFooter(finalCompanyInfotwo);
    
    }catch(e){
      console.log("error in the fetchData method of footer context")
      console.log(e)
    }

  }

  {/* fetchng data for the header */}
 const fetchDataHeader = async () => {
   
  try{
    const result = await  axios.get('https://staging.techbay.co/api/get-navbar-menu');
    const finalData = await  result.data.response;
    setMenuData(finalData);
   
   const bpage = await  axios.get('https://staging.techbay.co/api/get-footer-menu');
   const finalBottomPages  = await  bpage.data.response;
   setBottomPages(finalBottomPages)

  const cinfo = await  axios.get('https://staging.techbay.co/api/get-header-footer-content');
  const finalCompanyInfo = await  cinfo.data.response;
  setCompanyInfo(finalCompanyInfo);

  }catch(e){
    console.log("Error in fetching from the FooterContext api's")
    console.log(e)
  }

  
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