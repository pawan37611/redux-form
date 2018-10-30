import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'



class ContactForm extends Component {

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    renderField(field) {
        const {meta:{ error, touched} } = field;
        const className = `form-group ${touched && error ? "has-danger" : ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className='text-help'>
                    {touched ? error : ''}
                </div>
            </div>)
    }

    onSubmit(values) {
        console.log("Form Values", values)
    }

    render() {
        let { handleSubmit } = this.props
        return (<form onSubmit={handleSubmit(this.onSubmit)}>
            <div>
                <Field label="Title" name="title" component={this.renderField} />
                <Field label="Tags" name="tags" component={this.renderField} />
            </div>
            <button type="submit" className="btn btn-primary">submit</button>
        </form>)
    }
}

function validate(values) {
    let errors = {}

    if (!values.title)
        errors.title = "Enter a Title"

    if (!values.tags)
        errors.tags = "Enter a Tag"

    return errors;
}

ContactForm = reduxForm({
    validate,
    form: 'contact'
})(ContactForm)

export default ContactForm