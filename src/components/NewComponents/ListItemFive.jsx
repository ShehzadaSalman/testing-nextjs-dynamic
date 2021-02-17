const ListItemFive = (props) => (
    <React.Fragment>
    <div className ="secondlist-div">
    
    <img src = {props.imgAddress} alt = "list" />
    { props.dark 
     ? <p className = "white-text">{props.description}</p> 
    :  <p>  {props.description}</p>    }

    
    
    
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
        height: 40px;
        width: 40px;
        margin-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
      }
      .secondlist-div p{
        display: inline-block;
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        line-height: 1.7;
        white-space: pre-wrap;
        white-space: pre-line;
      }
      .secondlist-div p.white-text{
        display: inline-block;
        font-family: 'Roboto', sans-serif;
        padding-left: 20px;
        font-size: 1.2rem;
        line-height: 1.7;
        color: #fff;
        white-space: pre-wrap;
        white-space: pre-line;
      }
    
    
      `}
    </style>
    </React.Fragment>
    )
    export default ListItemFive;
    