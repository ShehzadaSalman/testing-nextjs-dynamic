const ListItem = (props) => (
<React.Fragment>
<li className = "list-item-styling">{props.title}</li>
<style>
{`
li.list-item-styling{
    color: #fff;
    font-family: 'Roboto', sans-serif;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1.1rem;

}


`}
</style>
</React.Fragment>
);
export default ListItem;
