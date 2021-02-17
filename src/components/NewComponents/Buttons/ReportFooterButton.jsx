import Button from '@material-ui/core/Button';

const ReportFooterButton = (props) => (
<React.Fragment>
<Button type = "submit" variant = "outlined" size = "large" className = "report-button">
{props.name}
</Button>

  
  
  
  
  <style>
    {
        `
        .report-button{
            background-color: #081C31 !important;
            color: #fff;
            padding: 10px 20px;
            border-radius: 12px;
            font-size: 1.5rem !important;
            font-family: 'Open Sans', sans-serif;
            font-weight: 800 !important;
            left: 0 !important;
         
        }
        
        
        `
    }
</style>
</React.Fragment>

);

export default ReportFooterButton;