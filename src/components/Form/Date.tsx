import React from 'react'
import { Form, DatePicker } from 'antd';

const Date = (props: any) => {
  const { id, required, schema, value, rawErrors, onChange } = props
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
      <DatePicker
        value={value || ''}
        format="DD/MM/YYYY"
        onChange={(e) => onChange(e?.calendar('DD/MM/YYYY'))}
      />
    </Form.Item>

  )
}

export default Date