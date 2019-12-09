class Promise {
    constructor (fn) {
      this.state = 'pending'  // 存放三个状态
      this.value = undefined
      this.reason = undefined
  
      let resolve = value => {
        if(this.state === 'pending') { // 启用状态
            this.value = value
            this.state = 'fulfilled' // 完成状态
        }
      }
  
      let reject = value => {
        if(this.state === 'pending') {
            this.reason = value
            this.state = 'rejected' // 失败状态
        }
      }

      try {
          fn(resolve,reject)
      } catch (error) {
          reject(error)
      }
    }

    then(onFulfilled,onRejected){
        switch(this.state){
            case 'fulfilled':
                onFulfilled()
                break
            case 'rejected':
                onRejected()
                break
            default:
        }   
    }

  }
  