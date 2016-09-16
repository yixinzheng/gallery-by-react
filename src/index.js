import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
require('./style.css');

//获取图片相关的数据
var imgDatas = require('./imageDatas.json');

//利用自执行函数 ，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
  for(var i = 0,j = imageDatasArr.length;i < j; i++){
    var singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('./images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

var Comp = React.createClass({
  render:function () {
    return(
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    )
  }
})

ReactDOM.render(
  <Comp/>,
  document.getElementById('content')
);
