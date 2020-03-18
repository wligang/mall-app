(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/payment/payment"],{1532:function(t,e,o){"use strict";o.r(e);var n=o("a020"),a=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"5c47":function(t,e,o){"use strict";(function(t){o("3075");n(o("66fd"));var e=n(o("e6fb"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},"5f8f":function(t,e,o){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.channel="alipay"},t.e1=function(e){t.channel="wxpay"})},s=[];o.d(e,"b",function(){return a}),o.d(e,"c",function(){return s}),o.d(e,"a",function(){return n})},"6ffd":function(t,e,o){},a020:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("9e95"),a=o("e228"),s=o("cf36"),i={data:function(){return{openId:"",code:"",orderId:"",amount:0,orderName:"",goodsId:"",channel:"wxpay",authorization:null,userId:"",skuId:0,specClass:"none",protoclContext:"",protoclShow:!1,provider:null}},onShow:function(){this.getProtocl()},onLoad:function(e){var o=this,n=this.provider;null!=n&&""!=n||(t.getProvider({service:"oauth",success:function(t){console.log(t),n=t.provider[0]}}),this.provider=n),this.channel="toutiao"==this.provider?"ALIPAY":"WXPAY",this.amount=parseFloat(e.amount).toFixed(2),this.orderName=e.orderName,this.orderId=e.orderId,this.goodsId=e.goodsId,this.authorization=t.getStorageSync("Authorization"),this.openId=t.getStorageSync("miniOpenId"),this.userId=t.getStorageSync("userId"),this.skuId=e.skuId,t.getStorage({key:"paymentOrder",success:function(e){e.data.length>1?o.orderName="多商品合并支付":o.orderName=e.data[0].name,t.removeStorage({key:"paymentOrder"})}})},methods:{doDeposit:function(){var e=this,o=this.provider;if(t.showLoading({title:"支付中..."}),"toutiao"==o)return this.payment(null),!1;console.log(this.openId),""==this.openId?(console.log("开始获取OpenID:"+o),t.login({provider:o,success:function(n){console.log(n);var s={code:n.code,state:getApp().globalData.PROVIDER[o]};(0,a.getOpenId)(s).then(function(o){0==o.data.code?(e.openId=o.data.data,t.setStorageSync("miniOpenId",o.data.data),e.payment(o.data.data)):console.log(o)})},fail:function(t){console.log("登录失败"),console.log(t)}})):this.payment(this.openId)},payment:function(e){var o=this,a=this.channel,s=this.amount;t.request({url:n.requestURL+"/pay/goods/payment?code=auu",data:{appCode:getApp().globalData.APPNAME,amount:100*s,goodsName:this.orderName,openId:e,goodsId:this.goodsId+"",userId:this.userId,orderId:this.orderId,skuId:this.skuId,channel:this.channel,payType:"WXPAY"==this.channel?"JSAPI":"APP"},header:{Authorization:this.authorization},method:"POST",success:function(e){console.log(e),401==e.statusCode&&o.oauthLogin(!0),0==e.data.code?"WXPAY"==a?o.wxPay(e.data.data.params,s):o.ttPay(e.data.data.params,s):t.showToast({title:e.data.msg?e.data.msg:"下单失败",icon:"none"})},fail:function(e){console.log(e),t.showToast({title:"下单失败",icon:"none"})},complete:function(){t.hideLoading()}})},wxPay:function(e,o){wx.requestPayment({timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:"MD5",paySign:e.paySign,success:function(e){console.log("支付成功"),console.log(e),t.showToast({title:"支付成功",icon:"success"}),t.redirectTo({url:"../../pay/success/success?amount="+o})},fail:function(e){console.log("支付失败"),console.log(e),t.showToast({title:"支付失败",icon:"none"}),t.hideLoading()},complete:function(e){console.log("支付完成"),t.hideLoading()}})},ttPay:function(t,e){tt.pay({orderInfo:t,service:1,getOrderStatus:function(t){t.out_order_no;return new Promise(function(t,e){tt.request({url:"<your-backend-url>",success:function(e){t({code:11})},fail:function(t){e(t)}})})},success:function(t){0==t.code&&(console.log("支付成功"),console.log(t))},fail:function(t){console.log("支付fail"),console.log(t)}})},oauthLogin:function(){var e=this.provider,o=this;t.login({provider:e,success:function(a){console.log(a);var s=getApp().globalData.PROVIDER[e];getApp().globalData.APPTYPE=s,t.request({url:n.requestURL+"/auth/mobile/token/social?grant_type=mobile&mobile="+s+"@"+a.code,method:"post",header:{Authorization:getApp().globalData.CLIENT},success:function(e){if(401===e.statusCode)return setTimeout(function(){t.hideKeyboard(),t.navigateTo({url:"bind?state="+s+"&code=auu"})},300),!1;200==e.statusCode&&(console.log(e),t.setStorageSync("Authorization","Bearer "+e.data.access_token),t.setStorageSync("TENANT-ID",e.data.tenant_id),t.setStorageSync("refreshToken",e.data.refresh_token),t.setStorageSync("refreshTokenTime",parseInt((new Date).getTime()/1e3)),t.setStorageSync("userId",e.data.user_id),t.setStorageSync("userName",e.data.username),o.payment())}})},fail:function(e){console.log("用户拒绝了授权: "+JSON.stringify(e)),t.hideLoading()}})},showProtocl:function(){this.specClass="show"},agreeProtocl:function(){var t=this;this.specClass="hide",setTimeout(function(){t.specClass="none"},250)},getProtocl:function(){var t=this;(0,s.getParam)("_PROTOCL").then(function(e){0==e.data.code&&null!=e.data.data&&(t.protoclContext='<p style="text-align: left;">'+e.data.data+"</p>",t.protoclShow=!0)})}}};e.default=i}).call(this,o("543d")["default"])},d6d3:function(t,e,o){"use strict";var n=o("6ffd"),a=o.n(n);a.a},e6fb:function(t,e,o){"use strict";o.r(e);var n=o("5f8f"),a=o("1532");for(var s in a)"default"!==s&&function(t){o.d(e,t,function(){return a[t]})}(s);o("d6d3");var i,r=o("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);e["default"]=c.exports}},[["5c47","common/runtime","common/vendor"]]]);