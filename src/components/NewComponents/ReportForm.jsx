import Head from 'next/head';

const ReportForm = ({props}) => {

    const formSubmitReport = (event) => {
    event.preventDefault();
    var service = event.target.querySelector('#serviceName').value;
   let finalurl = 'http://cms.techbay.co/home/branding';
    var x = $("#services3 #email").val();
    if (x == "") {
      $(".formPopup-branding .msg").html("Please fill empty fileds.");
      console.log("the email field is empty");
    } else {
      $.ajax({
        type: "POST",
        url: finalurl,
        data: $("#services3").serialize(),
        success: function (data) {
          console.log(data);
        },
      });
      $("#services3")[0].reset();
      $(".formPopup-branding .msg").html("");
      $("#services3").css("display", "none");
      $(".formPopup-branding .packageForm .messageBox").fadeIn();
      $(".formPopup-branding .messageBox").css("display", "block");
    }
  }



  
  // closing the popup form here
 const closeFormPopup = (event) => {
     
    event.preventDefault();
    $('.formPopup-branding').css("display","none");
    $(".formPopup-branding .messageBox").css("display", "none");
    $("#services3").css("display", "block");
    $("#services3")[0].reset();
  }
    
  const formpopupBranding = () => {
    $('.formPopup-branding').css("display","block");
    console.log("this is branding popup")
  } 
    return (
<React.Fragment>
     <Head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
    crossOrigin="anonymous"></script> 
  </Head>
<div className="formPopup-branding">
<a  href="#" onClick = {closeFormPopup} className="clsPopup"><i className="fa fa-times"></i></a>
  <div className="formInner">
    <form id="services3" onSubmit = {formSubmitReport}  encType="multipart/form-data">
      <input
        name="api_key"
        id="api_key"
        type="hidden"
        value="d949f6d3c98adbb13c58a91793dc0b9d31e9ab39"
      />
      <input
        name="serviceName"
        id="serviceName"
        type="hidden"
        value="branding" />
    <div className="fields twoFields">
        <input type="text" id="name" name="name" placeholder="Name" required/>
        <input type="text" id="email" name="email" placeholder="Email" required/>
      </div>
      <div className="fields">
        <input type="text"  id="phone" name="phone" placeholder="Phone" required/>
      </div>
      <div className="fields">
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company" required
        />
      </div>
      <div className="fields">
        <button type = "submit" id = "submit" name = "submit" >Submit</button>
      </div>
    </form>

    <div className="messageBox">
      <a href="#" onClick = {closeFormPopup} className="closemsg"><i className="fa fa-times"></i></a>
      <i className="far fa-check-circle"></i>
      <h2>THANK YOU FOR CONTACTING US!</h2>
      <p>We will get in touch with you shortly</p>
    </div>
    <div className="msg"></div>
  </div>
</div>


 <button onClick = {formpopupBranding}>Get Free Audit Report for your Website</button> 



  <style>
   {`
  
  
  `}
  </style>  


        </React.Fragment>
    );

}

export default ReportForm;