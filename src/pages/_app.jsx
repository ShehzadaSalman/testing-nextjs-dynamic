import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'intl-tel-input/build/css/intlTelInput.css';
import Router from 'next/router';
import {useRouter} from 'next/router';
import { useState } from 'react';
import { UserProvider } from '../ContextApi/usercontext';
import TagManager from 'react-gtm-module';
import '../../public/css/style.css';
import '../../public/css/newstyle.css';
import '../../public/css/responsive.css';
import '../../public/css/fontawesome/css/all.min.css';
import Head from 'next/head';
import footerProvider from '../ContextApi/footerContext'
const tagManagerArgs = {
  gtmId: 'GTM-NH6LNLJ',
}







export default function MyApp({ Component, pageProps }) {
 const routerHook = useRouter();

  if (process.browser) {
    TagManager.initialize(tagManagerArgs);
  }

  const [loader, setLoader] = useState(false);

  Router.onRouteChangeStart = (url) => {
    setLoader(!loader);
    console.log("RouteChangeStart:", url);
  };

  Router.onRouteChangeComplete = (url) => {
    console.log("RouteChangeComplete", url);
    
    if (window.location.pathname == '/' || window.location.pathname == '/ar') {
       routerHook.reload().then(()=> {
        setLoader(!loader);
       })
       
    }else{
      setLoader(!loader);
    }

  };

  Router.onRouteChangeError = (err, url) => {
    console.log("ROUTING ERROR", err);
    // setLoader(!loader);
  };



  return (<UserProvider>
  <footerProvider>
   <Head>
    {/* addd dynamic tags here */}
   </Head>

    {loader
      ? <div id="loader" className="span theme-loader  align-items-center jultify-content-center">
        <div className="typing_loader"></div>
      </div>
      : ''
    }
    <Component {...pageProps} />
    </footerProvider>
  </UserProvider>);


}
