## `float`属性
### `float`属性的特性
1. 块状化并格式化上下文：块状是指元素设置`float: left`之后，其display的计算值就成了`block`。格式化上下文是指会创建一个BFC
2. 包裹性：即此时元素width会像height一样由子元素决定，而不是默认撑满父元素。
3. 没有任何margin合并
4. 脱离文档流：`float`设计的初衷就是为了“文字环绕图片”效果
    > 高度塌陷（自己不能撑起父元素，父元素高度为0）导致元素后面的非浮动块状元素会和其重叠，于是他就像脱离文档流了。<br>
    > 行框盒子（行内元素）不可与浮动元素重叠
### `clear`属性的特性
1. clear的定义是：元素盒子的边不能与前面的浮动元素相邻。也就是虽然浮动元素高度坍塌，但是设置了clear: both的元素却将其高度视为仍然占据位置。
```
  floatParent::after {
    content: "";
    display: block;
    clear: both;
  }
```
2. clear只能作用于块级元素
3. 其并不能解决后面元素可能发生的文字环绕问题。

[参考文章1](https://juejin.im/post/5ce607a7e51d454f6f16eb3d#heading-20)<br>
[参考文章2](https://juejin.im/post/59b73d5bf265da064618731d)