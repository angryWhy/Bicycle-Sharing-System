export const formateDate=(newDate)=>{
    return `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getHours()}-${newDate.getMinutes()}:${newDate.getSeconds()}`
}