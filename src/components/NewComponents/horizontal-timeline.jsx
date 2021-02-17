const HorizontalTimeline = (props) => (
  <React.Fragment>
<div className = "time-line-parent">
  <div className = "timeline-container-div">
  <img src = {props.imgAddress} className = "img-fluid" alt = "time-line"/>

  </div>
  <div className ="blue-bold-line"></div>
  <p className = "paragraph">{props.title} </p>



</div>


<style jsx>
{`
  .time-line-parent{
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .time-line-parent p{
    font-weight: 500;
  }
.timeline-container-div{
  height: 180px;
  width: 180px;
  border: dashed 1px #4A91BD;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  border-radius: 50%;
  text-align: center;
  background-color:#F6F6F6;
}
.blue-bold-line{ height: 7px; background-color: #4A91BD; margin-top: 50px; width: 150px; border-radius: 5px;}
`}
</style>
  </React.Fragment>
);

export default HorizontalTimeline;
