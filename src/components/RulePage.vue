<template>
  <div class="page-frame">
    <div class="page-frame2">
      <div class="page-frame3">
        <div class="page-frame4">
          <SideBar></SideBar>
          <div class="column">
            <div class="column-page">
              <div class="column-title">
                <div class="column-title-name">Rules</div>
                <div class="column-subtitle">
                  A rule is a set of instructions for transforming and cleansing your
                  data. Once created, you can apply it to any dataset.
                </div>
              </div>
              <div v-if="ruleItems">
              <RuleItemPage :items="ruleItems" :itemsPerPage="8"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
<script>
import SideBar from "@/components/SideBar.vue";
import RuleItemPage from "@/components/RuleItemPage.vue";
export default {
  components: {
    RuleItemPage,
    SideBar
  },
  data(){
    return {
      ruleItems:[]
    }
  },
  mounted() {
    this.getRuleList()
    },
  methods: {
    async getRuleList() {
      try{
        const response=await fetch('http://localhost:8080/getRuleList', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }});
        if (response.ok){
          const ruleItems=await response.json();
          this.ruleItems=ruleItems;
        }
      }catch(error){
        console.log("规则获取失败")
      }
    },
  }
};
</script>