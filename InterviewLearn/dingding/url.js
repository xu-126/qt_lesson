// 内部正则表达书获取当前页面url中的参数   入参为参数名称 输出对应参数值
function getParamValue(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    //console.log(r) //["username=admin&", "", "admin", "&"]
    if(r != null) return decodeURIComponent(r[2]);
    return null;
}
//eg: window.location.search   ->    ?username=admin&password=123456
console.log(getParamValue('username'))
 

