import React, { useState } from 'react'
import { Upload, Form, Button, message } from 'antd';

const File = (props: any) => {
  const { id, required, schema, value, rawErrors, onChange } = props
  // console.log("schema in BaseInput", schema)
  // console.log("UIschema in BaseInput", uiSchema)

  // console.log("props in BaseInput", props)

  // const [imageUrl, setImageUrl] = useState('')

  const checkFile = {
    beforeUpload: (file: { type: string; name: any; }) => {
      console.log("file in checkFile", file)
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/jpeg';
      if (!isJPG) {
        message.error(`${file.name} is not a image file`);
      }
      return isJPG;
    }
  };

  const getBase64 = (img: any, callback: any) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  const customRequest = (info:any) => {
    getBase64(info.file, (imageUrl: any) => {
      // setImageUrl(imageUrl)
      console.log(imageUrl)
      onChange(imageUrl)
    });
  }

  return (
    <Form.Item
      id={id}
      required={required}
      label={schema.title}
      name={schema.title}
      valuePropName="fileList"
      getValueFromEvent={(e: any) => {
        e?.fileList?.map((file: any) => console.log("file thumUrl", file))
      }}
    >
      <Upload
        accept="image/*"
        {...checkFile}
        customRequest={customRequest}
        listType="picture"
        beforeUpload={(file) => {
          const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
          if (!isJPG) {
            message.error('You can only upload JPG or PNG file!');
            return false;
          } else {
            return true;
          }
        }}
      // {...checkFile}
      // onChange={(e) => { console.log("image base:", e?.fileList?.map((file: any) => file.thumbUrl)) }}
      // onChange={(e) => { onChange(e?.fileList?.map((file: any) => file.thumbUrl)) }}
      >
        <Button>Click to upload</Button>
      </Upload>
    </Form.Item>

  )
}

export default File