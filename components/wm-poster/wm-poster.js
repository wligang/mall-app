(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wm-poster/wm-poster"],{"00d7":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,i=r(n("4795"));function r(t){return t&&t.__esModule?t:{default:t}}function l(t,e,n,a,i,r,l){try{var o=t[r](l),c=o.value}catch(u){return void n(u)}o.done?e(c):Promise.resolve(c).then(a,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var r=t.apply(e,n);function o(t){l(r,a,i,o,c,"next",t)}function c(t){l(r,a,i,o,c,"throw",t)}o(void 0)}))}}var c={name:"wm-poster",props:{CanvasID:{Type:String,default:"PosterCanvas"},imgSrc:{Type:String,default:""},QrSrc:{Type:String,default:""},AvatarSrc:{Type:String,default:""},QrName:{Type:String,default:""},Title:{Type:String,default:""},TitleColor:{Type:String,default:"#333333"},ReferrerColor:{Type:String,default:"#5050f0"},LineType:{Type:[String,Boolean],default:!0},PriceTxt:{Type:String,default:"99.99"},PriceColor:{Type:String,default:"#e31d1a"},OriginalTxt:{Type:String,default:"199.99"},OriginalColor:{Type:String,default:"#b8b8b8"},Width:{Type:String,default:600},CanvasBg:{Type:String,default:"#ffffff"},Referrer:{Type:String,default:"quitter推荐给你"},ViewDetails:{Type:String,default:"长按或扫描识别二维码"}},data:function(){return{canvasFlag:!0,canvasW:0,canvasH:0,canvasImgSrc:"",ctx:null}},methods:{roundRect:function(t,e,n,a,i,r,l,o,c){if(t.beginPath(),t.arc(e+r,n+r,r,Math.PI,1.5*Math.PI),t.moveTo(e+r,n),t.lineTo(e+a-r,n),t.arc(e+a-r,n+r,r,1.5*Math.PI,2*Math.PI),t.lineTo(e+a,n+i-r),t.arc(e+a-r,n+i-r,r,0,.5*Math.PI),t.arc(e+r,n+i-r,r,.5*Math.PI,Math.PI),t.lineTo(e,n+r),"btn"==c){var u=t.createLinearGradient(0,0,200,0);u.addColorStop(0,l),u.addColorStop(1,o),t.setFillStyle(u),t.fill()}else l&&(t.setFillStyle(l),t.fill()),o&&(t.setStrokeStyle(o),t.stroke());t.closePath(),t.clip()},OnCanvas:function(){var e=this;return o(i.default.mark((function n(){var r,l,o,c,u,s,f,x,d,p,g,T,h,v;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.showLoading({mask:!0,title:"正在生成海报"}),a.ctx=t.createCanvasContext(a.CanvasID,e),r=t.upx2px(a.Width),l=t.upx2px(10),o=t.upx2px(180),c=0,n.next=6,a.getImageInfo({imgSrc:a.imgSrc});case 6:return u=n.sent,n.next=9,a.getImageInfo({imgSrc:a.QrSrc});case 9:return s=n.sent,n.next=12,a.getImageInfo({imgSrc:a.AvatarSrc});case 12:f=n.sent,x=[u.width,u.height],d=[s.width,s.height],p=r-2*l,x[0]!=p&&(x[1]=Math.floor(p/x[0]*x[1]),x[0]=p),d[0]!=o&&(d[1]=Math.floor(o/d[0]*d[1]),d[0]=o),a.canvasW=r,a.canvasH=x[1]+d[1]+128,a.ctx.setFillStyle(a.CanvasBg),a.ctx.fillRect(0,0,r,a.canvasH),a.ctx.drawImage(u.path,l,l,x[0],x[1]),a.ctx.setFontSize(t.upx2px(34)),a.ctx.setFillStyle(a.TitleColor),g=0,T=x[1]+2*l+15,h=1,v=0;case 29:if(!(v<a.Title.length)){n.next=51;break}if(c+=a.ctx.measureText(a.Title[v]).width,!(c>x[0])){n.next=47;break}if(2!=h||!a.LineType){n.next=40;break}return a.ctx.fillText(a.Title.substring(g,v-8)+"...",l,T),c=0,g=v,h++,n.abrupt("break",51);case 40:a.ctx.fillText(a.Title.substring(g,v),l,T),c=0,T+=20,g=v,h++;case 45:n.next=48;break;case 47:v==a.Title.length-1&&(a.ctx.fillText(a.Title.substring(g,v+1),l,T),c=0);case 48:v++,n.next=29;break;case 51:c=l,T+=t.upx2px(60),1==h&&(T+=20),""!=a.PriceTxt&&(a.ctx.setFillStyle(a.PriceColor),a.ctx.setFontSize(t.upx2px(38)),a.ctx.fillText("￥"+a.PriceTxt,c,T),c+=a.ctx.measureText("￥"+a.PriceTxt).width+t.upx2px(10)),""!=a.PriceTxt&&""!=a.OriginalTxt&&(a.ctx.setFillStyle(a.OriginalColor),a.ctx.setFontSize(t.upx2px(24)),a.ctx.fillText("￥"+a.OriginalTxt,c,T)),a.ctx.strokeStyle=a.OriginalColor,a.ctx.moveTo(c,T-t.upx2px(10)),a.ctx.lineTo(c+a.ctx.measureText(a.OriginalTxt).width,T-t.upx2px(10)),a.ctx.stroke(),T+=t.upx2px(20),a.ctx.drawImage(s.path,x[0]-d[0]+l-30,T-30,d[0],d[1]),a.ctx.setFillStyle(a.TitleColor),a.ctx.setFontSize(t.upx2px(30)),a.ctx.fillText(a.QrName,x[0]-d[0]+l-20,T+d[0]-12),a.ctx.setFillStyle(a.ReferrerColor),a.ctx.setFontSize(t.upx2px(30)),a.ctx.fillText(a.Referrer,l+10,T+d[1]/2+50),a.ctx.setFillStyle(a.OriginalColor),a.ctx.setFontSize(t.upx2px(24)),a.ctx.fillText(a.ViewDetails,l+80,T+d[1]/2+25+50),a.roundRect(a.ctx,l+30,T+20,50,50,25,"#EEEEEE","#EEEEEE"),T+=t.upx2px(20),a.ctx.drawImage(f.path,l+30,T+10,50,50),a.ctx.save(),a.ctx.restore(),setTimeout((function(){a.ctx.draw(!0,(function(t){a.getNewImage()}))}),100),t.hideLoading();case 78:case"end":return n.stop()}}),n)})))()},getImageInfo:function(e){return o(i.default.mark((function n(){var a;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.imgSrc,n.abrupt("return",new Promise((function(e,n){t.getImageInfo({src:a,success:function(t){e(t)},fail:function(t){n(t)}})})));case 2:case"end":return n.stop()}}),n)})))()},getNewImage:function(){t.canvasToTempFilePath({canvasId:a.CanvasID,quality:1,complete:function(t){a.$emit("success",t)}},this)},saveCanvasImage:function(){var e=this;t.showLoading({title:"保存中..."}),wx.canvasToTempFilePath({canvasId:e.CanvasID,success:function(n){console.log("ok"),t.saveImageToPhotosAlbum({filePath:n.tempFilePath,success:function(n){t.hideLoading(),t.showToast({icon:"none",title:"保存成功，去分享吧~",duration:2e3}),console.log(e.$root),e.$root.cancel("image")},fail:function(e){console.log(e),t.showToast({title:"保存到相册失败，稍后再试",duration:2e3,icon:"none"}),t.hideLoading()}})},fail:function(t){console.log(t)}},this)}},mounted:function(){a=this}};e.default=c}).call(this,n("543d")["default"])},a007:function(t,e,n){"use strict";n.r(e);var a=n("ff09"),i=n("aefd");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var l,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],l);e["default"]=c.exports},aefd:function(t,e,n){"use strict";n.r(e);var a=n("00d7"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},ff09:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}))}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wm-poster/wm-poster-create-component',
    {
        'components/wm-poster/wm-poster-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a007"))
        })
    },
    [['components/wm-poster/wm-poster-create-component']]
]);
