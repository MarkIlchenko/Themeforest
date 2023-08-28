import './Newsletter.scss'
import { useFormik } from 'formik';
import {Form, Input} from "antd";
import {MailOutlined} from "@ant-design/icons";
import Button from "../../../components/UI/Button/Button.tsx";
import {useEffect} from "react";
import {initializeAOS} from "../../../AOS/initializeAOS.tsx";

// @ts-ignore
const validate = values => {
    const errors = {};

    if (!values.email) {
        // @ts-ignore
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        // @ts-ignore
        errors.email = 'Invalid email address';
    }

    return errors;
};

const Newsletter = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const inputClass = (fieldName: string) => {
        // @ts-ignore
        if (formik.touched[fieldName] && formik.errors[fieldName]) {
            return 'errorNew';
        }
        // @ts-ignore
        if (formik.touched[fieldName] && !formik.errors[fieldName]) {
            return 'successNew';
        }
        return '';
    };

    useEffect(() => {
        initializeAOS();
    }, []);

    return (
        <section className={`mt-20 bg-[#185CFF] rounded-2xl py-16 px-12 flex justify-between text-white`}
                 data-aos="fade-up"
                 data-aos-anchor-placement="bottom-center"
        >
            <div className={`max-w-[540px]`}>
                <h2 className={`text-white`}>Subscribe to our newsletter</h2>
                <p className={`text-white mt-4`}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            </div>

            <form onSubmit={formik.handleSubmit} className={`w-[400px] my-4`}>
                <Form.Item className={`input-wrapper ${inputClass('email')}`}>
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
                <Button title="Send" style={`prime bg-[#C9DCEC] text-[#292D33] ${formik.isValid ? " " : "opacity-20"}`} />
            </form>
        </section>
    );
};

export default Newsletter;