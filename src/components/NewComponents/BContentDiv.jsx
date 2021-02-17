const BgContentDiv = (props) => (
    <React.Fragment>
        <div className="main-container">
            <div className = "container-fluid">
                {props.children}
            </div>
        </div>

        <style jsx>
            {
                `.main-container{
        min-height: 200px;
        padding-top: 30px;
        padding-bottom: 30px;
        background-image: url('${props.bg}');
        background-color: grey;
        background-repeat: no-repeat;
        background-position: center; 
        background-size: cover; 
        text-align: left;
        white-space: pre-wrap;
    }   
    `}
        </style>
    </React.Fragment>
);
export default BgContentDiv;