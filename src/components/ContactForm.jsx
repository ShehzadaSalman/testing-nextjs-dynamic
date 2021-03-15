import { Component } from 'react';
import ButtonStyleOne from './NewComponents/Buttons/buttonStyleOne';
import ButtonStyleThree from './NewComponents/Buttons/buttonStyleThree';
import Link from 'next/link';
import PhoneCountryCode from './NewComponents/PhoneCountryCode';
import { useRouter } from 'next/router';
import $ from 'jquery'

export const ContactForm = (props) => {
  const routers = useRouter()
  const {locale} = routers;
  return <ContactFormClass {...props} language = {locale} />
}

export default ContactForm;


export  class ContactFormClass extends Component {
  constructor() {
    super();
    this.phoneCountryCode = React.createRef();
    this.state = {
      name: '',
      api_key: 'd949f6d3c98adbb13c58a91793dc0b9d31e9ab39',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      description: '',
    };
  }
  componentDidMount() {

    if (!document.getElementById('idle-pigeon').hasChildNodes()) {
      this.props.loadModel(this.props.idlePigeon);
    }
  }





  


  handleChange = (e) => {
    e.preventDefault();
    let id = e.target.id;
    let val = e.target.value;
    this.setState({
      [id]: val,
    });
  };
  handleUpload = (e) => {
    e.preventDefault();
  };
  handleSubmit = (e) => {
    e.preventDefault();


    let checkform = $("#contact-form-container .iti__selected-dial-code").html();
    console.log(checkform);
    $("#contact-form-container #countryCode").val(checkform);
    let isValid = this.validateForm();
    if (isValid) {
      $('#loader').removeClass('d-none');
      let checkconsole = $('#form')[0];
      $.ajax({
        type: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: 'https://staging.techbay.co/api/contact-us',
        data: $('#form').serialize(),
        success: function (response) {
          console.log(response);
          checkconsole.reset();
        },
      });
      $('#loader').addClass('d-none');
      this.props.handleTabChange(3);
      this.clearForm();
    }
  };

