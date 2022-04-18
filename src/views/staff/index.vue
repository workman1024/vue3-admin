<template>
    <div>
        <hnwf-content>
            <hnwf-form @onSubmit="onSubmit" @onReset="onReset" :showFold="true">
                <hnwf-form-item label="姓名">
                    <el-input v-model="info.name" clearable placeholder="请输入姓名"></el-input>
                </hnwf-form-item>
                <hnwf-form-item label="签约状态">
                    <el-select clearable v-model="info.statud" placeholder="请选择">
                        <el-option
                            v-for="item in statuds"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </hnwf-form-item>
                <hnwf-form-item label="服务项目" v-for="item in 20">
                    <el-select clearable v-model="info.project" placeholder="请选择">
                        <el-option
                            v-for="item in projects"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </hnwf-form-item>
                <hnwf-form-item label="累计服务次数">
                    <div class="h-flex">
                        <el-select v-model="info.compare" placeholder="请选择" class="compare">
                            <el-option
                                v-for="item in compares"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                        <el-input v-model="info.name" clearable placeholder="请输入次数"></el-input>
                    </div>
                </hnwf-form-item>
            </hnwf-form>
        </hnwf-content>
        <hnwf-content>
            <hnwf-table :data="tableData" ref="tableList">
                <el-table-column prop="staffNum" label="员工号" />
                <el-table-column prop="name" label="姓名" />
                <el-table-column prop="phone" label="手机号" />
                <el-table-column prop="idcard" label="身份证号" />
                <el-table-column prop="status" label="签约状态" />
                <el-table-column prop="count" label="累计服务次数" />
                <el-table-column label="操作">
                    <template #default>
                        <el-button type="text" size="small" @click="hanldeEdit">Edit</el-button>
                    </template>
                </el-table-column>
            </hnwf-table>
            <hnwf-pagination v-model:page="page" @getPage="getData" class="h-m-t-30" />
        </hnwf-content>
        <hnwf-dialog v-model="visible" title="编辑" @onConfirm="handleConfirm">
            <div>123</div>
        </hnwf-dialog>
    </div>
</template>
<script lang="ts">
import { statudsData, projectsData, comparesData, tableSourceData, tableData } from './staff';
export interface Info {
    name: string,
    statud: number,
    project: number,
    compare: number,
}
export default defineComponent({
    name: 'StaffIndex',
    setup() {
        const infoVal: Info = {
            name: '',
            statud: 0,
            project: 0,
            compare: 0
        };
        const info = ref<Info>(infoVal)
        const tableData = ref<tableData[]>([])
        const page = ref({ pageIndex: 1, pageSize: 10, total: 100 })
        const statuds = statudsData
        const projects = projectsData
        const compares = comparesData
        const onSubmit = () => {
            getData();
        }
        const onReset = () => {
            info.value = infoVal;
            getData();
        }
        const getData = () => {
            tableData.value = tableSourceData();
        }
        const visible = ref(false)
        const hanldeEdit = ()=> {
            visible.value = true
        }
        const handleConfirm = ()=> {
            visible.value = false
        }
        onMounted(() => {
            getData();
        })
        return {
            info,
            statuds,
            projects,
            compares,
            tableData,
            page,
            visible,
            getData,
            onSubmit,
            onReset,
            hanldeEdit,
            handleConfirm
        }
    }
})

</script>
<style lang="scss" scoped>
.compare {
    width: 100px;
}
</style>