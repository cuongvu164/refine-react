import React from 'react'
import { Form, Input } from 'antd';

const Textarea = (props: any) => {
  const { id, required, schema, value, rawErrors, onChange } = props

  const { TextArea } = Input;
  // console.log("schema in BaseInput", schema)
  // console.log("UIschema in BaseInput", uiSchema)

  // console.log("props in BaseInput", props)

  return (
    <Form.Item
      id={id}
      required={required}
      label={schema.title}
      name={schema.title}
    >
      <TextArea
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Item>

  )
}

export default Textarea