### Object上的几个操作方法
1. `Object.getOwnPropertyDescriptor(obj, prop)`方法获取obj对象的prop属性的描述对象
2. `Object.defineProperty(obj, prop, descriptor)`方法直接在对象上定义一个指定描述对象的新属性，或修改一个对象的现有属性。返回该对象
3. `Object.defineProperties(obj, props)`方法直接在对象上定义多个指定描述对象的新属性，或修改多个对象的现有属性。返回该对象
4. `Object.setPrototypeOf(obj, prototype)`方法给一个对象设置指定原型对象
5. `Object.getPrototypeOf(obj)`方法返回该对象的原型
6. `__proto__`：返回或设置对象的原型对象
7. `Object.create(prototype[, propertiesObject])`使用指定的原型对象和属性创建一个新对象。
### 4个操作会忽略enumerable为false的属性
1. `for...in`循环：遍历对象自身的，继承的可枚举的属性
2. `Object.keys()`：返回对象自身的可枚举的属性的键名
3. `JSON.stringify()`：串行化对象自身的可枚举的属性
4. `Object.assign()`：拷贝对象自身的可枚举的属性

### ES6 一共有 5 种方法可以遍历对象的属性
1. `for...in`循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）
2. `Object.keys`返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
3. `Object.getOwnPropertyNames`返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
4. `Object.getOwnPropertySymbols`返回一个数组，包含对象自身的所有 Symbol 属性的键名。
5. `Reflect.ownKeys`返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

>以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。
>- 首先遍历所有数值键，按照数值升序排列。
>- 其次遍历所有字符串键，按照加入时间升序排列。
>- 最后遍历所有 Symbol 键，按照加入时间升序排列。

### super关键字
指向当前对象的原型对象。
>注意，super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。只有对象方法的简写法可以让 JavaScript 引擎确认，定义的是对象的方法。

- `super.foo`
- `Object.getPrototypeOf(this).foo`（属性）
- `Object.getPrototypeOf(this).foo.call(this)`（方法）
### 两个值是否相等
#### ES5
1. `==` 缺点：自动转换数据类型
2. `===` 缺点：`NaN`不等于自身，以及`+0`等于`-0`
#### ES6
1. `Object.is()` 与`===`的行为基本一致,不同之处只有两个：一是`+0`不等于`-0`，二是`NaN`等于自身。