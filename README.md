# d3-group
D3.js plugin to simplify grouping and processing data.

## Example

The following will loop over the input, grouping together objects with a `value` less than `30`. Matching elements will be removed from the input, replaced with a new element that combines the `value` of all of the matches.

```js
var a = [
	{name: 'A', value: 16},
	{name: 'B', value: 10},
	{name: 'C', value: 38},
	{name: 'D', value: 44},
	{name: 'E', value: 40},
	{name: 'F', value: 29},
	{name: 'G', value: 25}
];
```
```js
var output = d3.group()
	.entries(a)
	.on(function(d) {
		return d.value < 30;
	})
	.by(function(matches) {
		var sum = d3.sum(matches, function(d) {
			return d.value;
		});
		return {
			name: 'Other',
			value: sum
		};
	});
```
`output` will contain:
```js
[
  {name: 'C', value: 38},
  {name: 'D', value: 44},
  {name: 'E', value: 40},
  {name: 'Other', value: 80}
]
```
