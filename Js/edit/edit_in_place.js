/** 
 * @func 就地编辑
 * @author 韩大大
 * 网站的基础类 不要重复造轮子
 * 不是具体业务 抽象的公共业务
 */

function EditInPlace(id,parent,initVal) {
    //constructor
    this.id = id;
    this.parentElement = parent;
    this.value = initVal || "default value";
    this.createElement(); //动态DOM
    this.attachEvents();
}
EditInPlace.prototype.attachEvents = function() {
    //节点已经挂载到页面上
    let self = this; //this指向对象
    this.staticElement.addEventListener('click',()=> {
        console.log(this); //this被覆盖
        // 引用到对象怎么办
        // self.convertToEdit();
        this.convertToEdit();
    },false);
    this.fieldElement.addEventListener('keydown',(event)=>{
        if(event.keyCode == 13) {
            this.staticElement.innerHTML = this.fieldElement.value;
            this.convertToText();
        }
    })
}
EditInPlace.prototype.createElement = function() {
    this.containerElement = document.createElement('div');
    this.containerElement.id = this.id;
    this.staticElement = document.createElement('span');
    this.staticElement.innerText = this.value;
    this.fieldElement = document.createElement('input');
    this.fieldElement.type = 'text';
    this.fieldElement.value = this.value;
    
    this.containerElement.appendChild(this.fieldElement);
    this.containerElement.appendChild(this.staticElement);
    this.parentElement.appendChild(this.containerElement);

    // 两个状态
    this.convertToText();
    // this.convertToEdit();
} 

EditInPlace.prototype.convertToText = function() {
    this.fieldElement.style.display = 'none';
    this.staticElement.style.display = 'inline';
}
EditInPlace.prototype.convertToEdit = function() {
    this.fieldElement.style.display = 'inline';
    this.staticElement.style.display = 'none';
}
