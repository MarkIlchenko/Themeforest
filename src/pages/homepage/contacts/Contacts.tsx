import { useFormik } from 'formik';
import './Contacts.scss';

import { Form, Input } from 'antd';
import { UserOutlined, UsergroupAddOutlined, MailOutlined } from '@ant-design/icons';
import Button from "../../../components/UI/Button/Button.tsx";
import {companyContacts} from "../../../../data/data.tsx";
import {useEffect} from "react";
import {initializeAOS} from "../../../AOS/initializeAOS.tsx";

// @ts-ignore
const validate = values => {
    const errors = {};

    if (!values.firstName) {
        // @ts-ignore
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        // @ts-ignore
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        // @ts-ignore
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        // @ts-ignore
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        // @ts-ignore
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        // @ts-ignore
        errors.email = 'Invalid email address';
    }

    if (!values.message) {
        // @ts-ignore
        errors.message = 'Required';
    } else if (values.message.length < 1) {
        // @ts-ignore
        errors.message = 'Must be 1 character or more';
    }

    return errors;
};

const Contacts = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const inputClass = (fieldName: string) => {
        // @ts-ignore
        if (formik.touched[fieldName] && formik.errors[fieldName]) {
            return 'error';
        }
        // @ts-ignore
        if (formik.touched[fieldName] && !formik.errors[fieldName]) {
            return 'success';
        }
        return '';
    };

    useEffect(() => {
        initializeAOS();
    }, []);

    return (
        <section
            className={
                `bg-[#F1F6FA] rounded-2xl mt-20 py-16 px-12 flex justify-between`
            }
        >
            <div className="max-w-[540px] flex flex-col justify-between"
                 data-aos="fade-right"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine"
            >
                <h2>Left questions? Contacts us now for a free consultation and free trial!</h2>
                <p className="mt-6">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
                </p>
                <div className="mt-auto">
                    {companyContacts.map((item, index) => (
                        <div key={item.name} className={`h-fit ${index === 0 ? 'mt-0' : 'mt-6'}`}>
                            <p className="text-sm">{item.name}</p>
                            <p className="text-[#292D33] font-semibold">{item.contact}</p>
                        </div>
                    ))}
                </div>
            </div>
            <form onSubmit={formik.handleSubmit}
                  className={
                    `flex input-wrapper-new bg-white h flex-col p-12 max-w-[450px] rounded-2xl`
                  }
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="500"
            >
                <h2 className={`mb-6`}>Contact Us</h2>
                <Form.Item
                    label="First Name"
                    className={`input-wrapper w-full ${inputClass('firstName')}`}
                >
                    <Input
                        id="firstName"
                        placeholder='Enter your name...'
                        size="large"
                        name="firstName"
                        addonAfter={<UserOutlined className={inputClass('firstName')} />}
                        type="text"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="error-text">{formik.errors.firstName}</div>
                    ) : null}
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    className={`input-wrapper ${inputClass('lastName')}`}
                >
                    <Input
                        id="lastName"
                        placeholder='Enter your surname...'
                        size="large"
                        name="lastName"
                        addonAfter={<UsergroupAddOutlined className={inputClass('lastName')} />}
                        type="text"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="error-text">{formik.errors.lastName}</div>
                    ) : null}
                </Form.Item>

                <Form.Item label="Email Address" className={`input-wrapper ${inputClass('email')}`}>
                    <Input
                        id="email"
                        placeholder='Enter your email...'
                        size="large"
                        name="email"
                        addonAfter={<MailOutlined className={inputClass('email')} />}
                        type="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error-text">{formik.errors.email}</div>
                    ) : null}
                </Form.Item>

                <Form.Item className={`input-wrapper ${inputClass('message')}`}>
                    <Input.TextArea
                        id="message"
                        allowClear
                        placeholder={'Enter message'}
                        name="message"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.message}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <div className="error-text">{formik.errors.message}</div>
                    ) : null}
                </Form.Item>

                <Form.Item>
                    <Button title="Send" style={`prime ${formik.isValid ? "prime w-full" : "opacity-20 w-full"}`} />
                </Form.Item>
            </form>
        </section>
    );
};

export default Contacts;
