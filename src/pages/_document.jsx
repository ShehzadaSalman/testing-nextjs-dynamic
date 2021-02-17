import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
   
 
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="Techbay Solutions Testing" />
          <meta property="og:type" content="website" />
 
          <meta property="og:image" content="/images/screen.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@techbaysolutions" />
          <meta name="twitter:creator" content="@techbaysolutions" />
          {/* <meta
            name="twitter:title"
            content="Techbay takes pride in providing full-cycle software/app/web development | systems integration & Digital Marketing"
          /> */}
          <meta name="twitter:image" content="/images/screen.png" />
          <meta name="twitter:url" content="https://www.techbay.co" />

          <meta charSet="utf-8" />
          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0,user-scalable=0"
          /> */}
          <meta name="msapplication-navbutton-color" content="#4a91bd" />
          <meta name="theme-color" content="#4a91bd" />
          <meta name="apple-mobile-web-app-capable" content="#4a91bd" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#4a91bd" />
          <link rel="alternate" href="https://techbay.co/" hreflang="en-us" />
          {/* <link href="/css/style.css" rel="stylesheet" /> */}
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <meta name="google-site-verification" content="ysa4Wsx0oeGoRpLkKy2YlQ37pdvQezY8wnQ4A6RoiAc" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          async />
           <link rel="icon" href="/logo.svg" type="image/icon" sizes="16x16" /> 
          <link rel="shortcut icon" href="/images/favicon.png" />
          {/* <link href="/css/animations.css" rel="stylesheet"  async/> */}
           {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
            integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
            crossOrigin="anonymous" async></script>
         */}
        
        </Head>
        <body>
          <Main />
          <NextScript />
         
    
         
        <link
            href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
            rel="stylesheet"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Krona+One&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"/>

        </body>
      </Html>
    );
  }
}

export default MyDocument;
