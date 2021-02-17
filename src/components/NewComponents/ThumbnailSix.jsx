const ThumnailSix = (props) => (
 <React.Fragment>
   <div className="ThumbnailSixClass">
     <img src={props.imgAddress} alt = "Thumbnail" />
     <p>{props.title}</p>
     {props.secondtitle ? <p>{props.secondtitle}</p> : <p></p>}

   </div>

   <style jsx>
     {`

.ThumbnailSixClass{
 text-align:center;
}
.ThumbnailSixClass p
{
 color: #fff;
 font-family: 'Roboto', sans-serif;
 font-size: 1.2rem;
 margin-top: 5px;
 margin-bottom: 0;
 line-height: 1.5;
 text-align:center;
}
.ThumbnailSixClass img
{
  margin-right: 3px;
  margin-left: 3px;
 margin-bottom: 10px;
max-width: 100%;
}
`}
   </style>
 </React.Fragment>
);

export default ThumnailSix;
