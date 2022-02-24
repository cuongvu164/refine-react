import React from 'react'
import { Form, Input } from 'antd';

const BaseInput = (props: any) => {
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
      <Input
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        prefix={schema.prefix ? <span>{schema.prefix}</span> : null}
        suffix={schema.suffix ? <span>{schema.suffix}</span> : null}
      />
    </Form.Item>

  )
}

export default BaseInput