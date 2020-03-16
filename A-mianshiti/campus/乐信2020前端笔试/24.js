// 宠物店出售一种电子狗（AIDog），电子狗有白色（white）和黑色（black）两种类型，
// 电子狗可以帮主人打扫房间（clean），定时叫醒主人（wakeUp），用户购买电子狗后可以对打扫房间的频率，
// 以及叫醒服务的时间及声音进行设置；
// （i）根据描述请写出对象：
// （ii）小A想买一个白色的电子狗，每隔24个小时电子狗就进行一次房间打扫，
// 每天早上8:30电子狗就旺旺（'wang wang'）叫醒主人，请根据描述给小Anew一个电子狗实例：
function AIDog(color){
    this.color = color;
    this.init()
}
AIDog.prototype.init = function() {
    setInterval(() => {
        this.clean();
    },1000*60*60*24)
    setTimeout(() => {
        this.wakeUp();
    },'8:30')
    AIDog.prototype.clean = function(){}
    AIDog.prototype.wakeUp = function(){}
    new AIDog('white')
}