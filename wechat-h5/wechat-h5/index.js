var send = document.getElementById('send');
var parent = document.getElementById('content-items');
send.addEventListener('click',function(){
//<li class="content-item" id="content-item">
//     <div class="left-pic">
//         <img src="./images/erzi.JPG" alt="">
//     </div>
//     <div class="message">
//         <p class="name">儿子</p>
//         <p class="detail">👌好的</p>
//     </div>
//     <div class="time">
//         <span>下午4:45</span>
//     </div>
// </li>

//jq
//     var html= $('<li class="content-item" >'+
//     '<div class="left-pic">'+
//         '<img src="./images/erzi.JPG" alt="">'+
//     '</div>'+
//     '<div class="message">'+
//         '<p class="name">儿子</p>'+
//         '<p class="detail">👌好的</p>'+
//     '</div>'+
//     '<div class="time">'+
//         '<span>下午4:45</span>'+
//     '</div>'+
// '</li>')
// html.appendTo(parent);
//原生js
    var li =document.createElement('li');
    li.setAttribute('class','content-item');
    var divPic = document.createElement('div');
    divPic.setAttribute('class','left-pic');
    li.appendChild(divPic);

    var img=document.createElement('img');
    img.setAttribute('src','./images/erzi.JPG');
    divPic.appendChild(img);


    var message = document.createElement('div');
    message.setAttribute('class','message');
    li.appendChild(message);

    var p1=document.createElement('p');
    p1.setAttribute('class','name');
    var p1Txt=document.createTextNode('蜗牛');
    p1.appendChild(p1Txt);
    message.appendChild(p1);

    var p2=document.createElement('p');
    p2.setAttribute('class','detail');
    var p2Txt=document.createTextNode('晚上看电影');
    p2.appendChild(p2Txt);
    message.appendChild(p2);

    var time=document.createElement('div');
    time.setAttribute('class','time');
    var span=document.createElement('span');
    var spanTxt=document.createTextNode("3:50");
    span.appendChild(spanTxt);
    time.appendChild(span);
    li.appendChild(time);

    parent.appendChild(li);
})