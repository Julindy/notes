## `BFC`(`Block formatting context`)块级格式化上下文
>**解析：** 块级指的是内在盒子为`block box`； 格式化指的是统一的规则； 上下文指的是环境作用域

### `BFC`的作用域
>`class`名为`.BFC`代表创建了新的块格式化上下文
```
  <div id='div_1' class='BFC'>
      <div id='div_2'>
          <div id='div_3'></div>
          <div id='div_4'></div>
      </div>
      <div id='div_5' class='BFC'>
          <div id='div_6'></div>
          <div id='div_7'></div>
      </div>
  </div>
```
>这段代码表示，`#div_1`创建了一个块格式上下文，这个上下文包括了`#div_2`、`#div_3`、`#div_4`、`#div_5`。即`#div_2`中的子元素也属于`#div_1`所创建的`BFC`。但由于`#div_5`创建了新的BFC，所以`#div_6`和`#div_7`就被排除在`#div_1`所创建的`BFC`之外。<br>**注意`#div_1`所创建的`BFC`并不包括`#div_1`**

### `BFC`的创建方法
1. **根元素**或其它包含它的元素
2. 浮动元素 (`float`不为`none`的元素)
3. 绝对定位元素 (元素的`position`为`absolute`或`fixed`)
4. `inline-blocks`(元素的 `display: inline-block`)
5. 表格单元格(元素的`display: table-cell`，HTML表格单元格默认属性)
6. `overflow`的值不为`visible`的元素
7. 弹性盒 `flex boxes` (元素的`display: flex`或`inline-flex`)

### `BFC`的规则（特性）
1. 内部的盒（`block box` 块级盒）会在垂直方向一个接一个排列（可以看作`BFC`中有一个的常规流）
2. 处于同一个`BFC`中的元素相互影响，可能会发生`margin`重叠。两个上下相邻的BFC之间重不重叠要看具体情况，如`display: inline-block` `float: left`不会重叠，而`overflow: hidden`则会重叠。
3. 每个元素的`margin box`的左边，与容器块`border box`的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此
4. `BFC`就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然
5. 计算`BFC`的高度时，考虑`BFC`所包含的所有元素，连浮动元素也参与计算
6. `float box`(浮动盒)区域不叠加到其他的`BFC`上

### 从实际代码来分析`BFC`
- 特性 1: <html>是BFC，所以我们平常写的div p都是垂直方向一个接一个排列。
- 特性 2: <html>是BFC，所以里面的元素垂直方向的margin会发生重叠。

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      html {
        margin: 20px;
      }
      .wrap {
        width: 100px; height: 400px; background-color: aqua;
        float: left;
      }
      .wrap-1 {
        width: 200px; height: 200px; background-color: antiquewhite;
      }
    </style>
  </head>
  <body>
    <div>
      <div class="wrap"></div>
      <div class="wrap-1"></div>
    </div>
  </body>
</html>
```
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      html {
        margin: 20px;
      }
      .wrap {
        width: 100px; height: 400px; background-color: aqua;
      }
      .wrap-1 {
        width: 200px; height: 200px; background-color: antiquewhite;
        float: left;
      }
    </style>
  </head>
  <body>
    <div>
      <div class="wrap"></div>
      <div class="wrap-1"></div>
    </div>
  </body>
</html>
```
- 特性 3：`html`触发`BFC`，`margin box`的左边，与容器块`border box`的左边相接触
- 特性 5：`html`触发`BFC`，`body`没触发`BFC`，`body`高度不计算`float box`，`HTML`高度计算`float box`
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      html {
        margin: 20px;
      }
      .wrap {
        height: 200px; 
      }
      .left {
        width: 200px; height: 100%; background-color: antiquewhite;
        float: left;
      }
      .right {
        height: 100%; background-color: aqua;
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <div>
      <div class="wrap">
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </div>
  </body>
</html>
```
- 特性 6：`float: left;` `overflow: hidden;`分别触发BFC,他俩不重叠

### 用途
1. 高度塌陷
2. 一列固定一列自适应布局