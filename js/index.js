$(function(){
// top头部左边选项卡
var headTop = document.getElementById('headTop');
    var top1 = getclassname('top1',headTop)[0];
    var top2 = getclassname('top2',headTop)[0];
    var top3 = getclassname('top3',headTop)[0];
    var s1 = top1.getElementsByTagName('s1',top1)[0];
    var s2 = top2.getElementsByTagName('s2',top2)[0];
    var s3 = top3.getElementsByTagName('s3',top3)[0];
    var h21 = top1.getElementsByTagName('h2',top1)[0];
    var h22 = top2.getElementsByTagName('h2',top1)[0];
    var h23 = top3.getElementsByTagName('h2',top1)[0];
    var wechat = getclassname('wechat',top2)[0];
    var appphone = getclassname('appphone',top3)[0];
    wechat.style.display="none";
    appphone.style.display="none";
    top1.onmouseover = function(){
        s1.style.backgroundImages="url(../img/header-02.png)";
        s1.style.backgroundPosition="-225px -27px";
        h21.style.color="#E5004F";
    }
    top1.onmouseout = function(){
        s1.style.backgroundImages="url(../img/header-02.png)";
        s1.style.backgroundPosition="-225px 0";
        h21.style.color="#666";
    }
    top2.onmouseover = function(){
        s2.style.backgroundImages="url(../img/header-02.png)";
        s2.style.backgroundPosition="-225px -87px";
        h22.style.color="#E5004F";
        top2.style.width="125px";
        top2.style.backgroundColor="#fff";
        wechat.style.display="block";
    }
    top2.onmouseout = function(){
        s2.style.backgroundImages="url(../img/header-02.png)";
        s2.style.backgroundPosition="-225px -57px";
        h22.style.color="#666";
        wechat.style.display="none";  
        top2.style.backgroundColor="";
        top2.style.width="";
    }
    top3.onmouseover = function(){
        s3.style.backgroundImages="url(../img/phone.png)";
        s3.style.backgroundPosition="0 -20px";
        h23.style.color="#E5004F";
        top3.style.width="148px";
        top3.style.backgroundColor="#fff";
        appphone.style.display="block";
    }
    top3.onmouseout = function(){
        s3.style.backgroundImages="url(../img/phone.png)";
        s3.style.backgroundPosition="0 0";
        h23.style.color="#666";
        top3.style.backgroundColor="";
        top3.style.width="";
        appphone.style.display="none";  
    }
// console.dir(appphone);

// top头部右边选项卡
var myyintai = getclassname('myyintai',headTop)[0];
    var as = getclassname('as',myyintai);
    var mynav = getclassname('mynav',myyintai)[0];
    mynav.style.display="none";

    myyintai.onmouseover = function(){
        mynav.style.display="block";
        as[0].style.backgroundColor="#fff";
    }
    myyintai.onmouseout = function(){
        mynav.style.display="none";
        as[0].style.backgroundColor="#eee";
    }
// console.dir(as);

// banner 时间效果轮播图

function bannerwheel(banner){
    var banner = document.getElementById(banner);
    var bannerImg = getclassname("bannerImg",banner)[0];
    var btn = getclassname("btn",banner);
    var lis = btn[0].getElementsByTagName('li');
    var leftbtn = getclassname("btnLeft",banner);
    var rightbtn = getclassname("btnRight",banner);
    var imgs = bannerImg.getElementsByTagName('img',bannerImg);
    var imgw = parseInt(getAttr(imgs[0],"width"));
    // console.dir(imgw);
    var index = 0;
    lis[index].style.background="#E5004F";
    leftbtn[0].style.display="none";  
    rightbtn[0].style.display="none";  

    function move(){
        index++;
        if(index==imgs.length) index = 0;
        animate(bannerImg,{left:-imgw*index},500);
        for (var i = 0; i < imgs.length; i++) {       
            lis[i].style.background="";
        }
        lis[index].style.background="#E5004F";
    }

    var t = setInterval(move,2000);
    banner.onmouseover = function(){
        clearInterval(t);
        leftbtn[0].style.display="block";  
        rightbtn[0].style.display="block";  
    }
    banner.onmouseout = function(){
        t = setInterval(move,2000);
        leftbtn[0].style.display="none";  
        rightbtn[0].style.display="none";  
    }

    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover = function(){
            for (var j = 0; j < imgs.length; j++) {
                lis[j].style.background="";
            };
            animate(bannerImg,{left:-imgw*this.index},500);
            lis[this.index].style.background="#E5004F";
            index = this.index;
        }
    }

    leftbtn[0].onclick = function(){
        index--;
        if(index<0) index = imgs.length-1;
        animate(bannerImg,{left:-imgw*index},500);
        for (var i = 0; i < imgs.length; i++) {       
            lis[i].style.background="";
        }
        lis[index].style.background="#E5004F"; 
    }

    rightbtn[0].onclick = function(){
        move();
    }
}
bannerwheel("banner");  

// banner的  侧边选项卡
function list(lists,photo,x){
    var lists = getclassname(lists,banner)[0];
    var listRightBox =getclassname('listRightBox',lists)[0];
    var photos = getclassname(photo,lists)[0];
    var word4 = getclassname('word4',lists)[0];
    listRightBox.style.display="none";
    word4.style.display="block";

    // console.dir(word4);

    lists.onmouseover = function(){
        listRightBox.style.display="block";
        //? photos.style.cssText="background: url(../img/header-01.png) 0 -127px no-repeat;";
        photos.style.backgroundImages="url(../img/header-01.png)";
        photos.style.backgroundPosition=x+" -128px";
        word4.style.display="none";
    }
    lists.onmouseout = function(){
        listRightBox.style.display="none";
        photos.style.backgroundImages="url(../img/header-02.png)";
        photos.style.backgroundPosition=x+" -110px";      
        word4.style.display="block";

    }
}
list('lists1','photo1',"0");
list('lists2','photo2',"-17px");
list('lists3','photo3',"-34px");
list('lists4','photo4',"-51px");
list('lists5','photo5',"-68px");
list('lists6','photo6',"-85px");
list('lists7','photo7',"-102px");
list('lists8','photo8',"-119px");
list('lists9','photo9',"-136px");
list('lists10','photo10',"-153px");

// floor1 选项卡
var floor1Left = getclassname("floor1Left",document)[0];
    var link = getclassname("link",floor1Left)[0];
    var lls = link.getElementsByTagName("li",floor1Left);
    var tri = getclassname("triangle",floor1Left);
    // console.dir(tri);
    var floor1Leftbottoms = getclassname("floor1Leftbottom",floor1Left);
     // console.log(floor1Leftbottom);
    lls[2].style.display="block"; 
    lls[2].style.borderBottomColor="#e5004f";    
    lls[2].style.fontWeight="bold"; 
    tri[2].style['border-bottom-color']="#e5004f";
    floor1Leftbottoms[2].style.display="block";

    for (var i = 0; i < lls.length; i++) {
        lls[i].index = i; 
        lls[i].onmouseover=function(){
            for (var j = 0; j < floor1Leftbottoms.length; j++) {
                floor1Leftbottoms[j].style.display="none";  
                lls[j].style.fontWeight="";    
                lls[j].style['border-bottom-color']="";
                tri[j].style['border-bottom-color']="";          
            }
            lls[this.index].style.display="block";    
            lls[this.index].style.fontWeight="bold";    
            lls[this.index].style['border-bottom-color']="#e5004f";
            tri[this.index].style['border-bottom-color']="#e5004f";         
            floor1Leftbottoms[this.index].style.display="block";

        }
           
    }

// floor1边框效果
function border(BOX,out,box){
    var BOXS = $(BOX);
    var outs = $(out,BOXS)[0];
    var boxs = $(box,outs);
    var iw = parseInt(getAttr(boxs[0],"width"));
    var ih = parseInt(getAttr(boxs[0],"height"));
    for (var i = 0; i < boxs.length; i++) {
        boxs[i].onmouseover = function(){
            var bt = $('.bt',this)[0];
            var bl = $('.bl',this)[0];
            var br = $('.br',this)[0];
            var bb = $('.bb',this)[0];
            animate(bt,{width:iw},500);
            animate(bl,{height:ih},500);
            animate(br,{height:ih},500);
            animate(bb,{width:iw},500);
            // console.dir(bb);
        }
        boxs[i].onmouseout = function(){
            var bt = $('.bt',this)[0];
            var bl = $('.bl',this)[0];
            var br = $('.br',this)[0];
            var bb = $('.bb',this)[0];
            animate(bt,{width:0},500);
            animate(bl,{height:0},500);
            animate(br,{height:0},500);
            animate(bb,{width:0},500);
            // console.dir(bb);
        }
    }
}

border("#floo1",".floor1Leftbottom","a");    
border("#floo1",".floor1Leftbottom1","a");    

// floor2 右边的选项卡
var floor2 = document.getElementById('floor2');
    var floor2mainRightTitle = getclassname('floor2mainRightTitle',floor2)[0];
    var liis = floor2mainRightTitle.getElementsByTagName('li',floor2);
    var tri2 = getclassname("triangle",floor2);
    // console.dir(tri);
    var floor2mainRightBottom =getclassname('floor2mainRightBottom',floor2);
    // console.dir(floor2mainRightBottom);
    liis[0].style.display="block"; 
    liis[0].style['border-bottom-color']="#e70050";    
    liis[0].style.fontWeight="bold"; 
    tri2[0].style['border-bottom-color']="#e70050";      
    floor2mainRightBottom[0].style.display="block";

    for (var i = 0; i < liis.length; i++) {
        liis[i].index = i; 
        liis[i].onmouseover=function(){
            for (var j = 0; j < floor2mainRightBottom.length; j++) {
                floor2mainRightBottom[j].style.display="none";  
                liis[j].style.fontWeight="";    
                liis[j].style['border-bottom-color']="";
                tri2[j].style['border-bottom-color']="";                 
            }
            liis[this.index].style.display="block";    
            liis[this.index].style.fontWeight="bold";    
            liis[this.index].style['border-bottom-color']="#e70050"; 
            tri2[this.index].style['border-bottom-color']="#e70050";        
            floor2mainRightBottom[this.index].style.display="block";

        }
            
    }

// floor2边框效果
border("#floo2",".floor2mainRightBottom1","a");    


// foorl3开始的左下角轮播特效
function floor(floori){
    var floor3 = document.getElementById(floori,document);

    //左下角小图  滚动 
    var floor3LeftBottom = getclassname('floor3LeftBottom',floor3)[0];
    var floor3LeftBottomMain = getclassname('floor3LeftBottomMain',floor3LeftBottom);
    var pre1 = getclassname('pre',floor3LeftBottom)[0]; 
    var next1 = getclassname('next',floor3LeftBottom)[0]; 
    var imgww = parseInt(getAttr(floor3LeftBottomMain[0],"width"));

    // console.dir(imgww);
    for (var i = 0; i < floor3LeftBottomMain.length; i++) {
        floor3LeftBottomMain[i].style.left=imgww+"px";
    };

    var index = 0;
    var next = 0;
    floor3LeftBottomMain[index].style.left=0;

    function movee(){
        next++; 
        if(next==floor3LeftBottomMain.length){
            next = 0;
        }
        floor3LeftBottomMain[next].style.left=imgww+"px";
        animate(floor3LeftBottomMain[index],{left:-imgww},500);
        animate(floor3LeftBottomMain[next],{left:0},500);
        index = next;
    }

    // var t = setInterval(movee,2000);

    // floor3LeftBottom.onmouseover = function(){
    //     clearInterval(t);
    // }
    // floor3LeftBottom.onmouseout = function(){
    //     t = setInterval(movee,2000);
    // }

    pre1.onclick = function(){
        next--;
        if(next<0){
            next = floor3LeftBottomMain.length-1;
        }
        floor3LeftBottomMain[next].style.left=-imgww+"px";
        animate(floor3LeftBottomMain[index],{left:imgww},500);
        animate(floor3LeftBottomMain[next],{left:0},500);
        index=next;
    }

    next1.onclick = function(){
        movee();
    }
}
floor('floor3');
floor('floor4');
floor('floor5');
floor('floor6');
floor('floor7');
floor('floor8');
floor('floor9');
floor('floor10');
floor('floor11');

// floor3开始的边框效果
function border1(BOX){
    var BOXs = $(BOX);
    var floor3RightBox = $(".floor3RightBox",BOXs);
    var floor3RightBox1 = $(".floor3RightBox1",BOXs);
    var iw = parseInt(getAttr(floor3RightBox[0],"width"));
    var ih = parseInt(getAttr(floor3RightBox[0],"height"));

    for (var i = 0; i < floor3RightBox.length; i++) {
        floor3RightBox[i].onmouseover = function(){
            // console.dir(floor3Rights);
            var bt = $('.bt',this)[0];
            var bl = $('.bl',this)[0];
            var br = $('.br',this)[0];
            var bb = $('.bb',this)[0];
            animate(bt,{width:iw},500);
            animate(bl,{height:ih},500);
            animate(br,{height:ih},500);
            animate(bb,{width:iw},500);
            // console.dir(bb);
        }
        floor3RightBox[i].onmouseout = function(){
            var bt = $('.bt',this)[0];
            var bl = $('.bl',this)[0];
            var br = $('.br',this)[0];
            var bb = $('.bb',this)[0];
            animate(bt,{width:0},500);
            animate(bl,{height:0},500);
            animate(br,{height:0},500);
            animate(bb,{width:0},500);
            // console.dir(bb);
        }
    }
    for (var i = 0; i < floor3RightBox.length; i++) {
        floor3RightBox1[i].onmouseover = function(){
            var bt = $('.bt',this)[0];
            var bl = $('.bl',this)[0];
            var br = $('.br',this)[0];
            var bb = $('.bb',this)[0];
            animate(bt,{width:iw},500);
            animate(bl,{height:ih},500);
            animate(br,{height:ih},500);
            animate(bb,{width:iw},500);
            // console.dir(bb);
        }
        floor3RightBox1[i].onmouseout = function(){
            var bt = $('.bt',this)[0];
            var bl = $('.bl',this)[0];
            var br = $('.br',this)[0];
            var bb = $('.bb',this)[0];
            animate(bt,{width:0},500);
            animate(bl,{height:0},500);
            animate(br,{height:0},500);
            animate(bb,{width:0},500);
            // console.dir(bb);
        }
    }
}
border1("#floor3Right");      
border1("#floor4Right");      
border1("#floor5Right");      
border1("#floor6Right");      
border1("#floor7Right");      
border1("#floor8Right");      
border1("#floor9Right");      
border1("#floor10Right");      
border1("#floor11Right");      

// foorl3开始的中间大图轮播特效
function wheel(flx){
    var banner = $(flx);
    var box =  $('.floor3Mid',banner)[0];
    var bannerbox = $('.floor3MidContent',box)[0];
    var imgs = $('img',bannerbox);
    var imgw = imgs[0].offsetWidth;
    var lists = $('.list',box)[0];
    var lis = $('li',lists);
    var btns = $('.btn',box)[0];
    var leftbtn = $('.leftbtn1',btns)[0];
    var rightbtn = $('.rightbtn1',btns)[0];
    bannerbox.style.width=imgw*imgs.length+"px";

    lis[0].style.background="#CF0B5C";
    btns.style.display="none";

    var index = 0;
    function move(){
        index++;
        if(index=imgs.length) index=1;
        animate(bannerbox,{left:-imgw*index},500);
        for (var i = 0; i < imgs.length; i++) {
            lis[i].style.background="#6E6E6E";
        }
        lis[index].style.background="#CF0B5C";
    }
    // var t = setInterval(move,2000);
    box.onmouseover = function(){
        btns.style.display="block";
    }
    box.onmouseout = function(){
        btns.style.display="none";
        
    }

    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover = function(){
            animate(bannerbox,{left:-imgw*this.index},500);
            for (var j = 0; j < imgs.length; j++) {
                lis[j].style.background="#6E6E6E";
            }
            this.style.background="#CF0B5C";
            index = this.index;
        }
    }

    leftbtn.onclick = function(){
        index--;
        if(index<0) index=0;
        animate(bannerbox,{left:-imgw*index},500);
        for (var i = 0; i < imgs.length; i++) {
            lis[i].style.background="#6E6E6E";
        }
        lis[index].style.background="#CF0B5C";
    }
    rightbtn.onclick = function(){
        move();
    }
    // console.dir(a);
}
wheel("#floor3");
wheel("#floor4");
wheel("#floor5");
wheel("#floor6");
wheel("#floor7");
wheel("#floor8");
wheel("#floor9");
wheel("#floor10");
wheel("#floor11");


