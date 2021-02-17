
import {useRouter} from 'next/router';
export default (props) => {

  const router = useRouter();
  const {locale} = router;


  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 newtermofservices">
  {locale == 'ar' 
   ? <div dangerouslySetInnerHTML={{__html: props.content.description_arabic}}></div>
   : <div dangerouslySetInnerHTML={{__html: props.content.description}}></div>     
    }
          
          
          </div>
        </div>
      </div>
      <div className="newbottomofUse">
        <div className="container">
   {locale == 'ar' 
   ? <div dangerouslySetInnerHTML={{__html: props.content.short_arabic}}></div>
   : <div dangerouslySetInnerHTML={{__html: props.content.short_description}}></div>     
    }

        
        </div>
        <style>
          {`
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
            font-size: 1.2rem;
            font-weight: 600;
      }
      .newtermofservices p{ 
        padding-top: 30px;  
        font-size: 14px; 
        font-family: Roboto, sans-serif; 
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







            `}</style>
      </div>
    </React.Fragment>
  );
};
