import React,{Component} from 'react';
import listCss from './css/list.module.css' //TODO

console.log(listCss)
// import './css/list.css'
//【一个思路】-------css文件本来不可以export导出的，在加了module模块化便可以相当于对外暴露（导出）了css文件

//定义无状态无私有数据的子组件
function ComItem(props){
    // return <div key={props.id}>此时组建内部的id无意义
    return <div>
        <h2 className={listCss.person}>评论人：{props.user}</h2>
        <p className="title">评论内容：{props.content}</p>
        </div>
}
//【react组件之间样式污染问题】---------------css-module---样式模块化----类似于vue组件的scope
// 使用create-react-app创建的项目,默认情况下就支持css-module
// 1、样式文件必须以[name].module.css或[name].module.scss的形式命名
// 2、以变量的形式导入样式文件，比如 import styles from './style.module.css';
// 3、className以变量引用的方式添加，比如 className={ styles.title }


//样式污染问题解决方案2，在webpack.config.js文件的css-loader后加module

// 【*注意*】
/* css模块化只会对类选择器和id选择器生效 */
/* css模块化对标签选择器无效 */






// 定义父组件
export default class List extends Component{
    constructor(){
        super()
        this.state={
            commentList:[
                {id:1,user:"张三",content:"可以不错"},
                {id:2,user:"李四",content:"sdasdas以不错"},
                {id:3,user:"小米",content:"可asdasdas以不错"},
                {id:4,user:"华为",content:"可asdasd以不错"},
                {id:5,user:"三星",content:"可dsdasda以不错"},
            ]
        }
    }
    render(){
        
    // return <div>{this.state.commentList.map(item =><div key={item.id}><h2 >评论人：{item.user}</h2><p>评论内容：{item.content}</p></div>  )}</div>


    //把评论item项抽离为一个无状态的子组件
    //jsx语法行内样式写法<p style={{color:'red'}}></p>   双大括号形式
    return <div><p>这是评论列表组件</p>{this.state.commentList.map(item =><ComItem {...item} key={item.id}></ComItem>)}</div>

    }
}


// jsx三种样式写法形式
// 1.行内样式------<p style={{color:'red'}}></p>   双大括号形式
// 2.组件内封装形式------const pStyle ={color:'red',border:'1px solid'}
// 3.css样式表形式------单独写css文件，然后import进组件 import './xxx.css' ，添加类名<h2 className="person">评论人</h2>


//【踩坑之-------creat-react-app后文件目录内没有webpack.config.js等文件】
//【解决方法】---------npm run eject

