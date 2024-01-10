<template>
    <div>
        <div draggable="true" style="width: 120px;height: 120px;">拖拽测试</div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column v-for="(item, index) in col" :key="index" :prop="dropCol[index].prop" :label="item.label">

            </el-table-column>

        </el-table>
    </div>
</template>
  
<script setup>
import Sortable from "sortablejs";
import { ref, onMounted } from "vue";

const col = ref([
    {
        label: '日期',
        prop: 'date'
    },
    {
        label: '姓名',
        prop: 'name'
    },
    {
        label: '地址',
        prop: 'address'
    },
    {
        label: '隐藏',
        prop: 'done'
    }
])

const dropCol = ref([
    {
        label: '日期',
        prop: 'date'
    },
    {
        label: '姓名',
        prop: 'name'
    },
    {
        label: '地址',
        prop: 'address'
    },
    {
        label: '隐藏',
        prop: 'done'
    }
])

const tableData = ref([
    {
        id: '1',
        date: '2023-04-28',
        name: 'aaa',
        address: '长沙市雨花区',
        done: false
    },
    {
        id: '2',
        date: '2023-04-29',
        name: 'bbb',
        address: '长沙市岳麓区',
        done: false
    },
    {
        id: '3',
        date: '2023-04-30',
        name: 'ccc',
        address: '长沙市天心区',
        done: false
    },
    {
        id: '4',
        date: '2023-05-01',
        name: 'ddd',
        address: '长沙市芙蓉区',
        done: false
    }
])





// 列拖拽
const columnDrop = () => {
    const wrapperTr = document.querySelector('tr')
    Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: (evt) => {
            setTimeout(() => {
                const oldItem = dropCol.value[evt.oldIndex]
                dropCol.value.splice(evt.oldIndex, 1)
                dropCol.value.splice(evt.newIndex, 0, oldItem)
            }, 5)
        }
    })

}

onMounted(() => {
    columnDrop()
})

</script>
<style>
/* // 拖拽 */
.dragClass {
    background: #41c21a !important;
}

/* // 停靠 */
.ghostClass {
    background: #6cacf5 !important;
}

/* // 选择 */
.chosenClass:hover>td {
    background: #f56c6c !important;
}
</style>
