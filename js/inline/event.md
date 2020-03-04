### event的属性
1. `event.cancelable`
>返回一个布尔值。如果用 `event.preventDefault()` 方法可以取消与事件关联的默认动作，则为 true，否则为 false。
2. `event.defaultPrevented`
>返回一个布尔值，表明当前事件是否调用了 `event.preventDefault()`方法。调用了则为true，否则为false。
3. `event.preventDefault()`
>阻止事件的默认行为
4. `event.bubbles`
>返回一个布尔值,表明当前事件是否会向DOM树上层元素冒泡.
5. `event.stopPropagation()`
>阻止捕获和冒泡阶段中当前事件的进一步传播
6. `event.stopImmediatePropagation()`
>阻止事件冒泡并且阻止相同事件的其他侦听器被调用。
7. event.cancelBubble 
>`event.cancelBubble = true` 是 `event.stopPropagation()`的一个曾用名。在从事件处理程序返回之前将其值设置为true可阻止事件的传播。
8. event.target
>指向事件触发的元素
9.event.currentTarget
>指向事件绑定的元素