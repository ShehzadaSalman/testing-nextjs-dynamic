import dynamic from 'next/dynamic';
const ContactUs = dynamic(() => import('../Slides/ContactUs'), { ssr: false });
import { useRouter } from 'next/router';

const CONTACT = ({finalData}) => {
  const router = useRouter();
  console.log(router.pathname);
  var pageurl = "https://techbay.co"+router.pathname;
 
  let data ={
    title: finalData.header_title_english,
    title_arabic: finalData.header_title_arabic,
    btn_txt: finalData.header_btn_txt_english,
    btn_txt_arabic:finalData.header_btn_txt_arabic
  }
 
  return (
    <React.Fragment>
     
      <ContactUs  data={data} hideArrows = "true" toggleArrows={() => undefined} />
    
      <style>
       {`
       html{
         overflow-x: auto;
       }
       
       .slide-content-wrapper.jsx-1963552391{
         min-height:100vh;
       }
      


      `}
      </style> 
  
    </React.Fragment>
  
  );
};

export default React.memo(CONTACT);
