import React from 'react'
import { Form, Select } from 'antd'

const SelectWidget = (props: any) => {
  const { id, required, schema, value, options, errors, onChange } = props

  // console.log("options in selectwidget", options)

  return (
    <Form.Item
      id={id}
      label={schema.title}
    >
      <Select onChange={(e: any) => onChange(e)}>
        {
          options.enumOptions.map((option: any, index: number) => {
            return <Select.Option
              value={option.value}
              key={index}
            >
              {option.label}
            </Select.Option>
          })
        }
      </Select>
    </Form.Item>

  )
}

export default SelectWidget