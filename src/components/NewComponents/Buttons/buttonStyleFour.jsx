import Button from '@material-ui/core/Button';

const ButtonStyleFour = (props) => (
<React.Fragment>
<Button className = "button-style-four" variant="contained">{props.title }</Button>
<style>
{`
.button-style-four{
    font-family: Roboto, sans-serif;
    background-color: transparent;
    padding-top: 8px;
    border: solid 1px #fff;
    padding-left: 27px;
    padding-right: 27px;
    padding-bottom: 8px;
    color: #fff;
    font-weight: 500;
    text-transform: none;
    border-radius: 10px;
    z-index: 995;
}

`}</style>
</React.Fragment>
);

export default ButtonStyleFour;
