import React, { memo, useEffect } from 'react';
import echartsTheme from "../Theme"
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { Card } from 'antd';

export default memo(function Pie() {
    
    useEffect(() => {
        echarts.use([GridComponent, BarChart, CanvasRenderer]);
        echarts.registerTheme("Theme", echartsTheme)
        var myChart = echarts.init(document.getElementById('main'),echartsTheme);
        myChart.setOption(getOption())
        var myChart2 = echarts.init(document.getElementById('main2'),echartsTheme);
        myChart2.setOption(getOption2())
        var myChart3 = echarts.init(document.getElementById('main3'),echartsTheme);
        myChart3.setOption(getOption3())
    }, []);
    const getOption2 = () => {
        let option = {
            title: {
                text: '用户骑行订单',
                x:"center"
            },
            legend:{
                orient:"vertical",
                right:10,
                top:10,
                data: [
                '周一',
                '周二',
                '周三',
                '周四',
                '周五',
                '周六',
                '周日'
            ]},
            tooltip : {
                
                trigger: 'item',
                formatter:"{a}<br/>{b}:{c}({d}%)"
            },
            series: [
                {
                    //系列名
                    name: '订单量',
                    type: 'pie',
                    radius:["50%","70%"],
                    data: [
                        {
                            //值
                            value:200,
                            //数据名
                            name:"周一"
                        },
                        {
                            value:400,
                            name:"周二"
                        },
                        {
                            value:600,
                            name:"周三"
                        },
                        {
                            value:200,
                            name:"周四"
                        },
                        {
                            value:50,
                            name:"周五"
                        },
                        {
                            value:100,
                            name:"周六"
                        },
                        {
                            value:700,
                            name:"周日"
                        }
                    ]
                }
            ]
        }
        return option;
    }
    const getOption = () => {
        let option = {
            title: {
                text: '用户骑行订单',
                x:"center"
            },
            legend:{
                orient:"vertical",
                right:10,
                top:10,
                data: [
                '周一',
                '周二',
                '周三',
                '周四',
                '周五',
                '周六',
                '周日'
            ]},
            tooltip : {
                
                trigger: 'item',
                formatter:"{a}<br/>{b}:{c}({d}%)"
            },
            series: [
                {
                    //系列名
                    name: '订单量',
                    type: 'pie',
                    data: [
                        {
                            //值
                            value:200,
                            //数据名
                            name:"周一"
                        },
                        {
                            value:400,
                            name:"周二"
                        },
                        {
                            value:600,
                            name:"周三"
                        },
                        {
                            value:200,
                            name:"周四"
                        },
                        {
                            value:50,
                            name:"周五"
                        },
                        {
                            value:100,
                            name:"周六"
                        },
                        {
                            value:700,
                            name:"周日"
                        }
                    ]
                }
            ]
        }
        return option;
    }
    const getOption3 = () => {
        let option = {
            title: {
                text: '用户骑行订单',
                x:"center"
            },
            legend:{
                orient:"vertical",
                right:10,
                top:10,
                data: [
                '周一',
                '周二',
                '周三',
                '周四',
                '周五',
                '周六',
                '周日'
            ]},
            tooltip : {
                
                trigger: 'item',
                formatter:"{a}<br/>{b}:{c}({d}%)"
            },
            series: [
                {
                    //系列名
                    name: '订单量',
                    type: 'pie',
                    data: [
                        {
                            //值
                            value:200,
                            //数据名
                            name:"周一"
                        },
                        {
                            value:400,
                            name:"周二"
                        },
                        {
                            value:600,
                            name:"周三"
                        },
                        {
                            value:200,
                            name:"周四"
                        },
                        {
                            value:50,
                            name:"周五"
                        },
                        {
                            value:100,
                            name:"周六"
                        },
                        {
                            value:700,
                            name:"周日"
                        }
                    ].sort((a,b)=>{
                        return a.value-b.value;
                    }),
                    roseType:"radius"
                }
            ]
        }
        return option;
    }
    return <div >
        <Card title="饼图表（一）" >
           <div id='main' style={{width:"800px",height:"400px"}}></div>
        </Card>
        <Card title="环图表（二）" >
           <div id='main2' style={{width:"800px",height:"400px"}}></div>
        </Card>
        <Card title="环图表（三）" >
           <div id='main3' style={{width:"800px",height:"400px"}}></div>
        </Card>
    </div>;
});
