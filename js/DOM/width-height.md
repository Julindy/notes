
## 1.高度和宽度  

### 1.clientWidth clientHeight
- clientWidth = content + padding * 2 - 滚动条宽度(17px)
- border以内（不算border），除去滚动条的宽度。
- 和子元素无关。
- $('').innerWidth() - 滚动条宽度
- 滚动条宽度 = $('').innerWidth() - clientWidth

### 2.offsetWidth offsetHeight
- offsetWidth = content + padding * 2 + border * 2
- 和子元素无关。
- $('').outerWidth()

### 3.scrollWidth scrollHeight
- 有滚动条：当前元素padding * 2 + 子元素margin * 2 + border * 2 + padding * 2 + content；
- 没有滚动条：则其scrollWidth等于clientWidth

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