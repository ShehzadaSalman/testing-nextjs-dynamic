// import { useRouter } from 'next/router'

// const OgUrl = () => {
// //   const router = useRouter();
//   return "https://techbay.co";
// }

// export default OgUrl;





function OgUrl() {
    var url;

    if (window.location.pathname == '/') {
      url = "https://techbay.co/"
    }else{
      url = "http://techbay.co" + window.location.href + ""; 
    }
  
  
    return "https://techbay.co";
}

export default OgUrl;