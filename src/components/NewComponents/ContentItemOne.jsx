const ContentItemOne = (props) => (
    <React.Fragment>
        <h3 className = "heading">{props.heading}</h3>
        <p className = "paragraph">{props.paragraph}</p>

   <style>{`
   .heading{
    color: #4A91BD;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    line-spacing: 56;
    font-size: 2.3rem;
    white-space: pre-wrap;
    white-space: pre-line;
  }

   .paragraph{
    font-family: 'Roboto', sans-serif;
    margin-top: 20px;
    text-align: center;
    color: #212121;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #212121;
    white-space: pre-wrap;
    white-space: pre-line;
   }
   ` }
   </style>

    </React.Fragment>
);

export default ContentItemOne;
