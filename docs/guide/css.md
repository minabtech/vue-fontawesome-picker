Vue Font Awesome Picker offers many APIs for customizing the look and feel from the component. You can use
[scoped slots](../api/slots.md), or modify the built in
SCSS variables.

::: tip
Support for CSS variables (custom properties) is currently on the road map for those
that are not using sass in their projects.
:::

## SASS Variables

Variables are leveraged in as much of the component styles as possible. If you really want to dig
into the SCSS, the files are located in `src/components/vfa-picker/sass`. The variables listed below can be found at
[`src/components/vfa-picker/sass/_variables`](https://github.com/zolamk/vfa-picker/blob/master/src/components/vfa-picker/sass/_variables.sass).

All variables are implemented with `!default` in order to make them easier to override in your
application.

<<< @/src/components/vfa-picker/sass/\_variables.sass

## Overriding Default Styles

Vue Font Awesome Picker takes the approach of using selectors with a single level of specificity, while using
classes that are very specific to Vue Font Awesome Picker to avoid collisions with your app.

All classes within Vue Font Awesome Picker use the `vfa-` prefix.

In order to override a default property in your app, you should add one level of specificity.
The easiest way to do this, is to add `.vfa` before the `vfa-*` selector if you want to adjust
all instances of Vue Font Awesome Picker, or add your own classname if you just want to affect one.
