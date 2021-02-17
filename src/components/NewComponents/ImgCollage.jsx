const ImgCollage = (props) =>{
  const images = props.images;
  const ImagePath = props.ImagePath;
   return (
<React.Fragment>
<div className="container">
  <div className="row d-flex justify-content-center">
    <div className="col-md-6  text-center px-1">
    {images.length > 0 && 
    <img src = {ImagePath + images[0].image}  alt = "portfolio" className = "img-fluid"/>
    }
   </div>
    <div className="col-md-5 px-3">
      <div className="row">
      <div className="col-md-6 text-center px-1">
      {images.length > 1 && 
    <img src = {ImagePath + images[1].image}  alt = "portfolio" className = "img-fluid"/>
    }
     
      </div>
        <div className="col-md-6 text-center px-1">
        {images.length > 2 && 
         <img src = {ImagePath + images[2].image}  alt = "portfolio" className = "img-fluid"/>
        }
        
        </div>
        <div className="col-md-6 text-center px-1">
        {images.length > 3 && 
        <img src = {ImagePath + images[3].image}  alt = "portfolio" className = "img-fluid"/>
        }
        </div>
        <div className="col-md-6 text-center px-1">
        {images.length > 4 && 
          <img src = {ImagePath + images[4].image}  alt = "portfolio" className = "img-fluid"/>
          }
        </div>
      </div>
    </div>


    <div className="col-md-5 px-3">
      <div className="row">
      <div className="col-md-6 px-1 text-center">
      {images.length > 5 && 
        <img src = {ImagePath + images[5].image}  alt = "portfolio" className = "img-fluid"/>
        }
        </div>
        <div className="col-md-6 text-center px-1">
        {images.length > 6 && 
       <img src = {ImagePath + images[6].image}  alt = "portfolio" className = "img-fluid"/>
        }
       
        </div>
        <div className="col-md-6 text-center px-1">
        {images.length > 7 && 
    <img src = {ImagePath + images[7].image}  alt = "portfolio" className = "img-fluid"/>
    }
        </div>
        <div className="col-md-6 text-center px-1">
        {images.length > 8 && 
    <img src = {ImagePath + images[8].image}  alt = "portfolio" className = "img-fluid"/>
    }
        </div>
      </div>
    
    </div>
    <div className="col-md-6 text-center px-1">
    {images.length > 9 && 
    <img src = {ImagePath + images[9].image}  alt = "portfolio" className = "img-fluid"/>
    }

    </div>


  </div>
</div>








</React.Fragment>

) 
}
export default ImgCollage;
