<template>
    <div>
        <div draggable="true" style="width: 120px;height: 120px;">拖拽测试</div>
        <el-table :data="tableData" style="width: 100%" :row-class-name="activeClass">
            <!-- <el-table-column :class="colClass" prop="date" label="Date" width="180" />
            <el-table-column :class="colClass" prop="name" label="Name" width="180" />
            <el-table-column :class="colClass" prop="address" label="Address" /> -->
            <el-table-column :draggable="true" v-for="(item, index) in column" :key="index" :prop="item.prop"
                :label="item.label" :class="colClass(index)" width="180" @mousedown="dragStart" @mouseup="dragEnd"
                @mouseover="dragOver" />
        </el-table>
    </div>
</template>
  
<script setup>
import { onMounted, onUpdated, ref } from "vue"
// import draggable from 'vuedraggable';
// console.log('111111111111111111111');
const tableData = ref([
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
])

const column = ref([{ prop: 'date', label: 'Date' }, { prop: 'name', label: 'Name' }, { prop: 'address', label: 'Address' }])

const dragIndex = ref(0)
const newDragIndex = ref(0)

function activeClass({ row, rowIndex }) {
    if (rowIndex === newDragIndex.value) {
        return 'isDragBox active-drag'
    }
    return 'isDragBox'
}




const chosenCol = ref(null)
const dragColIndex = ref(0)
const newDragColIndex = ref(0)

function colClass(index) {
    if (index === newDragColIndex.value) {
        return 'colClass col-active'
    }
    return 'colClass'
}

function dragStart(e) {
    console.log(e);
}

function dragEnd(e) {
    console.log(e);
}

function dragOver(e) {
    console.log(e);
}



















function dragStartItem(idx) {
    dragIndex.value = idx
}
function dragOverItem(index) {
    newDragIndex.value = index
}
function dragEndItem() {
    const data = tableData.value[dragIndex.value]
    tableData.value.splice(dragIndex.value, 1)
    tableData.value.splice(newDragIndex.value, 0, data)
}

const dragRow = (row) => {
    console.log(row);
}

onMounted(() => {
    console.log('object');
    const dragBox = document.querySelectorAll('.isDragBox')
    dragBox.forEach((i, idx) => {
        i.setAttribute('draggable', 'true')
        i.ondragstart = (e) => { e.target.style.opacity = 0; dragStartItem(idx) }
        // dragover触发的条件是有东西在头上被拖过去了
        i.ondragover = (e) => { dragOverItem(idx) }
        i.ondragend = (e) => { e.target.style.opacity = 1; dragEndItem() }
    })
})
</script>

<style>
.isDragBox {
    cursor: move;
    position: relative;
}

.active-drag {
    position: relative;


}

.active-drag::after {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #4B79F3;
    z-index: 99;
}

.col-active {
    background: black;
}

.colClass {
    cursor: move;
    position: relative;
}
</style>