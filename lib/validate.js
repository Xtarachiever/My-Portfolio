export default function ValidateContactUs(values){
    const errors={};
    if(!values.email){
        errors.email = "Email is Required";
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.subject){
        errors.subject = "Subject is Required";
    }

    if(!values.message){
        errors.message = "Message is Required";
    }else if(values.message.trim().length < 10){
        errors.message = "Message length must be greater than 10";
    }

    return errors;
}