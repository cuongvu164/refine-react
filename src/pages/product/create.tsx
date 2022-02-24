import { IResourceComponentsProps } from "@pankod/refine-core";
import {
  Create,
  Form as AntdForm,
  Input,
  useForm,
  Button
} from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";
import { IProducts } from "interfaces";
// import Form from "@rjsf/core";
import Form from '../../components/Form/Form';
import { JSONSchema7 } from "json-schema";

export const ProductCreate: React.FC<IResourceComponentsProps> = () => {
  // const { formProps, saveButtonProps } = useForm<IProducts>();
  // console.log("formProps", formProps);
  // console.log("saveButtonProps", saveButtonProps);

  const schema = {
    title: "Create Product",
    type: "object",
    required: [
      "sku",
    ],
    properties: {
      sku: {
        type: "string",
        title: "SKU",
      },
      name: {
        type: "string",
        title: "Name",
        suffix: "DONE"
      },
      price: {
        type: "number",
        title: "Price",
        minimum: 0,
        prefix: "$"
      },
      date: {
        type: "string",
        title: "Create At"
      },
      gender: {
        type: "string",
        title: "Gender",
        anyOf: [
          {
            type: "string",
            title: "Male",
            enum: ["Male"]
          },
          {
            type: "string",
            title: "Female",
            enum: ["Female"]
          }
        ]
      },
      bio: {
        type: "string",
        title: "Bio"
      },
      upload: {
        title: "Upload",
        type: "string",
        format: "data-url"
      }
    }
  }

  const uiSchema = {
    sku: {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:autocomplete": "family-name"
    },
    name: {
      "ui:emptyValue": "",
      "ui:autocomplete": "given-name"
    },
    price: {
      "ui:widget": "updown",
      // "ui:title": "Age of person",
      // "ui:description": "(earthian year)"
    },
    bio: {
      "ui:widget": "Textarea"
    },
    password: {
      "ui:widget": "password",
      "ui:help": "Hint: Make it strong!"
    },
    date: {
      "ui:widget": "Date"
    },
    upload: {
      "ui:widget": "File",
      "ui:options": { accept: ".jpg" }
    }
  }

  const onSubmit = (e: any) => {
    const newFormData = e.formData
    let data
    console.log("newFormData", e)
    let dataFunction = {
      form: newFormData.form,
      initialValues: newFormData.initialValues,
      onFinish: newFormData.onFinish,
      onKeyUp: newFormData.onKeyUp,
      onValuesChange: newFormData.onValuesChange,
      ...data
    } = newFormData;

    console.log("formData", data);
  }

  return (
    <>
      <Create
        // saveButtonProps={saveButtonProps}
        actionButtons={false}>
        {/* <AntdForm {...formProps} layout="vertical">
          <AntdForm.Item
            label="Sku"
            name="sku"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </AntdForm.Item>
          <AntdForm.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </AntdForm.Item>
          <AntdForm.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </AntdForm.Item>
        </AntdForm> */}
        {/* <AntdForm> */}

          <Form
            schema={schema}
            uiSchema={uiSchema}
            onSubmit={(e: any) => onSubmit(e)}
          />
        {/* </AntdForm> */}

      </Create>


    </>
  );
};