  clearForm = () => {
    this.setState({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      description: '',
    });
  };
  validateForm = () => {
    var form = document.getElementsByClassName('needs-validation')[0];
    let isValid = true;
    if (form.checkValidity() === false) {
      isValid = false;
      form.classList.add('was-validated');
    }
    return isValid;
  };
  render() {
    return (
      <React.Fragment>
        <div className="pigon-model" id="idle-pigeon"></div>
        {this.props.activeTab === 2 ? (
          <div      className=" mg-slide-info text-left contact-us-content flex-fill get-in-touch-form-wrapper m-auto">
            <h1 className="mg-title-medium" className="mt-5 mt-sm-0 text-uppercase text-direction" >
              {this.props.language === 'ar' ? this.props.data?.title_arabic : this.props.data?.title}
              </h1>
            <div id="contact-form-container" className="floating-form">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="form"
                className="needs-validation mainContactForm mb-0 "
                encType="multipart/form-data"
                noValidate              >
                <input id="countryCode" type="hidden" name="countrycode" />
                <div className="row box-direction">
                  <div className="col-sm-6 ">
                    <div className="form-group box-direction">
                      <input
                        autoComplete="off"
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e)}
                        placeholder=
                        {this.props.language === 'ar' ? 'الاسم' : 'Your Name'} 
                        required
                      />
                      <label htmlFor="name" className="text-direction">
                         {this.props.language === 'ar' ? 'الاسم' : 'NAME'} 
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={(e) => this.handleChange(e)}
                        placeholder=
                        {this.props.language === 'ar' ? 'البريد الإلكتروني' : 'Email'} 
                        required
                      />
                      <label htmlFor="email" className="text-direction">
                      {this.props.language === 'ar' ? 'البريد الإلكتروني' : 'Email'} 
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6" id="contact-form-column-phone">
                    <div className="form-group">
                      <PhoneCountryCode />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="service"
                        name="service"
                        value={this.state.service}
                        className="form-control"
                        onChange={(e) => this.handleChange(e)}
                        placeholder=
                        {this.props.language === 'ar' ? 'الخدمات التي تبحث عنها' : 'Services you are looking for?'} 
                        required
                      />
                      <label htmlFor="service" className="text-direction">
                      {this.props.language === 'ar' ? 'الخدمات التي تبحث عنها' : 'Services you are looking for?'} 
                        </label>
                    </div>
                  </div>
                </div>


                <div className="row">
                  <input type="hidden" value={this.state.api_key} id="api_key" name="api_key" />
                </div>
                <div className="form-footer text-right mt-5 text-direction">
                  <a type="submit"
                    name="submit"
                    id="submit"
                    value="submit"
                    className="btn mg-link-btn p-0"
                    onClick={(e) => this.handleSubmit(e)}>
                       
                    {this.props?.data?.btn_txt_arabic ?  
                    <ButtonStyleOne title=
                    {this.props.language === 'ar' ? this.props.data?.btn_txt_arabic : this.props.data?.btn_txt}
                   />
                    : <ButtonStyleOne title=
                    {this.props.language === 'ar' ? 'ارسل طلب' : 'Send Request'}
                   />
                    }  
                
                  </a>
                </div>
              </form>

            </div>
           </div>
          ) : this.props.activeTab === 3 ? (
          <div className="container p-3 move-to-front ">
            <div className="thankyou-wrapper m-auto text-center d-flex flex-column" >
              <img src="/images/thankyou.png" className="img-fluid m-auto" alt="Thank You" />

              <div className="d-block mt-5">
                <Link href="/">
                  <a>
                    <ButtonStyleThree title=
                     {this.props.language === 'ar' ? 'اذهب الى المنزل' : 'Go To Home'}
                     />
                  </a>
                </Link>

              </div>

            </div>
          </div>
        ) : (
              ''
            )}
        <style>
          {`
    form#form{
      margin: 0px;
    }
    .form-control.is-invalid, .was-validated .form-control:invalid{
      background-position: ${this.props.language === 'ar' ? 'left' : 'right'}
    }
   #form .text-direction{text-align: ${this.props.language === 'ar' ? 'right' : 'left'}}
   #form .box-direction{direction: ${this.props.language === 'ar' ? 'rtl' : 'ltr'}}
   .form-control.is-invalid, .was-validated .form-control:invalid{
    
   }
    .ContactMenu #phone{
      font-size: 13px;
        font-weight: bold;
        display: block;
        width: 100%;
        -webkit-appearance: none;
        border-radius: 0;
        padding: 0;
        cursor: text;
        background: 0 0;
        outline: 0!important;
        -webkit-box-shadow: none!important;
        box-shadow: none!important;
        padding: 20px 0 10px;
        height: 50px;
        font-family: 'Nunito',sans-serif;
        font-size: 14px;
       }




.move-to-front{
  position: relative;
  z-index: 99999;
}



.ContactMenu .form-group{
  display: flex;
  height: 75px;
}
.ContactMenu #phone::placeholder {
  opacity: 0.5;
}
.ContactMenu .form-control{
  padding: 4px 0 10px;
}
.ContactMenu .form-control-phone{
  font-size: 13px;
    font-weight: 500;
    border: 0;
    display: block;
    width: 100%;
    border-bottom: 1px solid #ccc;
    -webkit-appearance: none;
    border-radius: 0;
    padding: 0;
    cursor: text;
    background: 0 0;
    outline: 0!important;
    -webkit-box-shadow: none!important;
    box-shadow: none!important;
    padding: 20px 0 10px;
    height: 50px;
}
.ContactMenu .iti--separate-dial-code .iti__selected-flag{
  bottom: -14px;
}
.ContactMenu .iti--separate-dial-code .iti__selected-dial-code{ font-size: 12px;}

.ContactMenu .iti--allow-dropdown .iti__flag-container, .ContactMenu .iti--separate-dial-code .iti__flag-container{ height: 32px; }        

@media only screen and (max-width: 600px) {
  .slider-pagination-content.d-flex.flex-fill.align-items-center.justify-content-between.h-100{
    display: none !important;
  }   
  .ContactMenu .form-group{

    display: flex;
    height: 50px;
  
  }
  .slider-pagination.d-inline-block.m-auto.desktop-view-arrow{
    display: none !important;
  }
   #submit .button-style-one{
    padding-left: 25px;
    padding-right: 25px; 
  }
  
.ContactMenu h1.mg-title-medium {
font-size: 23px !important;
}
 form#form{
   
margin-top: 0px;
  }
  .mg-slide-info.text-left.contact-us-content.flex-fill.get-in-touch-form-wrapper.m-auto{
    margin-left: 25px !important;
    margin-right: 25px !important;
  }   
 
}
@media only screen and (max-width: 390px){
  #submit .button-style-one{
    padding-left: 25px;
    padding-right: 25px; 
  }
}



        `}



        </style>
        <style jsx>
          {`       
          input#phone::placeholder {
            opacity: 1;
          }
         `}
        </style>
      </React.Fragment>
    );
  }
}
