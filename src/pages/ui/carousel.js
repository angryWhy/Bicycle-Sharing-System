import React, { memo } from 'react';
import { Card, Carousel } from 'antd'
import "./ui.less"
export default memo(function CarouselAbout() {
    return (<div>
        <Card title="文字轮播图背景" className='card-wrap'>
            <Carousel autoplay>
                <div><h3>ant banner - react</h3></div>
                <div><h3>ant banner - vue</h3></div>
                <div><h3>ant banner - angular</h3></div>
            </Carousel>
        </Card>
        <Card title="图片轮播图背景" className='slider-wrap'>
            <Carousel autoplay effect='fade' >
                <div><img src={require(`../../resource/gallery/1.png`)} alt=""/></div>
                <div><img src={require(`../../resource/gallery/2.png`)} alt=""/></div>
                <div><img src={require(`../../resource/gallery/3.png`)} alt=""/></div>
            </Carousel>
        </Card>
        </div>);
});

