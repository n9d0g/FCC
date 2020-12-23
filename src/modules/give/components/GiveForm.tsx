import React, { FC } from 'react'
import { Formik, Form } from 'formik'

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
                </Form>
            )}
        </Formik>
    )
}

export default GiveForm
