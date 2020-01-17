console.log("----------------------ES6之extends关键字---------------------")
    //可以把父类理解为原型对象prototype
    //父类
class Person {
    constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        //打招呼的实例方法
    sayHello() {
        console.log("hello")
    }
}
//子类
//在class使用extends实现子类继承父类

// 问题1： 为什么一定要在constructor中调用super
// 答案：因为，如果一个子类，通过extends关键字继承了父类，那么在，子类的constructor构造函数中，必须，优先调用一下super()
// 问题2：super是什么东西？
// 答案： super是一个函数，而且它是父类的构造器，子类中的super，其实就是父类中，constructor构造器的一个引用
// 问题3：为什么调用了super()之后,a1实例的name和age否变成可undefined了？
// 答案：因为没有传递值

class American extends Person {
    // eslint-disable-next-line no-useless-constructor
    constructor(name, age) {
        super(name, age)
    }
}
const a1 = new American('JACK', 10)
console.log(a1)
a1.sayHello() //调用父类方法
    //子类
class Chinese extends Person {
    //IDnumber是chinese类独有的属性，只需在constructor中传值，在父类super中无需传值
    constructor(name, age, IDnumber) {
        super(name, age);

        //语法规范：this要在super之后使用
        this.IDnumber = IDnumber;
    }
}
const c1 = new Chinese('张三', 20, '1000119450609')
console.log(c1)