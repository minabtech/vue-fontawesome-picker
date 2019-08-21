<template>
  <vfa-picker v-model="u" is-unicode="true">
    <template v-slot:activator="{ on }">
      <input v-model="u" @click="on" placeholder="Icon Unicode" type="text" />
    </template>
  </vfa-picker>
</template>

<script>
export default {
    name: "BasicUnicodeExample",
    data() {
      return {
        u: undefined
      }
    }
}
</script>