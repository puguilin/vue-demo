import { createStore } from 'vuex'

export default createStore({
  state: {
      count: 100,
      num: 10
  },
  mutations: {
      /**
       * mutations修改数据源
       * @param state 数据原
       * @param payload 外部调用时 传入的参数
       */
      sum(state, payload) {
        state.num += payload
      },
      reduce(state,payload) {
        state.count  = state.count - payload
      }
  
  },
  actions: {
    /**
     * 
     * action 中定义的方法默认参数为** context 上下文**， 可以理解为 store 对象
     * 通过 context 上下文对象，拿到store，通过 commit 触发 mution 中的方法，以此来完成异步操作
     * 
     * 在template 中通过dispatch 调用action 中定义的sum_action 方法
     * 
     * 通过 promise 实现异步操作完成，通知组件异步执行成功或是失败。
     * sun_action方法返回一个promise，当累加的值大于30时不再累加，抛出错误。
     * 
     */

    sum_actions (context, payload) {
      return new Promise((resolve, reject) => {

        setTimeout(() => {
          // 通过 context 上下文对象拿到 num
          //debugger
          
          if (context.state.num < 20) {
            context.commit('sum', payload)    // 通过context去触发mutions中的sum
            resolve('异步操作执行成功')
          } else {
            alert('异步操作执行错误 ,num数值不能大于20')
            reject(new Error('异步操作执行错误 ,num数值不能大于20'))
          }
        }, 1000)

      })
    },

     reduce (context, payload) {
      return new Promise((resolve, reject) => {
        if (context.state.count > 90) {
              context.commit('reduce', payload)    // 通过context去触发mutions中的 reduce
              resolve('异步操作执行成功')
            } else {
              alert('异步操作执行错误,count数值不能小于90')
              reject(new Error('异步操作执行错误,count数值不能小于90'))
            }
      })
    }
    
  },
  modules: {
  }
})
