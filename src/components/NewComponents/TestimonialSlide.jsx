const TestimonialSlide = (props) => (
  <React.Fragment>
    <div className="slide-content">
      <div className="img-div">
        <img src= {props.imgAddress}  alt = "Testimonial"/>
      </div>

      <div className="caption-div">
      {props.dark ? <p className = "white-text">{ props.content }</p> : <p>{ props.content }</p>  }
     
        {/*  */}
      </div>

      <div className="title-div">
      {props.dark ? <p className = "white-text">{ props.person }</p> : <p>{ props.person }</p>  }
      {props.dark ? <p className = "white-text">{ props.position }</p> : <p>{ props.position }</p>  }
      </div>
    </div>
    <style jsx>
      {`
        .slide-content {
          text-align: center;
        }
        .slide-content .img-div {
          text-align: center;
        }
        .img-div img {
          height: 120px;
          display: inline-block;
        }
        .caption-div {
          font-family: 'Roboto', sans-serif;
          margin-top: 20px;
          text-align: center;
          color: #212121;
          font-size: 1.1rem;
          line-height: 1.7;
          white-space: pre-wrap;
          white-space: pre-line;
        }
        .title-div p {
          font-family: 'Roboto', sans-serif;
          font-style: italic;
          padding: 0;
          margin-bottom: 0;
          color: rgba(143, 143, 143, 0.5);
        }
        .white-text{
          color: #fff;
        }
        .title-div .white-text{
          color: rgba(255,255,255,.5) !important;
        }
      `}
    </style>
  </React.Fragment>
);
export default TestimonialSlide;
