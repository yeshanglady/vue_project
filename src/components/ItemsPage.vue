<template>
  <div class="dirtyItems-container">
  <table>
    <thead>
      <tr class="table-head">
        <th class="table-value">Id</th>
        <th class="table-value">TableName</th>
        <th class="table-value">ItemID</th>
        <th class="table-value">Column</th>
        <th class="table-value">Rule</th>
        <th class="table-value">Value</th>
        <th class="table-value">NewValue</th>
        <th class="table-value"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-body" v-for="(item,index) in paginatedItems" :key="index">
        <td class="table-value">{{item.id}}</td>
        <td class="table-value">{{item.tableName}}</td>
        <td class="table-value">{{item.itemID}}</td>
        <td class="table-value">{{item.colName}}</td>
        <td class="table-value">{{item.rule}}</td>
        <td class="table-value">{{item.oldValue}}</td>
        <td class="table-value" :key="index">
          <input id="newValue"
                 class="newValue-input"
                 :disabled="submittedRows[index]"
                 v-model="item.newValue">
        </td>
        <td class="table-value">
          <button @click="submitNewValue(index)"
                  :disabled="submittedRows[index]">
            {{ submittedRows[index] ? "已提交" : "提交" }}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
  <div v-if="totalPages > 1" class="pagination-controls">
      <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  name:"ItemsPage",
  props: {
    items: {
      type: Array,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      currentPage: 1,
      submittedRows:{}
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.items.slice(start, end);
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    async submitNewValue(index){
      try{
        const response=await fetch("http://localhost:8080/updateNewValue", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: this.items[index].id,
            newValue: this.items[index].newValue
          }),
        })
      if (response.ok) {
        console.log("新值更新完毕")
        this.submittedRows[index]=true
      } else{
        console.log("新值更新失败")
      }
      }catch(error){
        console.log("新值上传失败")
      }
    },
  }
};
</script>

<style>
.dirtyItems-container {
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
  width: 95%;
}
@media (max-width: 991px) {
  .dirtyItems-container {
    max-width: 100%;
    margin-right: 10px;
  }
}
.pagination-controls {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  color: #637587;
  width:95%;
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
.newValue-input{
  border-radius: 12px;
  width:120px;
  height:25px;
  font-size: 14px;
  border:1px solid rgba(222, 222, 222, 1);
}
</style>
