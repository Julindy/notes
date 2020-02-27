### 总结

1. 参数为function的数组方法，forEach()、filter()、find()、findIndex()、map()、some()、every()；只有forEach() 的参数function没有return，其它都有
2. map()、every()、some() 返回的是return 表达式的执行结果
3. filter()、find()、findIndex() 返回的是return 表达式执行结果为true时的数组元素
4. 改变原数组的方法只要七个push()、pop()、shift()、unshift()、sort()、reverse()、splice()，其他方法都不改变原数组
5. 每个对象都有valueOf()、toString()、toLocalString()方法，数组继承了对象，数组也有这三个方法；默认情况下返回的都是 以逗号拼接的字符串
6. 每个对象都有entries()、keys()、values()方法，数组继承了对象，数组也有这三个方法；返回Iterator （可以用for of遍历），默认遍历values()
7. concat() 多个数组的拼接，slice() 单个数组的剪切
8. 判断对象是否为数组，使用Array.isArray() 方法
6. join() 通过指定的分隔符将数组转换成字符串
7. 检查元素在数组中的位置使用 indexOf()、lastIndexOf()
8. 检查数组是否包含某一元素，使用includes() 
9. 将有length属性的对象转化成数组，使用Array.from()
10. 数组的累加reduce()、reduceRight()；高级用法见详细

### 1.forEach()

```
var arr = [1, 2, 3, 4, 5]
var r = arr.forEach(function(item, index, self) {
  console.log('item', item)       // 依次打印1, 2, 3, 4, 5
  console.log('index', index)     // 依次打印0, 1, 2, 3, 4
  console.log('self', self)       // self就是变量arr
  console.log('this', this)       // this就是Window
  return item >= 2
}, undefined)
console.log(r)                    // undifined
console.log(arr)                  // [1, 2, 3, 4, 5]
```

- [].forEach()
- forEach 参数是function, context
- 参数function的参数 item index self
- 参数function 里的this默认情况下为Window undifined
- 不能有return，存在也无意义
- 无返回值
- 不改变原数组

**用途：仅仅是对数组进行遍历。**

### 2. filter()
```
var arr = [1, 2, 3, 4, 5]
var r = arr.filter(function(item, index, self) {
  console.log('item', item)       // 依次打印1, 2, 3, 4, 5
  console.log('index', index)     // 依次打印0, 1, 2, 3, 4
  console.log('self', self)       // self就是变量arr
  console.log('this', this)       // this就是Window
  return item >= 2
}, undefined)
console.log(r)                    // [2, 3, 4, 5]
console.log(arr)                  // [1, 2, 3, 4, 5]
```

- [].filter()
- filter 参数是function, context
- 参数function的参数 item index self
- 参数function 里的this默认情况下为Window undifined
- 必须有return，否则返回长度为0的空数组
- 有返回值，返回数组，或者空数组 
- 不改变原数组

**用途：过滤出满足条件的数组元素，组成新数组**

### 3.find()

```
var arr = [1, 2, 3, 4, 5]
var r = arr.find(function(item, index, self) {
  console.log('item', item)       // 打印1, 2
  console.log('index', index)     // 打印0, 1
  console.log('self', self)       // self就是变量arr
  console.log('this', this)       // this就是Window
  return item >= 2
}, undefined)
console.log(r)                    // 2
console.log(arr)                  // [1, 2, 3, 4, 5]
```

- [].find()
- find参数是function, context
- 参数function的参数 item index self
- 参数function 里的this默认情况下为Window undifined
- 必须有 return，返回第一个满足条件的元素；没有return相当于forEach，返回undifined
- 不改变原数组

**用途：寻找满足条件的第一个元素。**

### 4. map()

```
var arr = [1, 2, 3, 4, 5]
var r = arr.map(function(item, index, self) {
  console.log('item', item)       // 依次打印1, 2, 3, 4, 5
  console.log('index', index)     // 依次打印0, 1, 2, 3, 4
  console.log('self', self)       // self就是变量arr
  console.log('this', this)       // this就是Window
  return item >= 2
}, undefined)
console.log(r)                    // [false, true, true, true, true]
console.log(arr)                  // [1, 2, 3, 4, 5]
```

- [].map()
- map 参数是function, context
- 参数function的参数 item index self
- 参数function 里的this默认情况下为Window undifined
- 必须有return，否则返回 [undefined, undefined, undefined, undefined, undefined] 长度不变的undifined数组
- 有返回值，返回和原数组长度相同的数组
- 空数组不进行map
- 不改变原数组

**用途：map为‘映射’的意思，对元素组进行一对一的变更，返回数组长度不变。**




### 5.erery()

```
var arr = [1, 2, 3, 4, 5]
var r = arr.every(function(item, index, self) {
  console.log('item', item)       // 打印1
  console.log('index', index)     // 打印0
  console.log('self', self)       // self就是变量arr
  console.log('this', this)       // this就是Window
  return item >= 2
}, undefined)
console.log(r)                    // false
console.log(arr)                  // [1, 2, 3, 4, 5]
```

