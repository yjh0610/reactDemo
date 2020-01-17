console.log("----------------------ES6之class关键字---------------------")
    //es6中class是实现面向实现对象编程的新形式
function person(name, age) {
    this.name = name;
    this.age = age;
};
const p1 = new person("王志文", 10);
console.log(p1)
person.info = "people" //info属性直接挂载给了构造函数，不需要new，直接访问，所以叫静态属性
console.log(person.info)
    //通过new实例访问出来的属性叫做【实例属性】
    //通过构造函数访问出来的属性叫做【静态属性】
    //【实例方法】
person.prototype.say = function() {
    console.log("这是person的实例方法")
}
p1.say() //这是  实例方法
    //【静态方法】
person.show = function() {
    console.log("这是person的静态方法")
}
person.show()
console.log("--------------------华丽的分割线------------------")

//创建一个类
/*注意1  在class的{  }内  只能写  构造函数constructor（实例属性），静态方法和静态属性（用static定义），实例方法 */
/*注意2  class关键字内部还是按原来的构造函数执行的，所以把class称作语法糖 */

class Animal {

    //定义一个构造器：如果不写的时候会默认有一个构造器；
    //作用：每当new这个类的时候  必将优先执行构造器里的代码

    constructor(name, sex) {
            //实例属性
            this.name = name;
            this.sex = sex;
        }
        //在class内部  static修饰的就是静态属性---------------用的不多
    static info = "doggggg"

    //相当于在prototype构造原型对象上添加了方法
    //【实例方法】--------------------用的多
    jiao() {
            console.log("这是动物的实例方法")
        }
        //【静态方法】----------------------用得不多
    static show1() {
        console.log("这是动物的静态方法")
    }
};
const a1 = new Animal("小黄", "公")
console.log(a1)
console.log(a1.name) //实例属性
console.log(a1.sex) //实例属性
console.log(a1.info) //控制台会报undefined
console.log(Animal.info) //静态属性



a1.jiao() //这是实例方法
Animal.show1()