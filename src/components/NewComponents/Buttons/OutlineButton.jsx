import Button from '@material-ui/core/Button';

const OutlineButton = (props) => (
<React.Fragment>
<Button className = "outline-button" variant="contained">{props.title }</Button>

<style>
{`
.outline-button{
    font-family: Roboto, sans-serif;
    background-color: #fff;
    padding-top: 10px;
    padding-right: 35px;
    padding-left: 35px;
    padding-bottom: 10px;
    color: #4A91BD;
    border: solid 1px;
    font-weight: 500;
    text-transform: none;
    border-radius: 10px;
    z-index: 999;
}

`}</style>
</React.Fragment>
);

export default OutlineButton;
