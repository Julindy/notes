### 1.获取单个元素
> 返回element
```
document.documentElement
document.body
document.getElementById
document.querySelector
```
### 2.获取 HTML Collection
> 返回element集合
```
document.getElementsByClassName
document.getElementsByTagName
document.querySelectorAll
```

### 3.获取元素的子节点(文本节点、注释节点)
> 返回nodeList
```
document.body.childNodes
```
> 返回node
```
document.body.firstChild
document.body.lastChild
```
### 4.获取元素的父节点(文本节点、注释节点)
> 返回node
```
document.body.parentNode
```
### 5.获取元素的兄弟节点(文本节点、注释节点)
> 返回node
```
document.body.nextSibling
document.body.previousSibling
```

### 6.获取元素的子元素(元素)
> 返回element集合
```
document.body.children
```
> 返回element
```
// 好像是 ie12+ 支持
document.body.firstElementChild
document.body.lastElementChild
```
### 7.获取元素的父元素(元素)
> 返回element
```
document.body.parentElement
```
### 8.获取元素的兄弟元素
> 返回element
```
document.body.nextElementSibling
document.body.previousElementSibling
```

### 9.向元素的尾部插入节点，删除节点，替换节点
document.body.appendChild
document.body.removeChild
document.body.replaceChild(newNode,oldNode)
### 10.插入节点在指定节点之前
```
document.body.insertBefore(newElement,existElement)
```

### 11.修改元素内容
```
document.body.innerHTML
document.body.innerText
```

### 12.元素上属性
document.body.attributes
document.body.hasAttributes()
document.body.hasAttribute('class')
document.body.setAttribute(name,value)
document.body.setAttributeNode(node)
document.body.removeAttribute(name)
document.body.removeAttributeNode(node)

### 13.添加事件，移除事件
```
document.body.addEventListener("click",function(){})
document.body.removeEventListener("click",function(){})
```

### 14.获取，修改class
```
document.body.classList
document.body.className
```

