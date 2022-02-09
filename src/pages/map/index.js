import React, { memo,useState,useEffect } from 'react';
import axios from "axios"
import { Card } from 'antd';
import "./map.less"
export default memo(function Map() {
    const [bdmap, setBdmap] = useState();
    const [data, setData] = useState();
    const [totalCount, setTotalCount] = useState();
    useEffect(() => {
      axios.get("./api/map/bike_list.json").then(res=>{
          console.log(res.data.result);
          setData(res.data.result)
          console.log(res.data.result.route_list);
          renderMap(res.data.result)
      })
    }, []);
    
    //使用hooksdata报错取值不到，使用传参可以取到
    const renderMap = (data) => {
        let list =data.route_list
        let serlist = data.service_list
        // eslint-disable-next-line no-undef
        var map = new window.BMapGL.Map("orderDetailMap");
        let gps1=list[0].split(",")


        var zoomCtrl = new window.BMapGL.ZoomControl();  // 添加缩放控件
        map.addControl(zoomCtrl);


        //起始
        let startPonit = new window.BMapGL.Point(gps1[0], gps1[1])

        let gps2=list[list.length-1].split(",")
        let endPonit = new window.BMapGL.Point(gps2[0], gps2[1])
        //居中
        map.centerAndZoom(endPonit, 15);

        let startIcon = new window.BMapGL.Icon("/assets/start_point.png", new window.BMapGL.Size(36, 42), {
            imageSize: new window.BMapGL.Size(36, 42),
            anchor: new window.BMapGL.Size(18, 42)
        })
        let endIcon = new window.BMapGL.Icon("/assets/end_point.png", new window.BMapGL.Size(36, 42), {
            imageSize: new window.BMapGL.Size(36, 42),
            anchor: new window.BMapGL.Size(18, 42)
        })

        let bikeMarker = new window.BMapGL.Marker(startPonit, { icon: startIcon })
        let bikeMarkerEnd = new window.BMapGL.Marker(endPonit, { icon: endIcon })
        map.addOverlay(bikeMarker)
        map.addOverlay(bikeMarkerEnd)

        //绘制车辆行驶路线
        let routeList=[]
        list.forEach(item => {
            let p = item.split(",")
            routeList.push(new window.BMapGL.Point(p[0], p[1]))
        });
        let pol = new window.BMapGL.Polyline(routeList, { strokeColor: "blue" })
        map.addOverlay(pol)


        //绘制服务区
        let trackArea = [];
        serlist.forEach(item=>{
            
            trackArea.push(new window.BMapGL.Point(item.lon, item.lat))
        })
        let gon = new window.BMapGL.Polygon(trackArea, { strokeColor: "blue", fillColor: "pink",strokeWeight:2, strokeOpacity: 0.2 })
        map.addOverlay(gon)

        let bike_list = data.bike_list
        let bikeIcon = new window.BMapGL.Icon("/assets/bike.jpg", new window.BMapGL.Size(36, 42), {
            imageSize: new window.BMapGL.Size(36, 42),
            anchor: new window.BMapGL.Size(18, 42)
        })
        bike_list.forEach(item=>{
            let p = item.split(",")
            let ponit=new window.BMapGL.Point(p[0],p[1])
            let bikeMarker = new window.BMapGL.Marker(ponit, { icon: bikeIcon })
            map.addOverlay(bikeMarker)

        })






    }
  return (<div>
      <Card></Card>
      <Card>
          <div id='orderDetailMap' className='order-map'></div>
      </Card>
       
  </div>);
});
