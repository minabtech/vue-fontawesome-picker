## `input`

Triggered when the selected value changes. Used internally for `v-model`.

```js
/**
 * @param val {Object|String}` - selected icon class name, unicode value
 * or both depending on props.
 */
this.$emit("input", icon.class);

// or

this.$emit("input", icon.unicode);

// or

this.$emit("input", {
    class: icon.class,
    unicode: icon.unicode
});
```