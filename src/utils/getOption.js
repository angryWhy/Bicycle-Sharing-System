import { Select} from "antd"
const { Option } = Select;
export const getOptionList = (data) =>{
    if(!data){
        return []
    }
    let options = []
    data.map((item,index)=>{
        options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
    })
    return options
}  