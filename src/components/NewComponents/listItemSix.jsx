const ListItemSix = (props) => (
    <React.Fragment>
    <div className ="sixlist-div">
    
    <img src = {props.imgAddress}  alt = "list" />
   { props.dark ?  <p className = "text-white">{props.description}</p> :  <p>{props.description}</p> } 
   

    
    </div>
    
    <style jsx>
    {`
      .sixlist-div{
        margin-top: 10px;
        margin-bottom: 20px;
        display: flex;
      }
      .sixlist-div img{
        display: inline-block;
        height: 35px;
        width: 35px;
      }
      .sixlist-div p{
        display: inline-block;
        font-family: 'Roboto', sans-serif;
        padding-left: 15px;
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
    export default ListItemSix;
    