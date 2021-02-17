



const SuccessDisplay = () => {
   // closing the popup form here
   const closeFormPopup = (event) => {
    event.preventDefault();
    $('.formPopup-success ').css("display","none");
    }
    return(
    <React.Fragment>
 {/* the success message is displayed here */}
<div className="formPopup-success" onClick = {closeFormPopup}>
  <a onClick = {closeFormPopup} href="#" className="clsPopup"><i className="fa fa-times"></i></a>
  <div className="formInner-success">
    <div className="messageBox" style = {{ display: "block"}}>
      <a href="#" onClick = {closeFormPopup} className="closemsg"><i className="fa fa-times"></i></a>
      <i className="far fa-check-circle"></i>
      <h2>THANK YOU FOR CONTACTING US!</h2>
      <p>We will get in touch with you shortly</p>
    </div>
    <div className="msg"></div>
  </div>
</div> 


    <style>
        {`
  
        
        
        `}
    </style>
  </React.Fragment>
    ); 


}

export default SuccessDisplay;