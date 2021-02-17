const ListItemTwo = (props) => (
<React.Fragment>
<div className ="secondlist-div">

<img src = "/images/web/contentcreation/circular-tick.png" alt = "list" />
<p>
<strong>{props.title} </strong>
 - {props.description}
</p>



</div>

<style jsx>
{`
  .secondlist-div{
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .secondlist-div img{
    display: inline-block;
    height: 35px;
    width: 35px;
  }
  .secondlist-div p{
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    padding-left: 20px;
    color: #212121;
    font-size: 1.2rem;
    line-height: 1.7;
    white-space: pre-wrap;
    white-space: pre-line;
  }


  `}
</style>
</React.Fragment>
)
export default ListItemTwo;
