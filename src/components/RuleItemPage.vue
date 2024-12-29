<template>
  <div class="table-container">
    <table>
      <thead>
      <tr class="table-head">
        <th class="table-value">RuleName</th>
        <th class="table-value">TableName</th>
        <th class="table-value">ColName</th>
        <th class="table-value">Expression</th>
        <th clsss="table-value"></th>
      </tr>
      </thead>
      <tbody>
      <tr class="table-body" v-for="(rule,index) in rulePaginatedItems" :key="index">
        <td class="table-value">{{rule.name}}</td>
        <td class="table-value">{{rule.tableName}}</td>
        <td class="table-value">{{rule.colName}}</td>
        <td class="table-value">{{rule.expr}}</td>
        <td class="table-value">
          <button @click="submitRule(rule)"
                  :disabled="submittedRules[index]">
            {{ submittedRules[index] ? "已提交" : "提交" }}
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

<style scoped>

</style>
<script>
export default {
  name:"RuleItemPage",
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
      submittedRules:{}
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    rulePaginatedItems() {
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
    async submitRule(rule){
      try{
        const response=await fetch("http://localhost:8080/runRule",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name:rule.name,
            tableName:rule.tableName,
            colName:rule.colName,
            expr:rule.expr,
          })
        });
        if (response.ok){
          this.submittedRules[rule.index]=true
          this.$router.push("/dirtyItems")
        }else{
          console.log("规则执行失败")
        }
      }catch(error){
        console.error("规则比对失败")
      }
    }
  }
};
</script>