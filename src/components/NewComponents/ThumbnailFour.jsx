const ThumbnailFour = (props) => (
  <React.Fragment>
    <div className="ThumbnailFourClass">
      <img src={props.imgAddress} alt = "Thumbnail" />
      <p>{props.title}</p>
      {props.secondtitle ? <p>{props.secondtitle}</p> : <p></p>}
    </div>

    <style jsx>
      {`

.ThumbnailFourClass{
  text-align:center;
}
.ThumbnailFourClass p
{

  color: #4A91BD;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  margin-top: 0px;
  margin-bottom: 0;
  line-height: 1.5;
  text-align:center;
  font-weight: 700;
}
.ThumbnailFourClass img
{
  margin-bottom: 10px;
 max-width: 100%;
}
`}
    </style>

  </React.Fragment>
);

export default ThumbnailFour;
