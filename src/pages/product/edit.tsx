import { useForm, useSelect, Edit, Form, Input, Select } from "@pankod/refine-antd";
import { IProducts } from "../../interfaces";

export const ProductEdit: React.FC = () => {
    const { formProps, saveButtonProps, queryResult } = useForm<IProducts>({});

    // const { selectProps: categorySelectProps } = useSelect<IPost>({
    //     resource: "categories",
    //     defaultValue: queryResult?.data?.data?.category.id,
    // });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>

                <Form.Item label="Price" name="price">
                    <Input />
                </Form.Item>
                
                
            </Form>
        </Edit>
    );
};
