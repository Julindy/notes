## flex属性一览
### 容器属性
- flex-flow
  >`flex-flow = flex-direction + flex-wrap`; `flex-flow: row nowrap;`
- flex-direction
  >`flex-direction:row | column | row-reverse | column-reverse`修改主轴的方向，元素在主轴上排列
- flex-wrap
  >`flex-wrap: nowrap | wrap | wrap-reverse`可使得主轴上的元素不折行、折行、反向折行
- justify-content
  >`justify-content: flex-start | flex-end | center | space-between | space-around`定义了元素在主轴的对齐方式
- align-item
  >`align-items: flex-start | flex-end | center | baseline | stretch`定义了元素在交叉轴上的单行对齐方式。
- align-content
  >`align-content: flex-start | flex-end | center | space-between | space-around | stretch`定义了交叉轴上行的对齐方式
### 元素属性
- order
  >数值越小，排列越靠前，默认值为 `0`
  1. `flex: 1` = `flex: 1 1 0%`
      >**解释**：放大比例为1，说明设置为放大，缩小比例为1，没变化，弹性尺寸为0，宽度由内容宽度决定（width无效），同级其他元素放大比例为0，所以他自己撑满剩余未撑满的宽度；<br>**用途**：（容器宽度>元素总宽度时如何伸展），一列固定，一列自适应
  2. `flex: 2` = `flex: 2 1 0%`
      >同上
  3. `flex: auto` = `flex: 1 1 auto`;
      >只是宽度依次由width、内容宽度决定，其他同上。
  4. `flex: none` = `flex: 0 0 auto;`
      >**解释**：放大比例为0，没变化，缩小比例为0，说明他不缩小，弹性尺寸为auto，宽度依次由width、内容宽度决定，同级其他元素缩小比例为1，所以在同级元素压缩情况下他自己宽度不变；<br>**用途**：（容器宽度<元素总宽度时如何伸展），自己宽度不缩小
- flex
  >`flex = flex-grow + flex-shrink + flex-basis`
- flex-grow
  >放大比例（容器宽度>元素总宽度时如何伸展）,`flex-grow`默认为0，剩余宽度默认是不分配的
  1. 容器宽度`200px`，元素宽度分别`50px、100px`，`flex-grow`分别`3、2`
  2. 容器剩余宽度：`50px`
  3. 分成每份：`50px / (3+2) = 10px`
  4. 元素1放大为：`50px + 3 * 10 = 80px`
- flex-shrink
  >缩小比例（容器宽度<元素总宽度时如何收缩）,`flex-shrink`默认为1，超出宽度默认压缩
  1. 容器宽度`200px`，元素宽度分别`50px、100px、120px`,`flex-shrink`分别`1、1、1`
  2. 容器剩余宽度：`-70px`
  3. 缩小因子的分母：`1*50 + 1*100 + 1*120 = 270`(1为各元素flex-shrink的值)
  4. 元素1的缩小因子：`1*50/270`
  5. 元素1的缩小宽度为缩小因子乘于容器剩余宽度：`1*50/270 * (-70)`
  6. 元素1最后则缩小为：`50px + (1*50/270 *(-70)) = 37.03px`
- flex-basis
  >`flex-basis`设置的是元素在**主轴**上的初始尺寸，所谓的初始尺寸就是元素在`flex-grow`和`flex-shrink`生效前的尺寸；优先级高于`width/height`，`flex-basis`弹性尺寸 `width/height`刚性尺寸
  1. `flex-basis: auto`默认值为auto，如设置了width则元素尺寸由width决定；没有设置则由内容决定
  1. `flex-basis: 0`根据内容撑开宽度，如元素设置了width则width失效
  2. `flex-basis: 非0长度值`内容为非0长度值，如元素设置了width则width失效
- align-self
  >`align-items: flex-start | flex-end | center | baseline | stretch`给单个元素设置在交叉轴上的单行对齐方式；默认值为auto，继承父亲