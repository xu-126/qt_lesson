console.log('begin')
const CACHE_NAME = 'PWA-v2.0'
this.addEventListener('install',(event) => {
    // cacheStorage 缓存内容
    // install -> active
    // Promise resolve
    console.log('安装成功')
    this.skipWaiting()
    event.waitUntil(
        // 打开 CACHE_NAME 模块
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll([
                'service-work.html',
                '/bundle.js',
                '/bear.png'
            ])
        })
    )
})
this.addEventListener('activate',(event) => {
    // install => active
    event.waitUntil(
        caches.keys().then(keyList => {
            console.log('keyList:' + keyList)
            // 删除之前的 留下最新的 CACHE_NAME
            return Promise.all(keyList.map(key => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key)
                }
                return Promise.resolve()
            }))
        })
    )
})

// 监听浏览器的请求事件 fetch
this.addEventListener('fetch',
(event) => {
    event.respondWith(caches.match(event.request) // 从缓存里面拿数据
    .then(res => {
        if(res) {
            return res;
        }
        else {
            // 后续 想缓存的内容 添加进去
            return fetch(event.request)
            .then(res => {
                return caches.open(CACHE_NAME)
                .then(cache => {
                    cache.put(event.request,res)
                    return res
                })
            })
        }
    })
    )
})