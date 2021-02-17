const ListItemThree = (props) => (
<React.Fragment>
<div className ="thirdlist-div">

<img src = {props.imgAddress}  alt = "list" />
<p>
<strong>{props.title} </strong>
 {props.description}


</p>



</div>

<style jsx>
{`
  .thirdlist-div{
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    margin-top: 20px;
    /* margin-bottom: 20px; */
    /* align-content: center; */
    align-items: center;
    flex-direction: row;
    /* justify-content: center; */
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;




  }
  .thirdlist-div img{
    display: inline-block;
    margin-right: 8px;
    margin-left: 8px;
  }
  .thirdlist-div p{
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    padding-left: 15px;
    color: #fff;
    font-size: 1.2rem;
    line-height: 1.7;
    white-space: pre-wrap;
    white-space: pre-line;
    margin-bottom: 0;
  }


  `}
</style>
</React.Fragment>
)
export default ListItemThree;
