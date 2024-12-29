<template>
  <div class="modal-overlay">
  <div class="popup-container modal-content" @click.self="close">
    <div class="popup-title">Table Detailed View</div>
    <div class="popup-subtitle">Inspecting the table structure and sample data</div>
  <div class="popup-detail-data">
    <table>
      <thead>
        <tr class="popup-table-head">
          <th class="popup-table-value">Column Name</th>
          <th class="popup-table-value">Data Type</th>
          <th class="popup-table-value">Example Value</th>
        </tr>
      </thead>
      <tbody>
        <tr class="popup-table-body" v-for="(column,rowIndex) in itemExamples" :key="rowIndex">
          <td class="popup-table-value" style="color:#121417" v-for="(cell,itemIndex) in column"
              :key="itemIndex">
            {{cell}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="button-frame" @click="close"><div class="button-close">Close</div></div>
  </div>
  </div>
</template>

<style>
    .popup-container {
      align-items: start;
      display: flex;
      width: 512px;
      max-width: 100%;
      flex-direction: column;
      padding: 16px 16px 16px 16px;
    }
    @media (max-width: 991px) {
      .popup-container {
        padding-right: 20px;
      }
    }
    .popup-title {
      color: #121417;
      font-feature-settings: "dlig" on;
      letter-spacing: -0.8px;
      font: 700 32px Work Sans, sans-serif;
    }
    .popup-subtitle {
      color: #61788a;
      font-feature-settings: "dlig" on;
      margin-top: 12px;
      font: 400 14px/150% Work Sans, sans-serif;
    }
    .popup-detail-data {
      border-radius: 12px;
      border-color: rgba(219, 224, 229, 1);
      border-style: solid;
      border-width: 1px;
      background-color: #fff;
      display: flex;
      margin-top: 24px;
      width: 480px;
      max-width: 100%;
      flex-direction: column;
      font-size: 14px;
      color: #61788a;
      font-weight: 400;
      line-height: 150%;
      padding: 2px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
    }
    .popup-table-head {
      background-color: #fff;
      display: flex;
      line-height:150%;
      gap: 20px;
      color: #121417;
      font-weight: 500;
      font-size:14px;
      justify-content: space-between;
      height:50px;
    }
    @media (max-width: 991px) {
      .popup-table-head {
        flex-wrap: wrap;
      }
    }
    .popup-table-body {
      border-color: rgba(229, 232, 235, 1);
      border-style: solid;
      border-top-width: 1px;
      display: flex;
      gap: 20px;
      justify-content: space-between;
      padding: 6px 4px 6px 4px;
      border-left:none;
      border-right:none;
      border-bottom:none;
      height:50px;
    }
    @media (max-width: 991px) {
      .popup-table-body {
        flex-wrap: wrap;
        white-space: initial;
      }
    }
    .popup-table-value {
      font-feature-settings: "dlig" on;
      font-family: Work Sans, sans-serif;
    }
    .button-frame {
      justify-content: center;
      border-radius: 12px;
      background-color: #000;
      align-self: end;
      display: flex;
      width: 84px;
      flex-direction: column;
      font-size: 14px;
      color: #fff;
      font-weight: 700;
      white-space: nowrap;
      letter-spacing: 0.21px;
      line-height: 150%;
      margin: 24px 32px 0 0;
      padding:10px 16px;
    }
    @media (max-width: 991px) {
      .button-frame {
        margin-right: 10px;
        padding: 0 20px;
      }
    }
    .button-close {
      font-feature-settings: "dlig" on;
      font-family: Work Sans, sans-serif;
      justify-content: center;
      text-align: center;
    }
    @media (max-width: 991px) {
      .button-close {
        white-space: initial;
      }
    }
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
</style>
<script>
export default{
  name:"PopUp",
  emits: ['close'],
  props:{
    itemExamples:{
      type:Array,
      required:true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>