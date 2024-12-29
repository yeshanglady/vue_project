<template>
  <div class="modal-overlay" v-if="showModel">
    <div class="rule-edit-container modal-content">
      <div class="rule-title">Add Rule</div>
      <form @submit.prevent="uploadRule">
        <div class="rule-item-name">Rule Name</div>
        <input class="rule-item-value" id="name" v-model="name" placeholder="请输入规则名称">
        <div class="rule-item-name">Table Name</div>
        <input class="rule-item-value" id="colName" v-model="tableName" placeholder="请输入表名">
        <div class="rule-item-name">Column Name</div>
        <input class="rule-item-value" id="colName" v-model="colName" placeholder="请输入字段名称">
        <div class="rule-item-name">Regular Expression</div>
        <input class="rule-item-value" id="expr" v-model="expr" placeholder="请输入规则对应的正则表达式">
        <div class="rule-button-frame">
          <button class="rule-button-save" type="submit">Save Rule</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  border-radius: 5px;
  text-align: center;
}
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
  color:black;
  margin-top: 24px;
  padding-left:0px;
  letter-spacing: -0.8px;
  border:1px solid green;
  text-align:left;
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
  height:10px;
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
  background-color: #000;
  border-radius: 12px;
  margin-top:5px;
  margin-left:auto;
  margin-right:auto;
  width: 80px;
  height:50px;
  max-width: 100%;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.24px;
  line-height: 150%;
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
  color:#fff;
  background-color: #000;
  border-radius: 12px;
  width:100%;
  height:100%;
}
@media (max-width: 991px) {
  .rule-button-save {
    white-space: initial;
  }
}
</style>
<script scoped>
import {ref} from 'vue';
export default {
  name: "RuleAdd",
  setup(){
    const showModel=ref(true)
    const name=ref("")
    const expr=ref("")
    const colName=ref("")
    const tableName=ref("")
    async function uploadRule() {
      try {
        const response = await fetch('http://localhost:8080/saveRule', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name:this.name,
            tableName:this.tableName,
            colName:this.colName,
            expr:this.expr,
          }),
        })
        if (response.ok){
          showModel.value=false
        }
      } catch(error){
        console.log("数据上传是失败");
      }
    }
    return {
      showModel,
      name,
      expr,
      colName,
      tableName,
      uploadRule,
    }
  }
}
</script>
