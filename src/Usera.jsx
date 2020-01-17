import React,{Component} from 'react';
export default class Usera extends Component{
    constructor(){
        super()
        // 这里的  this.state = {} 相当于 vue中的 data ()  {  return {}  }
        //class中的state都是可读可写的
        this.state = {
            title :"两种创建组件方式的对比"
        }
    }
    render(){
    return <div><p>--------------------{this.state.title}------------------</p></div>
    }
}
// 两种创建组件方式的对比
// 【function构造函数】------无状态组件，只有props，无生命周期函数----------用的少
// 【class关键字】------有状态组件，有私有数据state和传递数据props，还有生命周期函数-----------用的多
// ***两者本质区别是有无生命周期函数和私有数据state，构造函数运行效率稍高

// 组件中的props和state/ data的区别
// props中的数据都是外界传递过来的；只读的不能重新赋值
// state/data中的数据都是组件私有，（通过Ajax获取的数据，一般都是私有数据）；可读可写
