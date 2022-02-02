import React, { memo } from "react"
import { Input, Select, Form, Checkbox, Button } from "antd"
import { getOptionList } from "../../utils/getOption";
const Option = Select.Option;

export default function BaseForm(props) {
  const { formList } = props
  const formItemList = []
  const initFormList = (formList) => {
    if (formList && formList.length > 0) {
      formList.forEach((item, index) => {
        let label = item.label
        let field = item.field
        let initValue = item.initValue || ""
        let placeholder = item.placeholder
        let width = item.width
        if (item.type === "INPUT") {
          const INPUT = <Form.Item label={label} key={field}>
            <Input type="text" placeholder={placeholder} />
          </Form.Item>
          formItemList.push(INPUT)
        }
        if (item.type === "SELECT") {
          const SELECT = <Form.Item label={label} key={field}>
            <Select placeholder={placeholder}>
              {
                getOptionList(item.list)
              }
            </Select>
          </Form.Item>
          formItemList.push(SELECT)
        }
        if (item.type === "CHECKBOX") {
          const CHECKBOX = <Form.Item label={label} key={field}>
            <Checkbox>
              {
                label
              }
            </Checkbox>
          </Form.Item>
          formItemList.push(CHECKBOX)
        }
      });
    }
    return formItemList
  }
  return ( <>
    <Form>
      <div>{initFormList(formList)}</div> 
      <Form.Item>
      <Button type='primary' className="111111">查询</Button>
      <Button type='primary' style={{ marginLeft: "20px" }}>重置</Button>
      </Form.Item>
    </Form>
    </>)
}