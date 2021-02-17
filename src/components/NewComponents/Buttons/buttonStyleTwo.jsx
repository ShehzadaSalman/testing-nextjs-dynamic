
const ButtonStyleTwo = (props) => (
<React.Fragment>
<button className = { props.dark ? 'button-style-two-dark': 'button-style-two'} variant="contained">{props.title }</button>

<style>
{`
.button-style-two{
    font-family: Roboto, sans-serif;
    background-color: #fff;
    padding-top: 13px;
    padding-right: 35px;
    padding-left: 35px;
    padding-bottom: 13px;
    color: #212121;
    font-weight: 500;
    text-transform: none;
    border-radius: 10px;
    z-index: 998;
    border: none;
}

.button-style-two-dark{
    font-family: Roboto, sans-serif;
    background-color: #212121;
    padding-top: 13px;
    padding-right: 35px;
    padding-left: 35px;
    padding-bottom: 13px;
    color: #fff;
    font-weight: 500;
    border: none;
    text-transform: none;
    border-radius: 10px;
    z-index: 998;
}
.button-style-two:hover{
    background-color: #e0e0e0;
}

.button-style-two-dark:hover{
    background-color: #e0e0e0;
    color: #212121;

}




`}</style>
</React.Fragment>
);

export default ButtonStyleTwo;
