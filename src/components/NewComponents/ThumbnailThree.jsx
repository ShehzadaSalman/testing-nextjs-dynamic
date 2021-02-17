const ThumbnailThree = (props) => (
<React.Fragment>
<div classNamme = "thumbnaithree-container">
    <div className = "thumbnailthree-box">
     <img src = {props.imgAddress}  alt = "Thumbnail"/>
         <p>{props.title}</p>
    </div>




</div>
<style jsx>
{`
  .thumbnailthree-box{
     min-width: 230px;
     height: 210px;
      text-align: center;
     -webkit-box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.44);
-moz-box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.44);
box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.44);
overflow: hidden;
  }
  .thumbnailthree-box img{
    padding: 30px;
    padding-bottom: 20px;
    max-width: 100%;
    height: 160px;
  }
  .thumbnailthree-box  p{
    font-family: 'roboto', sans-serif;
    font-weight: 600;
    font-size: 18px;
  }


`}
</style>
</React.Fragment>
);

export default ThumbnailThree;
