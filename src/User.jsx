// import React from 'react';   此种引用方式class的语法形式class User extends React.Component
import React,{Component} from 'react';


//创建组件方式1:利用构造函数function
//新建组件并导出
// export default function App() {
//     return (< div className="App"><p> 22222222222 </p></div>)
// }

//创建组件方式2：利用ES6语法中的class关键字
//使用class创建组件时必须要让组件继承  react的component
export default class User extends Component{
    //组件内部必须要有render函数   作用：渲染当前组件对应的虚拟dom
    render(){
        //render函数内部必须返回合法的jsx 虚拟dom结构
        return <div><p> user组件 </p></div>
    }
}