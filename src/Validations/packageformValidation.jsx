const yup = require('yup');

const Validation = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("required"),
    phone: yup.number().required("Required").min(9, "Minimum number").max(12, "Maximum number"),
    company: yup.string().required("Required"),
});
export default Validation;