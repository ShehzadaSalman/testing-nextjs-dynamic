const ThumbnailOne = (props) => (
  <React.Fragment>
    <div className="ThumbnailOneClass">
      <img src={props.imgAddress} alt ="Thumbnail" />
      <p>{props.title}</p>
      {props.secondtitle ? <p>{props.secondtitle}</p> : <p></p>}
    </div>

    <style jsx>
      {`

.ThumbnailOneClass{
  text-align:center;
}
.ThumbnailOneClass p
{
  font-size: 17px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  margin-top: 0px;
  margin-bottom: 0;
  line-height: 1.5;
  text-align:center
}
.ThumbnailOneClass img
{
  margin-bottom: 10px;
 max-width: 100%;
}
`}
    </style>

  </React.Fragment>
);

export default ThumbnailOne;
