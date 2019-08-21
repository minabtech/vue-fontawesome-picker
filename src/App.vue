<template>
  <div id="app">
    <vfa-picker :only="['brands']" is-both="true" @input="both">
      <template v-slot:activator="{ on }">
        <input @click="on" v-model="v" />
        <input @click="on" v-model="u" />
      </template>
    </vfa-picker>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      v: undefined,
      u: undefined
    };
  },
  methods: {
    both(icon) {
      this.v = icon.class;
      this.u = icon.unicode;
    }
  }
};
</script>
