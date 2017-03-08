## 类库 Underscore - 数据类型 - 判断方法
### _.isEmpty

```javascript
_.isEmpty(null) // => true
```

### _.isNull

```javascript
console.log(_.isNull(undefined)); // => false
console.log(_.isNull(null)); // => true
```

### _.isUndefined

```javascript
console.log(_.isUndefined(undefined)); // => true
console.log(_.isUndefined(null)); // => false
```

### _.isBoolean

```javascript
_.isBoolean(false); // => true
```

### _.isNumber

```javascript
_.isNumber(8.4 * 5); // => true
```

### _.isString

```javascript
_.isString('abc'); // => true
```

### _.isObject

```javascript
_.isObject({}); // => true
_.isObject(1); // => false
```

### _.isArray

```javascript
_.isArray({}); // => false
_.isArray([]); // => true
```

### _.isFunction

```javascript
_.isFunction(alert); // => true
```

### _.isDate

```javascript
_.isDate({}); // => false
_.isDate(new Date()); // => true
```

## 类库 Underscore - 数据类型 - 对象方法
### _.extend

```javascript
var foo = _.extend({'a': 1}, {'b': 2});
// => { 'a': 1, 'b': 2 }
var foo = _.extend({}, {'a': 1}, {'b': 2});
// => { 'a': 1, 'b': 2 }
```

## 类库 Underscore - 数组 - 索引方法
### _.indexOf

```javascript
_.indexOf([1, 2, 3], 2); // => 1
_.indexOf([1, 2, 3], 5); // => -1
```

## 类库 Underscore - 数组 - 比较方法
### _.difference

```javascript
_.difference([1, 2, 3, 4, 5], [5, 2, 10]); // => [1, 3, 4]
```

## 类库 Underscore - 数组 - 去重方法
### _.uniq

```javascript
_.uniq([1, 2, 1, 3, 1, 4]); // => [1, 2, 3, 4]
```

## 类库 Underscore - 集合 - 属性方法
### _.size

```javascript
_.size([1, 2, 3]); // => 3
_.size({ 'a': 1, 'b': 2 }); // => 2
```

## 类库 Underscore - 集合 - 遍历方法
### _.each

```javascript
_.each([1, 2, 3], function(value, key) {
  console.log(key);
});
// => 0 1 2
_.each({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
// => 'a' 'b'
```

## 类库 Underscore - 集合 - 映射方法
### _.map

```javascript
function square(n) {
  return n * n;
}
_.map([4, 8], square);
// => [16, 64]
```

### _.invoke

```javascript
_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
// => [[1, 5, 7], [1, 2, 3]]
_.invoke([123, 456], String.prototype.split, '');
// => [['1', '2', '3'], ['4', '5', '6']]
```

## 类库 Underscore - 集合 - 归类方法
### _.countBy

```javascript
_.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
```

### _.groupBy

```javascript
_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
```

### _.indexBy

```javascript
var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];
_.indexBy(array, 'dir');
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
_.indexBy(array, function(o) {
  return String.fromCharCode(o.code);
});
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
```

### _.partition

```javascript
var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];
_.partition(users, function(o) { return o.active; });
// => objects for [['fred'], ['barney', 'pebbles']]
_.partition(users, { 'age': 1, 'active': false });
// => objects for [['pebbles'], ['barney', 'fred']]
_.partition(users, ['active', false]);
// => objects for [['barney', 'pebbles'], ['fred']]
```

## 类库 Underscore - 集合 - 查找方法
### _.find

```javascript
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
_.find(users, function(o) { return o.age < 40; });
// => object for 'barney'
_.find(users, { 'age': 1, 'active': true });
// => object for 'pebbles'
_.find(users, { 'active': false });
// => object for 'fred'
_.find(users, 'active');
// => object for 'barney'
```

## 类库 Underscore - 集合 - 过滤方法
### _.filter

```javascript
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
_.filter(users, function(o) { return o.age < 40; });
// => objects for ['barney', 'pebbles']
_.filter(users, { 'age': 36, 'active': true });
// => objects for ['barney']
_.filter(users, { 'active': false });
// => objects for ['fred']
_.filter(users, 'active');
// => objects for ['barney', 'pebbles']
```

### _.reject

