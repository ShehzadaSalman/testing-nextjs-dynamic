import Image from 'next/image';
const ListItemFour = ({imgAddress, description}) => (
<React.Fragment>
<div className ="secondlist-div">

{/* <Image src={imgAddress} alt="list" height="35" width="35" layout="fixed"/> */}
<img src = {imgAddress} alt = "list" />
<p>{description}</p>



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
    margin-left: 11px;
    margin-right: 11px;
    width: 35px;
  }
  .secondlist-div p{
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 1.2rem;
    line-height: 1.7;
    white-space: pre-wrap;
    white-space: pre-line;
  }


  `}
</style>
</React.Fragment>
)
export default ListItemFour;
