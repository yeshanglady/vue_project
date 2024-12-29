<template>
  <div class="sidebar">
  <div class="sidebar-part">
      <div class="sidebar-title">Data Cleansing</div>
      <SideBarBox
          :is-active="activeBox === 1"
          @box-click="setActiveBox(1)"
          link-text="Tables"
          link-href="/tablePreview"
          img-src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c08d8e1990719e96cc4f53869a780f1c8504b92e653b9f728014b07475263e1?"
      ></SideBarBox>
      <SideBarBox
          :is-active="activeBox === 2"
          @box-click="setActiveBox(2)"
          link-text="Rules"
          link-href="/rule"
          img-src="https://cdn.builder.io/api/v1/image/assets/TEMP/02df67897adb34a37189725ebb21be671e24326615d3eb8bba229846f1cdb098?"
      ></SideBarBox>
      <SideBarBox
          :is-active="activeBox === 3"
          @box-click="setActiveBox(3)"
          link-text="Dirty Items"
          link-href="/dirtyItems"
          img-src="https://cdn.builder.io/api/v1/image/assets/TEMP/70a10f59fb273a4b9bd762a4e489041413bdd4398453ea5be0582231b8d3e589?"
      ></SideBarBox>
    <div class="sidebar-root"
         :is-active="activeBox===2"
         @box-click="setActiveBox(2)"
         :style="{ opacity: activeBox===2 ? 1 : 0, transition: 'opacity 0.3s' }">
      <div @click="showModal=true" class="sidebar-root-title">New Rule</div>
      <RuleAdd v-show="showModal"
               @close="showModal=false" />
    </div>
    </div>
  </div>
</template>
<style scoped>
.sidebar {
  display: flex;
  line-height: normal;
  width: 20%;
  margin-left: 0;
  height:700px;
}
@media (max-width: 991px) {
  .sidebar {
    width: 100%;
  }
}
.sidebar-part {
  justify-content: space-between;
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  font-size: 14px;
  color: #121417;
  font-weight: 500;
  line-height: 150%;
  margin: 0 auto;
  padding: 16px;
}
@media (max-width: 991px) {
  .sidebar-part {
    margin-top: 24px;
  }
}
.sidebar-title {
  font-feature-settings: "dlig" on;
  font: 16px Inter, sans-serif;
}
.sidebar-root {
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #000;
  display: flex;
  margin-top: 400px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.21px;
  padding: 10px 16px;
}
@media (max-width: 991px) {
  .sidebar-root {
    margin-top: 40px;
    padding: 0 20px;
  }
}
.sidebar-root-title {
  font-feature-settings: "dlig" on;
  font-family: Inter, sans-serif;
  justify-content: center;
}
</style>

<script>
import SideBarBox from "./SideBarBox.vue";
import {ref} from 'vue';
import RuleAdd from "./RuleAdd.vue"
export default {
  name:"SideBar",
  components:
      {
        SideBarBox,
        RuleAdd,
      },
  setup(){
    const showModal=ref(false);
    return {
      showModal,
    }
  },
  data() {
    return {
      activeBox: null,
    };
  },
  methods: {
    setActiveBox(index) {
      this.activeBox = index;
    },
  },
};
</script>