<template>
  <div class="page-frame">
    <div class="page-frame2">
      <div class="page-frame3">
        <div class="page-frame4">
          <SideBar></SideBar>
          <div class="column">
            <div class="column-page">
              <div class="column-title">
                <div class="column-title-name">Tables Preview</div>
                <div class="column-subtitle">
                  preview and select tables for cleansing
                </div>
              </div>
              <div class="data-search">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6b97d704436b1778c4cefe18fb5cf7c22d3f272e77967fbe0afb1b1232b70c2?"
                    class="img"
                />
                <input
                    v-model="inputValue"
                    @keydown.enter="handleEnter"
                    placeholder="Search Table"
                />
              </div>
              <div class="table-container">
                <table>
                  <thead>
                    <tr class="table-head">
                      <th class="table-value">TableName</th>
                      <th class="table-value">Columns</th>
                      <th class="table-value">Records</th>
                      <th class="table-value">LastUpdate</th>
                      <th class="table-value">Preview</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-body" v-for="(table,index) in tableInfoList" :key="index">
                      <td class="table-value">{{table.name}}</td>
                      <td class="table-value">{{table.columns}}</td>
                      <td class="table-value">{{table.records}}</td>
                      <td class="table-value">{{table.date}}</td>
                      <td class="table-value">
                        <button @click="showPopup(index)">View</button>
                        <PopUp v-if="dialogShow" @close="dialogShow = false" :itemExamples="tableItemExamples"/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.page-frame {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.page-frame2 {
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
}
@media (max-width: 991px) {
  .page-frame2 {
    max-width: 100%;
  }
}
.page-frame3 {
  justify-content: center;
  width: 100%;
  padding: 20px 24px;
}
@media (max-width: 991px) {
  .page-frame3 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.page-frame4 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .page-frame4 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.img {
  aspect-ratio: 1;
  object-fit: none;
  object-position: center;
  width: 24px;
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 75%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.column-page {
  display: flex;
  flex-grow: 1;
  padding-bottom: 80px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .column-page {
    max-width: 100%;
    margin-top: 24px;
  }
}
.column-title {
  align-items: start;
  display: flex;
  flex-direction: column;
  padding: 16px 80px 16px 16px;
}
@media (max-width: 991px) {
  .column-title {
    max-width: 100%;
    padding-right: 20px;
  }
}
.column-title-name {
  color: #121417;
  font-feature-settings: "dlig" on;
  letter-spacing: -0.8px;
  font: 700 32px Inter, sans-serif;
}
@media (max-width: 991px) {
  .column-title-name {
    max-width: 100%;
  }
}
.column-subtitle {
  color: #637587;
  font-feature-settings: "dlig" on;
  margin-top: 12px;
  font: 400 14px/150% Inter, sans-serif;
}
@media (max-width: 991px) {
  .column-subtitle {
    max-width: 100%;
  }
}
.data-search {
  border-radius: 12px;
  background-color: #f0f2f5;
  display: flex;
  gap: 12px;
  font-size: 16px;
  color: #637587;
  font-weight: 400;
  line-height: 150%;
  margin: 12px 16px 0;
  padding: 12px 16px;
}
@media (max-width: 991px) {
  .data-search {
    margin-right: 10px;
    flex-wrap: wrap;
  }
}
input{
  background-color: inherit;
  border: none;
  font-size: 16px;
  font-feature-settings: "dlig" on;
  font-family: Inter, sans-serif;
  color: #637587;
}
input:focus {
  border: none; /* Remove border on focus */
  outline: none; /* Remove default focus outline */
}
input::placeholder {
  color: #637587;
}
.table-container {
  border-radius: 12px;
  border-color: rgba(219, 224, 229, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #637587;
  font-weight: 400;
  line-height: 150%;
  margin: 24px 16px 0;
  padding: 1px 1px;
}
@media (max-width: 991px) {
  .table-container {
    max-width: 100%;
    margin-right: 10px;
  }
}
table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}
.table-head {
  background-color: #fff;
  display: flex;
  line-height:150%;
  gap: 20px;
  color: #121417;
  font-weight: 500;
  font-size:14px;
  justify-content: space-between;
  height:40px;
}
@media (max-width: 991px) {
  .table-head {
    flex-wrap: wrap;
  }
}
.table-body {
  border-color: rgba(229, 232, 235, 1);
  border-style: solid;
  border-top-width: 2px;
  border-left:none;
  border-right:none;
  border-bottom:none;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  height:50px;
}
@media (max-width: 991px) {
  .table-body {
    flex-wrap: wrap;
  }
}
td, th {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  width:150px;
}
.table-value {
  font-feature-settings: "dlig" on;
  font-family: Inter, sans-serif;
}

</style>
<script>
import SideBar from "./SideBar.vue";
import PopUp from "./PopUp.vue";
export default {
  name: "TablePreview",
  components: {
    SideBar,
    PopUp,
  },
  data(){
    return {
      dialogShow: false,
      inputValue: "",
      submittedValue: "",
      tableInfoList:[],
      itemExamples:[],
      tableItemExamples:null
    };
  },
  mounted() {
    this.getTableList()
  },
  methods: {
    handleEnter() {
      this.submittedValue = this.inputValue;
      this.inputValue = "";
    },
    async getTableList(){
      const response=await fetch('http://localhost:8080/getdbinfo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }});
      if (response.ok){
        const tableInfoList=await response.json();
        this.tableInfoList=tableInfoList;
      }else{
        console.log("数据库表信息获取失败！")
      }
    },
    showPopup(index){
      this.dialogShow=true;
      this.tableItemExamples=this.tableInfoList[index].itemExamples;
    }
  }
};
</script>