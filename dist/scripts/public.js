"use strict";define(["jquery"],function(s){return function(){s(".header-right").mousemove(function(){s(".productnotice").show()}),s(".header-right").mouseout(function(){s(".productnotice").hide()});for(var t={channel:[{text:"首页",href:"http://www.sjgo365.com"},{text:"电器馆",href:"http://www.sjgo365.com/zt/hd/eahome"},{text:"车管家",href:"http://www.sjgo365.com/zt/hd/atgthome"},{text:"美妆馆",href:"http://www.sjgo365.com/zt/hd/mzg1"},{text:"母婴馆",href:"http://www.sjgo365.com/zt/hd/myg2018"},{text:"食品保健馆",href:"http://www.sjgo365.com/zt/hd/spbjg2018"},{text:"大牌街",href:"http://www.sjgo365.com/BrandStreet/Brands"}]},e=0;e<s(".nav-center ul li a").length;e++)s(".nav-center ul li a")[e].innerHTML=t.channel[e].text,s(".nav-center ul li a")[e].href=t.channel[e].href;for(var o=[{category:"母婴儿童",cateItems:[{text:"奶粉",href:"http://www.sjgo365.com/Products/Search?keyWord=奶粉"},{text:"纸尿裤",href:"http://www.sjgo365.com/Products/Search?keyWord=纸尿裤"},{text:"拉拉裤",href:"http://www.sjgo365.com/Products/Search?keyWord=拉拉裤"},{text:"营养辅食",href:"http://www.sjgo365.com/Products/Search?keyWord=营养辅食"},{text:"宝宝用品",href:"http://www.sjgo365.com/Products/Search?keyWord=宝宝用品"},{text:"孕妈必备",href:"http://www.sjgo365.com/Products/Search?keyWord=孕妈必备"}]},{category:"美容彩妆",cateItems:[{text:"护肤",href:"http://www.sjgo365.com/Products/Search?keyWord=护肤"},{text:"洁面/卸妆",href:"http://www.sjgo365.com/Products/Search?keyWord=洁面卸妆"},{text:"面膜",href:"http://www.sjgo365.com/Products/Search?keyWord=面膜"},{text:"乳液/面霜",href:"http://www.sjgo365.com/Products/Search?keyWord=乳液面霜"},{text:"彩妆",href:"http://www.sjgo365.com/Products/Search?keyWord=彩妆"}]},{category:"家居个护",cateItems:[{text:"洗护日用",href:"http://www.sjgo365.com/Products/Search?keyWord=洗护日用"},{text:"女性护理",href:"http://www.sjgo365.com/Products/Search?keyWord=女性护理"},{text:"其他个护",href:"http://www.sjgo365.com/Products/Search?keyWord=其他个护"},{text:"居家用品",href:"http://www.sjgo365.com/Products/Search?keyWord=居家用品"},{text:"宠物生活",href:"http://www.sjgo365.com/Products/Search?keyWord=宠物生活"}]},{category:"食品保健",cateItems:[{text:"生鲜",href:"http://www.sjgo365.com/Products/Search?keyWord=生鲜"},{text:"营养补充",href:"http://www.sjgo365.com/Products/Search?keyWord=营养补充"},{text:"健康养护",href:"http://www.sjgo365.com/Products/Search?keyWord=健康养护"},{text:"女性保养",href:"http://www.sjgo365.com/Products/Search?keyWord=女性保养"},{text:"关爱老年",href:"http://www.sjgo365.com/Products/Search?keyWord=关爱老年"},{text:"进口食品",href:"http://www.sjgo365.com/Products/Search?keyWord=进口食品"}]},{category:"电器馆",cateItems:[{text:"冰洗馆",href:"http://www.sjgo365.com/zt/hd/eafridge"},{text:"彩电馆",href:"http://www.sjgo365.com/zt/hd/eatv"},{text:"厨卫馆",href:"http://www.sjgo365.com/zt/hd/eakitchen"},{text:"空调馆",href:"http://www.sjgo365.com/zt/hd/eaac"},{text:"小家电",href:"http://www.sjgo365.com/zt/hd/ealive"},{text:"数码馆",href:"http://www.sjgo365.com/zt/hd/eadigit"}]}],r=[],h=0;h<o.length;h++){var c=document.createElement("h4");s(".nav-left ul li")[h].append(c),s(".nav-left ul li h4")[h].innerHTML=o[h].category;for(var w=0;w<o[h].cateItems.length;w++){r.push(o[h].cateItems[w]);var a=document.createElement("a");s(".nav-left ul li")[h].append(a)}}for(e=0;e<r.length;e++)s(".nav-left ul li a")[e].innerHTML=r[e].text,s(".nav-left ul li a")[e].href="http://localhost:10002/pages/product.html";s(".nav-left").mousemove(function(){s(".nav-left ul").show()}),s(".nav-left").mouseout(function(){s(".nav-left ul").hide(),s(".nav-left ul").mouseover(function(){s(".nav-left ul").css("display","block")})})}});