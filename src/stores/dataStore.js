import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
    state: () => ({
        dataList: [] // 用于存储从页面 A 传输过来的数据
    }),
    actions: {
        // 添加数据到列表
        addData(newData) {
            this.dataList.push(newData);
        }
    }
});
