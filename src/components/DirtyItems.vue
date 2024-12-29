<template>
  <div class="page-frame">
    <div class="page-frame2">
      <div class="page-frame3">
        <div class="page-frame4">
          <SideBar></SideBar>
          <div class="column">
            <div class="column-page">
              <div class="column-title">
                <div class="column-title-name">Dirty Items</div>
                <div class="column-subtitle">
                  A dirty item is a record that does not meet the quality standards of
                  your data. You can view and edit these items here.
                </div>
              </div>
              <div v-if="items">
              <ItemsPage :items="items" :itemsPerPage="8" />
              </div>
              <button class="button-run"
                      @click="cleanDirtyItems">开始清洗</button>
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

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

td, th {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  width:150px;
}

.button-run{
  font-feature-settings: "dlig" on;
  font-family: Work Sans, sans-serif;
  justify-content: center;
  text-align: center;
  color:#fff;
  background-color: #000;
  border-radius: 12px;
  width:70px;
  height:40px;
  margin-top:20px;
  margin-left:auto;
  margin-right:auto;
}
</style>
<script>
import SideBar from "./SideBar.vue";
import ItemsPage from "./ItemsPage.vue";
export default {
  name: "DirtyItems",
  components: {
    SideBar,
    ItemsPage
  },
  data() {
    return {
      items: []
    };
  },
  mounted() {
    this.getUncleanedItems();
  },
  methods: {
    async getUncleanedItems() {
      const response = await fetch('http://localhost:8080/getUncleanedItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const items = await response.json();
        this.items = items;
      } else {
        console.log("未清洗记录获取失败！")
      }
    },
    async cleanDirtyItems() {
      try {
        const response = await fetch("http://localhost:8080/cleanDirtyItems", {
              method: 'POST',
              headers: {'Content-Type': 'application/json'}
            })
        if (response.ok){
          console.log("数据清洗成功")
          window.location.reload()
        }else{
          console.log("数据清洗失败")
        }
      } catch(error) {
        console.log("执行遇到错误")
      }
    },
  },
};
</script>