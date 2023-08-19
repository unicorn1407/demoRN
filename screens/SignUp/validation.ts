
import * as Yup from 'yup';

const signupValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email is required').email('Invalid email'),
    over16: Yup.boolean().oneOf([true], 'You must be over 16 years old'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(18, 'Password must be at most 18 characters')
        
});

export default signupValidationSchema