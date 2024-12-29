<template>
  <div class="modal-overlay">
    <div class="rule-edit-container modal-content" @click.self="close">
        <div class="rule-title">Edit Rule</div>
        <div class="rule-item-name">Rule Name</div>
        <input class="rule-item-value" placeholder="{{}}">
        <div class="rule-item-name">Regular Expression</div>
        <input class="rule-item-value" placeholder>
      <div class="rule-button-frame" @click="close">
        <div class="rule-button-save">Save Change</div>
      </div>
    </div>
  </div>
</template>

<style>
.rule-edit-container {
  align-items: start;
  display: flex;
  width: 512px;
  max-width: 100%;
  flex-direction: column;
  padding: 16px 16px 16px 16px;
}
@media (max-width: 991px) {
  .rule-edit-container {
    padding-right: 20px;
  }
}
.rule-title {
  color: #121417;
  font-feature-settings: "dlig" on;
  letter-spacing: -0.8px;
  font: 700 32px Work Sans, sans-serif;
}
.rule-item-name {
  font-feature-settings: "dlig" on;
  font-family: Work Sans, sans-serif;
  line-height: 150%;
  margin-top: 24px;
}
@media (max-width: 991px) {
  .rule-item-name {
    max-width: 100%;
  }
}
.rule-item-value {
  font-feature-settings: "dlig" on;
  font-family: Work Sans, sans-serif;
  justify-content: center;
  align-items: start;
  border-radius: 12px;
  background-color: #f0f2f5;
  margin-top: 8px;
  width: 480px;
  max-width: 100%;
  font-weight: 400;
  line-height: 150%;
  padding: 16px;
}
@media (max-width: 991px) {
  .rule-item-value {
    padding-right: 20px;
  }
}
.rule-button-frame {
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #000;
  display: flex;
  margin-top: 24px;
  width: 480px;
  max-width: 100%;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.24px;
  line-height: 150%;
  padding: 12px 20px;
}
@media (max-width: 991px) {
  .rule-button-frame {
    margin-right: 10px;
    padding: 0 20px;
  }
}
.rule-button-save {
  font-feature-settings: "dlig" on;
  font-family: Work Sans, sans-serif;
  justify-content: center;
  text-align: center;
}
@media (max-width: 991px) {
  .rule-button-save {
    white-space: initial;
  }
}
</style>

<script>

export default{
  name:"RuleEdit",
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>
