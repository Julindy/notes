
## 1.高度和宽度  

> box-sizing:content-box
### 1.clientWidth clientHeight
- clientWidth = content- 滚动条宽度(17px) + padding * 2

> 导致这个属性用处不大

### 2.offsetWidth offstHeight
- offsetWidth = content + padding * 2 + border * 2

### 3.scrollWidth scrollHeight
- 当前元素是否有横向滚动条，有：当前元素padding * 2 + 子元素margin * 2 + border * 2 + padding * 2 + content；没有：当前元素padding * 2 + content

### 4.window.innerWidth
- 浏览器显示代码区域宽度

### 5.window.outerWidth
- 浏览器整个宽度

### window.screen.width
- 屏幕的宽度

### window.screen.availWidth
- 除去系统状态栏后的屏幕宽度

## 2.top和left
### 2.1 clientTop clientLeft
- clientTop = 自己的border宽度 + 滚动条宽度
### 2.2 offsetTop offsetLeft
- offsetTop = 相对于上一个有位置的元素的top + 自己的margin-top
### 2.3 scrollTop scrollLeft
- 当前元素有滚动动条 ? 滚动条滚动的距离 : 0;