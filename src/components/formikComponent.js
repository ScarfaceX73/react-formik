import { useFormik } from 'formik';
import React, { useState } from 'react';



const FormikComponent = () => {

    const [array, setArray] = useState([]);

    const onSubmit = (values) => {
        setArray([...array, { ...values }]);
        console.log(array);
    }

    const validate = (values) => {
        let errors = {};
        if (values.firstName === '') errors.firstName = 'FirstName is Required';
        if (values.lastName === '') errors.lastName = 'LastName is Required';
        if (values.email === '') errors.email = 'Email is Required';
        if (values.gender === '') errors.gender = 'Gender is Required';
        if (values.courses === '') errors.courses = 'Courses is Required';
        return errors;
    }


    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            courses: "",
        },
        onSubmit,
        validate
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>
                        First Name: <span style={{ color: 'red' }}>*</span> &nbsp;
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <br />
                    <span style={{ color: 'red' }}>
                        {formik.errors.firstName && formik.touched.firstName ? <div>{formik?.errors?.firstName}</div> : null}
                    </span>
                </div>
                <br />
                <div>
                    <label>
                        Last Name: <span style={{ color: 'red' }}>*</span> &nbsp;
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <br />
                    <span style={{ color: 'red' }}>
                        {formik.errors.lastName && formik.touched.lastName ? <div>{formik?.errors?.lastName}</div> : null}
                    </span>
                </div>
                <br />
                <div>
                    <label>
                        Email: <span style={{ color: 'red' }}>*</span> &nbsp;
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <br />
                    <span style={{ color: 'red' }}>
                        {formik.errors.email && formik.touched.email ? <div>{formik?.errors?.email}</div> : null}
                    </span>
                </div>
                <br />
                <div>
                    <label>
                        Gender <span style={{ color: 'red' }}>*</span> &nbsp;
                    </label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    Male &nbsp;
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    Female
                    <br />
                    <span style={{ color: 'red' }}>
                        {formik?.errors?.gender && formik.touched.gender ? <div>{formik?.errors?.gender}</div> : null}
                    </span>
                </div>
                <br />
                <div>
                    <label>
                        Courses <span style={{ color: 'red' }}>*</span> &nbsp;
                    </label>
                    <select
                        name="courses"
                        value={formik.values.courses}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value=""> -- Select -- </option>
                        <option value="React"> React </option>
                        <option value="Angular"> Angular </option>
                        <option value="Node"> Node </option>
                    </select>
                </div>
                <span style={{ color: 'red' }}>
                    {formik.errors.courses && formik.touched.courses ? <div>{formik?.errors?.courses}</div> : null}
                </span>
                <br />
                <br />
                <button type="submit"> Submit </button> &nbsp; &nbsp;
            </form>
        </div>
    )
}

export default FormikComponent;