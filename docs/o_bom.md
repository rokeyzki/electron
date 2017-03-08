### Page
* 打开：window.open()

```javascript
window.open('http://oulve.com'); // 默认新窗口打开链接：_blank
window.open('http://oulve.com', '_self'); // 当前窗口打开链接
```

* 关闭：window.close();

```javascript
window.close();
```

### AJAX
* 实例

```javascript
var xhr = new XMLHttpRequest();
```

* GET

```javascript
xhr.open("GET", "url?a=1&b=2", true);
xhr.send();
```

* POST

```javascript
xhr.open("POST", "url", true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("a=1&b=2");
```

* 监听

```javascript
xhr.onreadystatechange = function(){
  if(this.readyState == 4){
    if(this.status == 200){
      console.log(JSON.parse(this.responseText));
    }else{
      console.log("error: " + this.status);
    }
  }
};
```

### URI
* 编码：window.encodeURIComponent()

```javascript
encodeURI(url);
encodeURIComponent(value);
```

* 解码：window.decodeURIComponent()

```javascript
decodeURI(url);
decodeURIComponent(value);
```

### BASE64 (IE10+ && Not CN)
* 编码：window.btoa()

```javascript
btoa("123abc") // "MTIzYWJj"
```

* 解码：window.atob()

```javascript
atob("MTIzYWJj") // 123abc
```

### Data
* 临时：window.sessionStorage()

```javascript
sessionStorage.setItem('foo', 123);
console.log(sessionStorage.getItem('foo')); // 123
sessionStorage.removeItem('foo');
sessionStorage.clear();
```

* 永久：window.localStorage()

```javascript
localStorage.setItem('foo', 123);
console.log(localStorage.getItem('foo')); // 123
localStorage.removeItem('foo');
localStorage.clear();
```

### Timer
* 延迟：window.setTimeout()

```javascript
var foo = setTimeout("alert(1)", 3000);
clearTimeout(foo);
```

* 间隔：window.setInterval()

```javascript
var foo = setInterval(function(){
  alert(1);
}, 3000);
clearInterval(foo);
```

### History
* 历史：window.history

```javascript
history.go(1);
history.go(0);
history.go(-1);
```
