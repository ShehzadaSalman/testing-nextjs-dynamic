const ThumbnailFive = (props) => (
  <React.Fragment>
    <div className="ThumbnailFiveClass">
      <img src={props.imgAddress}  alt = "Thumbnail"/>
      { props.dark ? <p style = {{ color: "#212121" }}>{props.title}</p> : <p>{props.title}</p> }
      
      
      
      {props.secondtitle ? 
      <p className = "caption">{props.secondtitle}</p> 
      : <p></p>}
   
   
    </div>

    <style jsx>
      {`

.ThumbnailFiveClass{
  text-align:center;
}
.ThumbnailFiveClass p
{
  font-size: 17px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  margin-top: 0px;
  margin-bottom: 0;
  line-height: 1.5;
  text-align:center;
  font-weight:600;
}
.ThumbnailFiveClass .caption{
  font-weight: 300;
  font-size: 1rem;
  margin-top: 5px;

}
.ThumbnailFiveClass img
{
  margin-bottom: 10px;
 max-width: 100%;
}
`}
    </style>

  </React.Fragment>
);

export default ThumbnailFive;
