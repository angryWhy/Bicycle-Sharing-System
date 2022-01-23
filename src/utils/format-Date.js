export const formateDate=(newDate)=>{
    return `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getHours()}-${newDate.getMinutes()}:${newDate.getSeconds()}`
}
export const pagination = (data,callback) =>{
    return{
        onChange:(page)=>{
            callback(page)
        },
        current:data.data.result.page,
        pageSize:data.data.result.page_size,
        total:data.data.result.total,
        showTotal:()=>{
            return`总条数${data.data.result.total}`
        },
        showQuickJumper:true
    }
   
}