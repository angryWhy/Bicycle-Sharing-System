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
        var myChart = echarts.init(document.getElementById('main'), echartsTheme);
        myChart.setOption(getOption())
        var myChart2 = echarts.init(document.getElementById('main2'), echartsTheme);
        myChart2.setOption(getOption2())
         var myChart3 = echarts.init(document.getElementById('main3'),echartsTheme);
         myChart3.setOption(getOption3())
    }, []);
    const getOption2 = () => {
        let option = {
            title: {
                text: '用户骑行订单',
            },
            yAxis: {
                type: "value"
            },
            xAxis: {
                data: [
              "周一","周二","周三","周四","周五","周六","周日"
                ],
                "axisLabel":{ interval: 0 }
            },
            
            tooltip: {
                trigger: 'axis',
            },
            series: [
                {
                    //系列名
                    name: '订单量',
                    type: 'line',

                    data: [
                        1000,
                        2000,
                        3000,
                        1000,
                        2000,
                        6000,
                        500
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

            },
            yAxis: {
                type: "value"
            },
            xAxis: {
                data: [
              "周一","周二","周三","周四","周五","周六","周日"
                ],"axisLabel":{ interval: 0 }
            },
            legend: {
                data: ["ofo订单", "mobile"]
            },
            tooltip: {

                trigger: 'axis',

            },
            series: [
                {
                    //系列名
                    name: 'OFO',
                    type: 'line',
                    data: [
                        1000,
                        2000,
                        3000,
                        1000,
                        2000,
                        6000,
                        500
                    ]
                },
                {
                    //系列名
                    name: 'HELLO',
                    type: 'line',
                    data: [
                        200,
                        600,
                        330,
                        170,
                        2220,
                        330,
                        500
                    ]
                },
                {
                    //系列名
                    name: 'MOBO',
                    type: 'line',
                    data: [
                        2110,
                        550,
                        3210,
                        160,
                        2600,
                        3500,
                        5800
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
            },
            yAxis: {
                type: "value"
            },
            xAxis: {
                type:"category",
                data: [
              "周一","周二","周三","周四","周五","周六","周日"
                ],
                "axisLabel":{ interval: 0 },
                boundaryGap:false,

            },
            
            tooltip: {
                trigger: 'axis',
            },
            series: [
                {
                    //系列名
                    name: '订单量',
                    type: 'line',

                    data: [
                        1000,
                        2000,
                        3000,
                        1000,
                        2000,
                        6000,
                        500
                    ],
                    areaStyle:{}
                }
            ]
        }
        return option;
    }
    return <div >
        <Card title="折线图（一）" >
            <div id='main2' style={{ width: "800px", height: "400px" }}></div>
        </Card>
        <Card title="折线图（二）" >
            <div id='main' style={{ width: "800px", height: "400px" }}></div>
        </Card>
        <Card title="折线图（三）" >
            <div id='main3' style={{ width: "800px", height: "400px" }}></div>
        </Card>
    </div>;
});
