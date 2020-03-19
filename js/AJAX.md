```
var xhr;
if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest()
} else {
  xhr = new ActiveXObject("Microsoft.XMLHTTP"); // IE5 IE6
}

xhr.open(method, url, isAsync)
xhr.setRequestHeader("","")
xhr.send(data)

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200 ) {
    xhr.statusText
    xhr.responseText
    xhr.responseXML
    xhr.getResponseHeader()
    xhr.getAllResponseHeader()
  }
}

```