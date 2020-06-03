import React, { FC } from 'react'
import { Formik, Form } from 'formik'
import GiveFormField from './GiveFormField'
import GiveFormSubmit from './GiveFormSubmit'

const GiveForm: FC = () => {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', isTall: false }}
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true)
                console.log(data)
                setSubmitting(false)
            }}
        >
            {() => (
                <Form>
                    <GiveFormField />
                    <GiveFormField />
                    <GiveFormField />
                    <GiveFormField />
                    <GiveFormSubmit />
                </Form>
            )}
        </Formik>
    )
}

export default GiveForm
