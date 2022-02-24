import React from 'react'
import BaseInput from './BaseInput'
import SelectWidget from './SelectWidget'
import FieldTemplate from './FieldTemplate'
import Textarea from './Textarea'
import Date from './Date'
import File from './File'
import MForm from "react-jsonschema-form";
import { Button } from 'antd'
import './style.css'

const Form = (props: any) => {
  const { onSubmit, uiSchema = {}, schema, liveValidate = true } = props

  console.log("Form in Form", props.uiSchema)

  const widgets = {
    BaseInput,
    SelectWidget,
    Textarea,
    Date,
    File
  }

  return (
      <MForm
        schema={schema}
        uiSchema={uiSchema}
        widgets={widgets}
        liveValidate={liveValidate}
        showErrorList={false}
        onSubmit={onSubmit}
        FieldTemplate={FieldTemplate}
      >
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </MForm>

  )
}

export default Form
