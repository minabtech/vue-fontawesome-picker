## value

Contains the currently selected value. Very similar to a
`value` attribute on an `<input>`. You can listen for changes
using `input` event using v-on.

```js
value: {
	default: undefined
},
```

## is-unicode

Enable/disable emitting unicode when icon is selected

```js
isUnicode: {
	type: [Boolean, String],
	default: false
},
```

## is-both

Enable/disable emitting both class and unicode when icon is selected

```js
isBoth: {
	type: [Boolean, String],
	default: false
},
```

## items-per-page

Controls number of icons per page

```js
itemsPerPage: {
	type: Number,
	default: 36
},
```

## close-on-container-click

Close the the vue font awesome picker modal when the container is clicked

```js
closeOnContainerClick: {
	type: Boolean,
	default: true
},
```

## width

Controls modal width

```js
width: {
	type: String,
	default: "80%"
}
```

## height

Controls modal height

```js
height: {
	type: String,
	default: "70%"
}
```

## only

Allows limiting listed icons to font awesome subsets

```js
only: {
	type: Array,
	default: ["solid", "regular", "brands"]
}
```

## searchable

Enable/disable filtering the icons.

```js
searchable: {
	type: Boolean,
	default: true
},
```