```javascript
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];
_.reject(users, function(o) { return !o.active; });
// => objects for ['fred']
_.reject(users, { 'age': 40, 'active': true });
// => objects for ['barney']
_.reject(users, { 'active': false });
// => objects for ['fred']
_.reject(users, 'active');
// => objects for ['barney']
```

## 类库 Underscore - 集合 - 随机方法
### _.sample

```javascript
_.sample([1, 2, 3, 4]); // => 2
```

## 类库 Underscore - 集合 - 迭代方法
### _.reduce

```javascript
_.reduce([1, 2], function(sum, n) {
  return sum + n;
}, 0);
// => 3
```

### _.reduceRight

```javascript
var array = [[0, 1], [2, 3], [4, 5]];
_.reduceRight(array, function(flattened, other) {
  return flattened.concat(other);
}, []);
// => [4, 5, 2, 3, 0, 1]
```

## 类库 Underscore - 集合 - 排序方法
### _.shuffle

```javascript
_.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
```

### _.sortBy

```javascript
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
```

## 类库 Underscore - 集合 - 判断方法
### _.every

```javascript
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];
_.every(users, { 'user': 'barney', 'active': false });
// => false
_.every(users, { 'active': false });
// => true
_.every(users, 'active');
// => false
```

### _.some

```javascript
var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];
_.some(users, { 'user': 'barney', 'active': false });
// => false
_.some(users, { 'active': false });
// => true
_.some(users, 'active');
// => true
```

## 类库 Underscore - 函数 - 参数方法
### _.partial

```javascript
function foo(x, y){
  return `${x} ${y}`;
}
var fooPartial = _.partial(foo, 'hello');
console.log(fooPartial('world')); // hello world
var fooPartial = _.partial(foo, _, 'hello'); // 使用_占位符
console.log(fooPartial('world')); // world hello
```

## 类库 Underscore - 函数 - 次数方法
### _.once

```javascript
function foo(type, x){
  return `${type}:${x}`;
}
var fooOnce = _.once(foo);
console.log(fooOnce('once', 1)); // => once:1
console.log(fooOnce('once', 2)); // => once:1
console.log(fooOnce('once', 3)); // => once:1
console.log(fooOnce('once', 4)); // => once:1
console.log(fooOnce('once', 5)); // => once:1
```

### _.before

```javascript
function foo(type, x){
  return `${type}:${x}`;
}
var fooBefore = _.before(3, foo);
console.log(fooBefore('before', 1)); // => before:1
console.log(fooBefore('before', 2)); // => before:2
console.log(fooBefore('before', 3)); // => before:2
console.log(fooBefore('before', 4)); // => before:2
console.log(fooBefore('before', 5)); // => before:2
```

### _.after

```javascript
function foo(type, x){
  return `${type}:${x}`;
}
var fooAfter = _.after(3, foo);
console.log(fooAfter('after', 1)); // => undefined
console.log(fooAfter('after', 2)); // => undefined
console.log(fooAfter('after', 3)); // => after:3
console.log(fooAfter('after', 4)); // => after:4
console.log(fooAfter('after', 5)); // => after:5
```

## 类库 Underscore - 函数 - 时间方法
### _.delay

```javascript
function foo(x){
  alert(x);
}
_.delay(foo, 3000, '1'); // 延迟3000毫秒后执行
_.delay(foo, 2000, '2'); // 前一个delay执行完后，再延迟2000毫秒后执行
_.delay(foo, 1000, '3'); // 前两个delay执行完后，再延迟1000毫秒后执行
```

### _.debounce

```javascript
function foo(x){
  alert(x);
}
var fooDebounce = _.debounce(foo, 3000);
fooDebounce('test'); // 延迟3000毫秒后执行，并且接下去3000毫秒内不再执行相同函数
fooDebounce('test'); // 不执行
fooDebounce('test'); // 不执行
fooDebounce('test'); // 不执行
fooDebounce('test'); // 不执行
```

### _.throttle

```javascript
function foo(x){
  alert(x);
}
var fooThrottle = _.throttle(foo, 3000, { 'trailing': false }); // 一定要添加参数{ 'trailing': false }
fooThrottle('test'); // 立即执行，并且接下去3000毫秒内不再执行相同函数
fooThrottle('test'); // 不执行
fooThrottle('test'); // 不执行
fooThrottle('test'); // 不执行
fooThrottle('test'); // 不执行
```
