import { Container, Grid } from '@material-ui/core'
import WhiteWave from '../WhiteWave';
import ButtonStyleTwo from '../Buttons/buttonStyleTwo.jsx';
const VideoProductionBanner = (props) => (
    <React.Fragment>
        <div className="video-banner">
            <Container>
                <h1>{props.title}</h1>
                <Grid container>
                    <Grid item md={6}>
                        <h6>
                        {props.description} 
                        </h6>
                    </Grid>

                </Grid>


                <div className="mt-20" className="mt-3">
                {props.buttontext ? <a onClick={props.openForm}><ButtonStyleTwo title={props.buttontext} /></a> : ""}
                </div>
            </Container>
            <WhiteWave title={props.wavename} />

        </div>
        <style>
            {
                `
              .mt-20{
                margin-top: 20px;
              }

            .video-banner{
                display: flex;
                position: relative;
                flex-direction: column;
                justify-content: center;
                background-color: #eee;
                height: calc(100vh);
                background-image: url('images/web/video-production/video-dark-small.png');
                background-repeat: no-repeat;
                background-position: center;
                background-color: grey;
                background-size: cover;
                font-family: 'Roboto', sans-serif;
            }
            .video-banner h1{
                color: #fff;
                text-transform: uppercase;
                word-wrap: break-word;
                font-size: 4.8rem;
                font-weight: 600;
                line-height: .9;


            }
            .video-banner h6{
                color: #fff;
                font-size: 1.2rem;
                margin-top: 20px;
                line-height: 1.5;
                font-weight: 350;
            }



            @media screen and (max-width: 580px) {
                .video-banner h1{
                    color: #fff;
                    text-transform: uppercase;
                    text-align: center;
                    font-size: 2.2rem;
                    font-weight: 600;
                    line-height: .9;


                }
                .video-banner h6{
                    color: #fff;
                    text-align: center;
                    font-size: 1rem;
                    margin-top: 10px;
                    line-height: 1.5;
                }
              }


            `
            }
        </style>
    </React.Fragment>
);

export default VideoProductionBanner;
