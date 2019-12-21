<template>
  <div class="radio-button">
    <div
      class="radio-button--item"
      :class="{ 'radio-button--item-selected': item.value === value }"
      v-for="item in data"
      :key="item.value"
      @click="handleClick(item)"
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
  .radio-button {
    display: inline-flex;
    overflow: hidden;
    vertical-align: middle;
  }
  .radio-button--item {
    cursor: pointer;
    padding: 4px 8px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    &:first-child {
      border-left: 1px solid #ccc;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-right: 1px solid #ccc;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    & + & {
      border-left: 1px solid #ccc;
    }
  }
  .radio-button--item.radio-button--item-selected {
    color: #fff;
    border-left: 1px solid;
    border-right: 1px solid;
    background-color: #00a4a4;
    border-color: #00a4a4;
    & + .radio-button--item {
      border-left: none;
    }
  }
</style>
