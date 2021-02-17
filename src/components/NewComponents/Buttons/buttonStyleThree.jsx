
const ButtonStyleThree = (props) => (
<React.Fragment>
<button className = "button-style-three">{props.title }</button>

<style>
{`
.button-style-three{
    font-family: 'Roboto', sans-serif;
    background-color: #4A91BD; ;
    padding-top: 13px;
    padding-right: 45px;
    padding-left: 45px;
    padding-bottom: 13px;
    color: #fff;
    font-weight: 500;
    text-transform: none;
    border-radius: 10px;
    border: none;
}
.button-style-three:hover{
    background-color: #e0e0e0;
    color: #212121;
}

`}</style>
</React.Fragment>
);

export default ButtonStyleThree;