// 整个页面中的按需加载
function load(BOXSS){
    var BOX = $(BOXSS);
    var bh = document.documentElement.clientHeight;
    var imgh = BOX.offsetTop;
    var imgs = $("img",BOX);
    var flag = true;  

    // 侧边导航的楼层跳转
    var floor = $(".floor3");
    var sidenav = $("#sidenav");
    var ass = $("a",sidenav);
    var floorh = [];
    var flag11 = true;

    for (var i = 0; i < floor.length; i++){
        floorh.push(floor[i].offsetTop);
    }
    // console.dir(floorh[0]);


    window.onscroll = function(){
        // 侧边导航的楼层跳转
        var stop = scrollTops();

        // 图片按需加载
        for (var i = 0; i < imgs.length; i++) {
            if(imgh>stop){
                imgs[i].src = imgs[i].getAttribute("asrc");            
            }
        }


        // 头部开始判断
        if(stop>700){
            if(flag11){
                flag11 = false;
                animate(sidenav,{bottom:20},500);
            }
        }else{
            if(!flag11){
                flag11 = true;
                animate(sidenav,{bottom:-550},500);
            }
        }

        for (var i = 0; i < floorh.length; i++) {
            if(floorh[i]<stop+200){
                for (var j = 0; j < floorh.length; j++) {
                    ass[j].style.opacity=0;
                }
                ass[i].style.opacity=1;
            }
        }    

    }
    window.onscroll();

    //点击楼层按钮自动跳转
    for (var i = 0; i < ass.length; i++) {
        ass[i].index = i;

        ass[i].onmouseover = function(){
            for (var j = 0; j < ass.length; j++) {
                ass[j].style.opacity=0;
            }
            this.style.opacity=1;
        }

        ass[i].onclick = function(){
            for (var j = 0; j < ass.length-1; j++) {
                ass[j].style.opacity=0;
            }
            animate(document.body,{scrollTop:floorh[this.index]},100);
            animate(document.documentElement,{scrollTop:floorh[this.index]},100);
        }

        // 返回顶部按钮
        ass[ass.length-1].onclick = function(){
            animate(document.body,{scrollTop:0},100);
            animate(document.documentElement,{scrollTop:0},100);
        }
    }
}

load("#floor1");
load("#floor2");
load("#floor3");
load("#floor4");
load("#floor5");
load("#floor6");
load("#floor7");
load("#floor8");
load("#floor9");
load("#floor10");
load("#floor11");

});

