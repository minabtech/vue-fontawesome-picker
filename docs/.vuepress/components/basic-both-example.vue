<template>
  <vfa-picker is-both="true" v-bind.sync="category">
    <template v-slot:activator="{ on }">
      <input v-model="category.class" @click="on" placeholder="Icon Class" type="text" />
      <input v-model="category.unicode" @click="on" placeholder="Icon Unicode" type="text" />
    </template>
  </vfa-picker>
</template>

<script>
export default {
    name: "BasicBothExample",
    data() {
      return {
          category: {
              class: undefined,
              unicode: undefined
          }
      }
    }
}
</script>