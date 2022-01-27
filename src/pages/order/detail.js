import React, { memo, useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import "./detail.less"
export default memo(function Detail() {
    const [data, setData] = useState();
    const [bdmap, setBdmap] = useState();
    useEffect(() => {
        axios.get("./api/order/detail.json").then(res => {
            setData(res.data.result)
            console.log(res.data.result.area);
            renderMap(res.data.result.position_list, res.data.result.area)
        })
    }, []);
    const renderMap = (pos, area) => {
        // eslint-disable-next-line no-undef
        var map = new window.BMapGL.Map("orderDetailMap");
        // 创建地图实例 
        // eslint-disable-next-line no-undef
        var point = new window.BMapGL.Point(116.404, 39.915);
        // 创建点坐标 
        var scaleCtrl = new window.BMapGL.ScaleControl();  // 添加比例尺控件
        map.addControl(scaleCtrl);
        var zoomCtrl = new window.BMapGL.ZoomControl();  // 添加缩放控件
        map.addControl(zoomCtrl);
        var cityCtrl = new window.BMapGL.CityListControl();  // 添加城市列表控件
        map.addControl(cityCtrl);
        map.centerAndZoom(point, 15);
        if (pos.length > 0) {
            let arr = pos[0]
            let arr2 = pos[[pos.length - 1]]
            console.log(arr2);
            console.log(arr);
            // eslint-disable-next-line no-undef
            let startPoint = new window.BMapGL.Point(arr.lon, arr.lat)
            let startIcon = new window.BMapGL.Icon("/assets/start_point.png", new window.BMapGL.Size(36, 42), {
                imageSize: new window.BMapGL.Size(36, 42),
                anchor: new window.BMapGL.Size(36, 42)
            })

            // eslint-disable-next-line no-undef
            let startMarker = new window.BMapGL.Marker(startPoint, { icon: startIcon })
            map.addOverlay(startMarker)

            let endPoint = new window.BMapGL.Point(arr2.lon, arr2.lat)
            let endIcon = new window.BMapGL.Icon("/assets/end_point.png", new window.BMapGL.Size(36, 42), {
                imageSize: new window.BMapGL.Size(36, 42),
                anchor: new window.BMapGL.Size(36, 42)
            })

            // eslint-disable-next-line no-undef
            let endMarker = new window.BMapGL.Marker(endPoint, { icon: endIcon })
            map.addOverlay(endMarker)
            //连接路线图
            let trackPoint = [];
            for (let i = 0; i < pos.length; i++) {
                let point = pos[i]
                trackPoint.push(new window.BMapGL.Point(point.lon, point.lat))
            }
            let pol = new window.BMapGL.Polyline(trackPoint, { strokeColor: "blue" })
            map.addOverlay(pol)
            map.centerAndZoom(endPoint, 11)
            let trackArea = [];
            for (let i = 0; i < area.length; i++) {
                let ar = area[i]
                trackArea.push(new window.BMapGL.Point(ar.lon, ar.lat))
            }
            let gon = new window.BMapGL.Polygon(trackArea, { strokeColor: "blue", fillColor: "pink",strokeWeight:2, strokeOpacity: 0.2 })
            map.addOverlay(gon)


        }

        setBdmap(map)

    }
    return <div><div id='orderDetailMap' className='order-map'></div>
        <div className='detail-items'>
            <div className='item-title'>基础信息</div>
            <ul className='detail-form'>
                <li>
                    <div className='detail-form-left'>用车模式</div>
                    <div className='detail-form-content'>{data ? data.mode : null}</div>
                </li>
                <li>
                    <div className='detail-form-left'>订单编号</div>
                    <div className='detail-form-content'>{data ? data.order_sn : null}</div>
                </li>
                <li>
                    <div className='detail-form-left'>车辆编号</div>
                    <div className='detail-form-content'>{data ? data.bike_sn : null}</div>
                </li>
                <li>
                    <div className='detail-form-left'>用户姓名</div>
                    <div className='detail-form-content'>{data ? data.user_name : null}</div>
                </li>
                <li>
                    <div className='detail-form-left'>手机号码</div>
                    <div className='detail-form-content'>{data ? data.mobile : null}</div>
                </li>
            </ul>
        </div>
        <div className='detail-items'>
            <div className='item-title'>行驶轨迹</div>
            <ul className='detail-form'>
                <li>
                    <div className='detail-form-left'>行程起点</div>
                    <div className='detail-form-content'>{data ? data.start_location : null}</div>
                </li>
                <li>
                    <div className='detail-form-left'>行程终点</div>
                    <div className='detail-form-content'>{data ? data.end_location : null}</div>
                </li>
                <li>
                    <div className='detail-form-left'>行驶里程</div>
                    <div className='detail-form-content'>{data ? data.distance : null}</div>
                </li>
            </ul>
        </div>
        <div>

        </div>
    </div>;
});
