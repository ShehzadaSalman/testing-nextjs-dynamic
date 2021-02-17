const ThumbnailSeven = (props) => (
    <React.Fragment>
      <div className="ThumbnailSevenClass">
        <img src={props.imgAddress} alt = "Thumbnail" />
        { props.dark ? <p style = {{ color: "#212121" }}>{props.title}</p> : <p>{props.title}</p> }
        
        
        
        {props.secondtitle ? 
        <p className = "caption">{props.secondtitle}</p> 
        : <p></p>}
     
     
      </div>
  
      <style jsx>
        {`
  
  .ThumbnailSevenClass{
    text-align:center;
  }
  .ThumbnailSevenClass p
  {
    font-size: 17px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    margin-top: 0px;
    margin-bottom: 0;
    line-height: 1.5;
    text-align:center;
    color: #212121;
    font-weight:600;
  }
  .ThumbnailSevenClass .caption{
    font-weight: 300;
    font-size: 1rem;
    margin-top: 5px;
  
  }
  .ThumbnailSevenClass img
  {
    margin-bottom: 10px;
   max-width: 100%;
  }
  `}
      </style>
  
    </React.Fragment>
  );
  
  export default ThumbnailSeven;
  