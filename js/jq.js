

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

