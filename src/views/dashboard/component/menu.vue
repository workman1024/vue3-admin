<template>
    <div>
        <div class="gird h-flex">
            <img src="../../../assets/images/home/bi.png" />
            <div>
                <div>{{ item.title }}</div>
                <div class="value" >{{ item.value }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    item: {
        title: string,
        value: string,
    }
}>()
</script>
<style lang="scss" scoped>
.gird {
    cursor: pointer;
    padding: 20px 30px;
    border-radius: 4px;
    color: #666;
    font-size: 13px;

    img {
        width: 50px;
        margin-right: 10px;
    }
    .value {
        font-size: 25px;
        margin-top: 4px;
        color: #333;
    }
}
</style>