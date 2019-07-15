- callback
    addEventListener(event_type,callback); 定义时，不执行，注册到了事件模型中
                                            事件发生时，将注册的回调函数拿回来调用一下 异步

- fs 文件模块
    异步是需要花时间，注册行为，callback
    err

- 操作系统
    addEverntListener 事件监听 
    Input/Output I/O操作  CPU(运行和指令集) 内存，外部存储设备 典型的慢操作
    (异步操作)fs.readFile(path,'utf8',callback)