import React, {Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as yup from 'yup';

const fields = {
    sections: [[
        {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name*'},
        {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email*'},
        {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number*'},
    ],
    [
        {name: 'massage', elementName: 'textarea', type: 'text', placeholder: 'Type your massage*'}
    ]
    ]
};

class Contact extends Component {
    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm" name="sentMessage" noValidate="novalidate"
                        onSubmit={this.props.handleSubmit}>
                        <div className="row align-items-stretch mb-5">
                            {fields.sections.map((section, i) => {
                                return (
                                    <div key={i} className="col-md-6">
                                        {section.map((field, j) => {
                                            return <Field
                                                key={j}
                                                {...field}
                                                value={this.props.values[field.name]}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={this.props.touched[field.name]}
                                                errors={this.props.errors[field.name]} />
                                        })}

                                    </div>
                                )
                            })}


                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        massage: ''
    }),

    validationSchema: yup.object().shape({
        name: yup.string().min(2, 'Please enter your full name.').required('Your name is required.'),
        email: yup.string().email('email is not valid').required('Your email is required.'),
        phone: yup.string().matches(/^(05)[0-9]{8}/, 'please enter your phone in this format 05XXXXXXXX').required('Your phone number is required.'),
        massage: yup.string().min(10, 'Your massage must be with min 10 letters').required('Your massage is required.')
    }),

    handleSubmit: (values, {setSubmitting}) => {
        //  JSON.stringify(values) here we connect with the server
        alert('You\'ve submitted the form');
    }
})(Contact);