import axios from 'axios';
import React from 'react';
import dynamic from 'next/dynamic';
import Error from 'next/error';
import Layout from '../../components/Layout'
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';


const BrandingSlide = dynamic(() => import('../Slides/Branding'), { ssr: false });
const WebDevelopment = dynamic(() => import('../Slides/WebDevelopment'), { ssr: false });
const DigitalMarketing = dynamic(() => import('../Slides/DigitalMarketing'), { ssr: false });




function SERVICES({finalData}) {
 let data = finalData;
  console.log(data);

  

// check if we have data or not 
 
  
if(data.id == 11){ 
        return <>
        <Layout>
        <BrandingSlide data = {data}   />
        </Layout>
              </> 
      
      
      }else if(data.id == 12){ 
      
          return <>
          <Layout>
           <WebDevelopment data = {data}  /> 
          </Layout>
         </>
      
      }else if(data.id == 13){ 
      
          return <>
             <Layout>
               <DigitalMarketing data = {data}   />
             </Layout>
             </>;
           
      
      }else{
      
          return <Error statusCode="500" />
      
      }


}

 


export default React.memo(SERVICES)







