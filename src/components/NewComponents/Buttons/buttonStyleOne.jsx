
const ButtonStyleOne = (props) => (
<React.Fragment> 
<button className = "button-style-one" variant="contained">{props.title }</button>

<style>
{`
.button-style-one{
    font-family: 'Roboto', sans-serif;
    background-color: #4A91BD;  
    padding-top: 15px;
    padding-right: 35px;
    padding-left: 35px;
    padding-bottom: 15px;
    color: #FFFFFF; 
    font-weight: 500;
    text-transform: none;
    border-radius: 10px;
    border: none;
}
.button-style-one:hover{
    background-color: #e0e0e0;
    color: #212121;

}

`}</style>
</React.Fragment>
);

export default ButtonStyleOne;