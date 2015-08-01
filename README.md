# d3-group
D3.js plugin to simplify grouping and processing data.

## Example

The following will loop over the input, grouping together objects with the `name` property of `c` or `d`. Matching elements will be removed from the input, replaced with a new element that combines the `value` of all of the matches.

```js
var input = [
  {name: 'a', value: 15},
  {name: 'b', value: 12},
  {name: 'c', value: 37},
  {name: 'd', value: 41}
];
```
```js
var output = d3.group(input)
  .on(function(d) {
    return d.name === 'c' || d.name === 'd';
  })
  .combine(function(a) {
    var sum = d3.sum(function(d) {
      return d.value;
    });
    return {
      name: 'z',
      value: sum
    };
  });
```

`output` will contain:

```js
[
  ['a', 15],
  ['b', 12],
  ['z', 78]
]
```
