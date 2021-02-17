const LandingThumbnail = (props) => {

 return (

                         <React.Fragment>
                          <div className="container-features-thumbnail text-center">
                              <div>
                              <img src = {props.img} alt = "thumbnail" loading="lazy" />
                           <h5>{props.title}</h5>
                           <p>
                           {props.description}
                            </p>  
                              </div>
                   
                            {/* <ButtonStyleOne title = "Read More" /> */}
                            <a onClick = {props.scrolling}>
                            <button className = "features-button">
                              {props.btn_txt}
                            </button>
                            </a>
                            
</div>
                          <style>
                              {

                                  `.container-features-thumbnail{
                                    background-color: #fff;
                                    padding:  20px 10px 20px 10px;
                                    border-radius: 8px;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: space-between;
                                    box-shadow: 0px 7px 30px rgba(170, 170, 170, 0.16);
                                    margin-bottom: 30px;
                                    overflow: hidden;


                                  }
                                  .container-features-thumbnail h5{
                                      text-transform: uppercase;
                                      margin-bottom: 10px;
                                      
                                }
                                .container-features-thumbnail p{
                                      color: #202324;
                                      line-height: 1.5;
                                      font-size: 1.1rem;
                                }
                                .container-features-thumbnail img{
                                    margin-bottom: 20px;
                                    margin-top: 20px;
                                    display: inline-block;
                                }
                                .container-features-thumbnail .features-button{
                                      margin-left: 0px;
                                      padding: 10px 40px;
                                      background-color: #3E8DBE;
                                      color: #fff;
                                      border: none;
                                      font-size: 1.1rem !important;
                                      border-radius: 10px;
                                      margin-bottom: 10px;
                                }
                                .containe-features-thumbnail .features-button:hover{
                                    background-color: #eee;
                                }
                                  
                                  
                                  
                                  `
                              }
                          </style>
    </React.Fragment>
 );


}
export default LandingThumbnail;