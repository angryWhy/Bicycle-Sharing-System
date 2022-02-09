import React, { memo, useEffect } from 'react';
import echartsTheme from "../Theme"
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { Card } from 'antd';

export default memo(function Bar1() {
    
    useEffect(() => {
        echarts.use([GridComponent, BarChart, CanvasRenderer]);
        echarts.registerTheme("Theme", echartsTheme)
        var myChart = echarts.init(document.getElementById('main'),echartsTheme);
        myChart.setOption(getOption())
        var myChart2 = echarts.init(document.getElementById('main2'),echartsTheme);
        myChart2.setOption(getOption2())
    }, []);
    const getOption = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            
            tooltip : {
                trigger: 'axis'
            },
            xAxis: {
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },

            //数据源
            series: [
                {
                    name: 'OFO',
                    type: 'bar',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        2000,
                        1200,
                        800
                    ]
                }
            ]
        }
        return option;
    }
    const getOption2 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            legend:{data:["OFO","hello","摩拜"]},
            tooltip : {
                trigger: 'axis'
            },
            xAxis: {
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },

            //数据源
            series: [
                {
                    name: 'OFO',
                    type: 'bar',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        2000,
                        1200,
                        800
                    ]
                },
                {
                    name: 'hello',
                    type: 'bar',
                    data: [
                        2000,
                        200,
                        500,
                        3000,
                        2220,
                        1200,
                        1020
                    ]
                },
                {
                    name: '摩拜',
                    type: 'bar',
                    data: [
                        100,
                        200,
                        300,
                        400,
                        500,
                        600,
                        1020
                    ]
                }
            ]
        }
        return option;
    }
    return <div >
        <Card title="柱形图表（一）" >
           <div id='main' style={{width:"800px",height:"400px"}}></div>
        </Card>
        <Card title="柱形图表（二）" >
           <div id='main2' style={{width:"800px",height:"400px"}}></div>
        </Card>

    </div>;
});
