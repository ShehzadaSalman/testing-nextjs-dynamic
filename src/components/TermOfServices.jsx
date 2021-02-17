export default () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <h3>
              <cite>TERMS OF SERVICE</cite>
            </h3>
            <h6>Guaranteed Ranking and Traffic increase or WE WILL GIVE YOU up to 100% CASHBACK</h6>
            <span>
              All our services come with cash back guarantees, which showcases our confidence in
              what we do. However, if no results found check the mentioned - below terms under which
              the guarantees are implied
            </span>
            <span>* Good package will get 25% Cashback Guarantee</span>
            <span>* Very Good package will get 50% Cashback Guarantee</span>
            <span>* The Best package will get 100% Cashback Guarantee</span>
          </div>
        </div>
      </div>
      <div className="bottomofUse">
        <div className="container">
          <ul>
            <li>
              All the Guaranteed services must be conducted from the packages selected and continued
              within a minimum committed time period mentioned at the bottom of each package.{' '}
            </li>
            <li>
              At Techbay Solutions, we believe in delivering the results with guaranteed ROI that
              includes the detailed study of current marketing position and for that Techbay will
              require some business information in order to initiate and improve your current sales
              status.{' '}
            </li>
            <li>
              A Non Disclosure Agreement (NDA) will be signed between the both parties to maintain
              confidentiality of the information given by either of the parties.{' '}
            </li>
            <li>Last but not the least, believe in us, as we believe in you! </li>
          </ul>
        </div>
      </div>
      <style>
        {
          `
          .newtermofservices h3{
            color: #5C5D5E;
    
          }
          .newtermofservices{
    
          }
          .newtermofservices h3:before {
            background: #1D1A1A;  }
    
          .newtermofservices h3:after {
            background: #1D1A1A;  }
          .newtermofservices h6{
            color: #1D1A1A;
                font-size: 1.1rem;
          }
          .newtermofservices p{ padding-top: 30px;
             font-size: 14px; 
            font-family: 'Roboto', sans-serif;
             font-weight: 400;}
          .newbottomofUse{
    
                background: #efefef;
                padding: 40px 0px;
                text-align: left;
                }
    
          .newbottomofUse{
    
           }
          .newbottomofUse ul {
                padding: 0px;
           }
          .newbottomofUse ul li{
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
            font-size: 1.1rem;
            list-style: circle;
            margin-bottom: 19px;
            line-height: 22px;
            color: #4a4a4a;
          }
          `
        }
      </style>
    </React.Fragment>
  );
};
