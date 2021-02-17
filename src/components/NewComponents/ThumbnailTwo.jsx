import Image from 'next/image';
const ThumbnailTwo = (props) => (
  <React.Fragment>
    <div className="ThumbnailTwoClass">
      {/* <Image src={props.imgAddress}  alt="Thumbnail" height="150" width="150"/> */}
      <img src={props.imgAddress}  alt = "Thumbnail" />
      <p>{props.title}</p>
      {props.secondtitle ? <p>{props.secondtitle}</p> : <p></p>}
    </div>

    <style jsx>
      {`

.ThumbnailTwoClass{
  text-align:center;
}
.ThumbnailTwoClass p
{
  font-size: 17px;
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  margin-top: 0px;
  margin-bottom: 0;
  line-height: 1.2;
  text-align:center
}
.ThumbnailTwoClass img
{
  margin-bottom: 15px;
 max-width: 100%;
}
`}
    </style>

  </React.Fragment>
);

export default ThumbnailTwo;
