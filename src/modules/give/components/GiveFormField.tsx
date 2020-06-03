import React, { FC } from 'react'
import { Field } from 'formik'
import { TextField } from '@material-ui/core'

const GiveFormField: FC = () => {
    return (
        <div>
            <Field
                placeholder="tithes and offering field"
                name="yolo"
                type="input"
                as={TextField}
            />
        </div>
    )
}

export default GiveFormField