- [].every()
- 每一个都满足条件，返回true，有一个不满足返回false，并停止遍历
- every 参数是function, context
- 参数function的参数 item index self
- 参数function 里的this默认情况下为Window undifined
- 必须有return ，否则 false
- 有返回值，返回 true/false 
- 不改变原数组

**用途：检查数组里的每一个元素是否都满足指定条件。都符合返回true，否则返回false。**

### 6.some()

```
var arr = [1, 2, 3, 4, 5]
var r = arr.some(function(item, index, self) {
  console.log('item', item)       // 打印1, 2
  console.log('index', index)     // 打印0, 1
  console.log('self', self)       // self就是变量arr
  console.log('this', this)       // this就是Window
  return item >= 2
}, undefined)
console.log(r)                    // true
console.log(arr)                  // [1, 2, 3, 4, 5]
```

- [].some()
- 有一个满足条件，返回true，并且停止遍历，直到最后都不满足条件返回false
- some参数是function, context
- 参数function的参数 item index self
- 参数function 里的this默认情况下为Window undifined
- 必须有return，否则 false
- 有返回值，返回 true/false 
- 不改变原数组

用途：检查数组中的元素，是否有一个满足指定条件。与一个就返回true，停止遍历；都不满足返回false。


### 7. slice()

- [].slice()
- slice参数是start,end
- 两个参数都没有的话，返回原数组的深拷贝
- 只有第一个参数，返回index >= start 到结尾的数组
- 有第一个参数，第二个参数为负数，返回 index >= start 到 倒数第|第二个参数|个元素的数组
- 不改变原数组

**用途：做数组的剪切，和数组的深拷贝**

### 8. join()
- join() 把数组通过指定分隔符链接成字符串

**用途：数组转化成字符串**

### 9. indexOf()
- indexOf() 返回数组中元素在数组中的index索引值，元素不在数组中返回-1

**用途：判断元素是否在数组中**

### 10. includes()
- includes() 判断数组是否包含一指定的值，包含true，不包含false。

**用途：判断元素是否在数组中**

### 10. Array.isArray()
- Array.isArray() 判断一对象是否为数组，是true，不是false。

**用途：判断一对象是否为数组**

### 10. 改变原数组的几个方法
- splice(index, howmang, item1, ... itemX) 从index处开始删除howmang个元素，插入item1 ... itemX
- push() 向数组尾部插入元素，返回数组长度
- pop()  删除数组尾部元素，返回删除的元素
- unshift() 向数组头部插入元素，返回数组长度
- shift()     删除数组头部元素，返回删除的元素
- sort() 对数组进行排序，参数为function
- reverse() 对数组元素进行翻转 

**共同特点：改变原数组**

### 11. array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
- 数组的累加

### 12. 数组方法的一些小技巧
- 数组去重
```
var arr = [1, 2, 3, 2, 1, 9, 8]
var r = arr.filter((item, index) => arr.indexOf(item) === index)
```
- reduce 特殊用途
```
// @ts-check

/**
 * @type {{ [x: string]: ResponseParser }}
 */
export const buildinParsers = {}


/**
 * parse response with any parser function
 * @param {Response} res 
 * @param {Array<ResponseParser | string>} parsers 
 * @returns {Promise}
 */
export default function parseResponse(res, parsers = []) {
  return parsers
    .map(parser => {
      if (typeof parser === 'string') {
        return buildinParsers[parser]
      }
      if (typeof parser === 'function') {
        return parser
      }
    })
    .filter(id => id)
    .reduce((prev, parser) => {
      return prev.then(parser)
    }, Promise.resolve(res))
}

/**
 * parse response to json
 * @type {ResponseParser}
 * @param {Response} res
 * @returns {Promise}
 */
buildinParsers.parseJson = function(res) {
  return res.json()
}

/**
 * check response status
 * @type {ResponseParser}
 * @param {Response} res
 * @returns {Response}
 */
buildinParsers.checkStatus = function(res) {
  if (res.status !== 200) {
    throw new Error(`response status: ${res.status}`)
  }
  return res
}

const codeMap = {
  '-5006': '登录态校验失败',
  'dafault': '网络繁忙，请稍后再试',
}

/**
 * check retcode
 * @type {ResponseParser}
 * @param {T} res
 * @returns {T}
 */
buildinParsers.checkRetcode = function(res) {
  const { code, message } = res
  if (res.code !== 0) {
    const msg = codeMap[code] || message || codeMap.dafault
    throw new Error(msg)
  }
  return res
}

/**
 * get data param from response
 * @type {ResponseParser}
 * @param {T} res
 * @returns {T}
 */
buildinParsers.getData = function(res) {
  if (res.data === undefined) {
    throw new Error('no data in response')
  }
  return res.data
}
```


### 完 