

$(selector).before(content);
$(target).insertBefore(selector);
$(selector).after(content);
$(target).insertAfter(selector);
$(selector).append(content);
$(selector).prepend(content);
$(content).appendTo(selector);
$(content).prependTo(selector);

$(selector).width(value);
$(selector).width();
$(selector).height(value);
$(selector).height();
$(selector).innerWidth();
$(selector).innerHeight();
$(selector).outerWidth(includeMargin);
$(selector).outerHeight(includeMargin);

$(selector).html();
$(selector).html(htmlString);
$(selector).text();
$(selector).text(textString);
$(selector).val();
$(selector).val(value);
$(selector).remove();
$(selector).empty();

$(selector).attr(attributeName);
$(selector).attr(attributeName, value);
$(selector).removeAttr(attributeName);
$(selector).attr(attributeName, function (index, attr) {});

$(selector).prop(property);
$(selector).prop(property, value);
$(selector).removeProp(property);
$(selector).prop(property, function (index, prop) {});

$(selector).addClass(className);
$(selector).hasClass(className);
$(selector).removeClass(className);
$(selector).toggleClass(className);
$(selector).css(propertyName, value);
$(selector).css({
  propertyName: value
});

$(selector).children(filter) // 沿着 DOM 树向下遍历单一层级
$(selector).contents() // 沿着 DOM 树向下遍历单一层级（包括被选元素的文本和注释节点）
$(selector).find(filter) // 遍历多个层级
$(selector).parent(filter) // 沿着 DOM 树向上遍历单一层级（不包括当前元素）
$(selector).closest(filter) // 沿着 DOM 树向上遍历单一层级（包括当前元素）
$(selector).parents(filter) // 遍历多个层级
$(selector).prev() // 被选元素的前一个同级元素
$(selector).next() // 被选元素的后一个同级元素
$(selector).filter(filter) // 返回符合一定条件的元素
$(selector).not(filter) // 返回不符合一定条件的元素
$(selector).has(filter) // 返回有filter的selector
$(selector).is(filter) // 返回是filter的selector
