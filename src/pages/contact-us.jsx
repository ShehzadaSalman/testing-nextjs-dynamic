import Head from 'next/head';
import dynamic from 'next/dynamic';
const ContactUs = dynamic(() => import('../components/Slides/ContactUs'), { ssr: false });
import Headertwo from '../components/Headertwo';
import Layout from '../components/Layout';
import Headerfour from '../components/HeaderFour';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
const CONTACT = () => {
  const router = useRouter();
  console.log(router.pathname);
  var pageurl = "https://techbay.co"+router.pathname;
  return (
    <React.Fragment>

      <Head>
        <title>
          Digital Marketing Agency | Contact Us - Get immediate Assistance | Techbay Solutions
        </title>
        <meta
          name="description"
          content= "Techbay Solutions is one of the well-known digital marketing agencies in Dubai. Contact us (+971 4 425 7880) or Email: info@techbay.co for quick assistance"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
        <link rel="canonical" href= "https://techbay.co/contact-us"/>
        <meta property="og:url" content={pageurl} />
        {/* <link href="/css/newstyle.css" rel="stylesheet"/> */}

      </Head>
       <Headerfour/>
      <ContactUs hideArrows = "true" toggleArrows={() => undefined} />

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

export default CONTACT;
