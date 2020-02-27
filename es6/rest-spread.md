**在ES6中。 三个点(...) 有2个含义。分别表示 扩展运算符(spread) 和 剩余运算符(rest 参数)**

### 总结
1. 扩展运算符用三个点号表示，功能是把数组或类数组对象展开成一系列用逗号隔开的值
2. rest运算符也是三个点号，不过其功能与扩展运算符恰好相反，把逗号隔开的值序列组合成一个数组

3. 当三个点(...)在等号左边，或者放在形参上。为 rest 运算符
当三个在等号右边，或者放在实参上，是 spread运算符

4. 放在被赋值一方是rest 运算符。放在赋值一方式 spread运算符

### 应用场景
1. spread运算符应用场景：函数的实参，数组的拼接，对象的合并，将字符串的每个字符分割成以逗号分割的形式

2. rest预算符实际应用场景：函数的形参，参数数量不确定的形参，数组的解构赋值


### 1. spread

 
将一个数组转为用逗号分隔的参数序列

```
/******************扩展运算符(spread)********************/

     //demo 1  传递数据代替多个字符串的形式
     function  test(a,b,c){
         console.log(a);
         console.log(b);
         console.log(c);
     }

     var arr = [1, 2, 3];
     test(...arr);   // 1 2 3


     //demo2 将一个数组插入到另一个数据中
     var arr1 = [1, 2, 3, 4];
     var arr2 = [...arr1, 4, 5, 6];
     console.log(arr2);  // [1, 2, 3, 4, 4, 5, 6]


     // demo3 数组合并
     var obj = {key: "key", key1: "key1", key2: "key2"};
     var obj2 = {...ogj, item: 'item', key: 'keykey'};
     console.log(obj2);  // {key: "keykey", key1: "key1", key2: "key2", item: "item"}


     //demo4  字符串转数据
     var str = 'loycoder';
     var arr3 = [...str];
     console.log(arr3);  // ["l", "o", "y", "c", "o", "d", "e", "r"]
```

### 2. rest

把逗号隔开的值序列组合成一个数组

```
 /******************剩余运算符(rest)********************/

  // demo1  当函数参数个数不确定时，用 rest运算符
    function rest01(...arr) {
        for (let item of arr) {
            console.log(item);
        }
    }
    rest01(1, 3, 5);  // 1 3 5

    // demo2 当函数参数个数不确定时的第二种情况
    function rest02(item, ...arr) {
        console.log(item);
        console.log(arr);
    }
    rest02(1, 2, 34);  // 1 [2, 34]

    // demo3 rest运算符配合 解构使用：
    var [a, ...temp]=[1, 2, 4];
    console.log(a);  // 1
    console.log(temp);  //[2, 4]
```
## 扩展运算符应用
1. 克隆数组：`const arr = [...arr1]`
2. 合并数组：`const arr = [...arr1, ...arr2]`
3. 拼接数组：`arr.push(...arr1)`
4. 代替apply：`Math.max.apply(null, [x, y]) => Math.max(...[x, y])`
5. 转换字符串为数组：`[..."hello"]`
6. 转换类数组对象为数组：`[...Arguments, ...NodeList]`
7. 转换可遍历对象为数组：`[...String, ...Set, ...Map, ...Generator]`
8. 与数组解构赋值结合：`const [x, ...rest/spread] = [1, 2, 3]`
9. 计算Unicode字符长度：`Array.from("hello").length => [..."hello"].length`

### 总结
1. 扩展运算符用三个点号表示，功能是把数组或类数组对象展开成一系列用逗号隔开的值
2. rest运算符也是三个点号，不过其功能与扩展运算符恰好相反，把逗号隔开的值序列组合成一个数组

3. 当三个点(...)在等号左边，或者放在形参上。是rest运算符
4. 当三个在等号右边，或者放在实参上，是spread运算符

5. 放在被赋值一方是rest运算符。放在赋值一方是spread运算符

### 完