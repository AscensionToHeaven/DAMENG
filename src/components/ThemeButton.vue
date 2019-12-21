<template>
  <div class="theme-button">
    <div
      class="theme-button--item"
      :class="{ 'theme-button--item-selected': item.value === value }"
      v-for="item in data"
      :key="item.value"
      @click="handleClick(item)"
      :style="{ backgroundColor: item.color }"
    >
      {{item.text}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    value: null,
  },
  methods: {
    handleClick(item) {
      this.$emit('change', item.value);
    },
  },
};
</script>
<style lang="less">
  .theme-button {
    display: inline-flex;
    vertical-align: middle;
  }
  .theme-button--item {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 4px solid #ccc;
    border-radius: 4px;
    margin: 0 4px;
  }
  .theme-button--item.theme-button--item-selected {
    width: 28px;
    height: 28px;
    border: none;
  }
</style>
