function betterWn(target, name, descriptor) {
  
}
class Man {

  @betterWn
  xiangqing() {
    // console.log('我家在红谷滩有房');
    // console.log('我家有车');
    console.log('和我在一起');
  }
}
var man = new Man();
man.xiangqing();
