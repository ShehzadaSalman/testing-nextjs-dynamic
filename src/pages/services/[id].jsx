import axios from 'axios';
import React from 'react';
import dynamic from 'next/dynamic';
import Error from 'next/error';
import Layout from '../../components/Layout'
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

const BrandingSlide = dynamic(() => import('../../components/Slides/Branding'), { ssr: false });
const WebDevelopment = dynamic(() => import('../../components/Slides/WebDevelopment'), { ssr: false });
const DigitalMarketing = dynamic(() => import('../../components/Slides/DigitalMarketing'), { ssr: false });




function SERVICES({data}) {
 


// check if we have data or not 
if(data.length < 1){
    return <Error statusCode="404"/>; 
}else{
    if(data[0].id == 11){ 
        return <>
        <Layout>
       

        <BrandingSlide data = {data[0]}   />
        </Layout>
              </> 
      
      
      }else if(data[0].id == 12){ 
      
          return <>
          <Layout>
           <WebDevelopment data = {data[0]}  /> 
          </Layout>
         </>
      
      }else if(data[0].id == 13){ 
      
          return <>
             <Layout>
               <DigitalMarketing data = {data[0]}   />
             </Layout>
             </>;
           
      
      }else{
      
          return <Error statusCode="500" />
      
      }


}

 
}

export default SERVICES

// fetch data from the url
export async function getServerSideProps(context) {
    const res = await axios.get(`https://staging.techbay.co/api/get-navbar-menu-content/${context.params.id}`)
    const data = await res.data.response
  
    // Pass data to the page via props
    return { props: { data } }

  }
