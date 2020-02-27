### Iterator 的作用
1. 是为各种数据结构(Array, Object, Set, Map)，提供一个统一的、简便的访问接口；
2. 是使得数据结构的成员能够按某种次序排列；
3. 是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。
### Iterator 的遍历过程
1. 创建一个指针对象，指向当前数据结构的起始位置。
2. 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
3. 第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
4. 不断调用指针对象的next方法，直到它指向数据结构的结束位置。
>也就是说，遍历器对象本质上，就是一个指针对象。
)`：不使用，配合Generator函数使用
### 部署
默认部署在`Symbol.iterator`(具备此属性被认为可遍历的iterable)
### 数据结构
- 集合：Array、Object、Set、Map
- 原生具备接口的数据结构：String、Array、Set、Map、TypedArray、Arguments、NodeList
### 遍历器（Iterator）接口
1. 默认的 Iterator 接口部署在数据结构的`Symbol.iterator`属性
2. 一个数据结构只要具有`Symbol.iterator`属性，就可以认为是“可遍历的”
3. `Symbol.iterator`属性本身是一个函数，就是当前数据结构默认的遍历器生成函数
4. `Symbol.iterator()`执行这个函数，就会返回一个遍历器
### 遍历器对象
1. `next()`：下一步操作，返回{ done, value }(必须部署)
2. `return()`：for-of提前退出调用，返回{ done: true }
3. `throw(