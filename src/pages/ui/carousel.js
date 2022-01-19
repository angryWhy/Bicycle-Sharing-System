import React, { memo } from 'react';
import { Card, Carousel } from 'antd'
import "./ui.less"
export default memo(function CarouselAbout() {
    return (<div>
        <Card title="图片轮播图背景" className='card-wrap'>
            <Carousel autoplay>
                <div><h3>ant banner - react</h3></div>
                <div><h3>ant banner - vue</h3></div>
                <div><h3>ant banner - angular</h3></div>
            </Carousel>
        </Card>
        </div>);
});

