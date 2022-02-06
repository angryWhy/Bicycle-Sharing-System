import { Table } from 'antd';
import React, { memo } from 'react';

export default memo(function Etable(props) {
    const { dataSource, columns,selectedRowKeys } = props
     const rowCheckSelection = {
         type: "radio",
         selectedRowKeys,
         onChange: (selectedRowKeys, selectedRows) => {
            props.updateSelectItem(selectedRowKeys,selectedRows)
         }
     }
  
     const onRowClick = (record, index) => {
         let rowSelection = props.row_Selection
         if (rowSelection === "checkbox") {
            // props.updateSelectItemList(selectedRowKeys,selectedRows)
            let selectedRowKeys=props.selectedRowKeys
            let ids = props.ids
            

         } else {
           let selectedRowKeys = [index]
            let selectItem = record
             props.updateSelectItem(selectedRowKeys, selectItem)
             console.log(selectedRowKeys,selectItem);
         }
     }
    const initTable = () => {
        let row_Selection = props.row_Selection

        if (row_Selection === false || row_Selection === null) {
            row_Selection = false
        } else if (row_Selection === "checkbox") {
            rowCheckSelection.type = "checkbox"
        } else {
            row_Selection = "radio"
        }
        return <Table columns={columns}  dataSource={dataSource}  rowSelection={row_Selection? rowCheckSelection : null}  onRow={(record,index) => {
            return {
              onClick: event => {onRowClick(record,index)}
            };
          }}/>
    }
    return (<div>
        {initTable()}
    </div>);
});
