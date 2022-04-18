<template>
    <div>
        <div
            class="gird h-flex"
            :class="{ 'border': borderStyle }"
            :style="{ backgroundColor: item.color }"
        >
            <img :src="forImgSrc" />
            <div>
                <div>{{ item.title }}</div>
                <div class="value" :class="{ 'borderText': borderStyle }">{{ item.value }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import img1 from '../../../assets/images/home/bi.png';
import img2 from '../../../assets/images/home/xh.png';
const props = defineProps<{
    item: {
        title: string,
        value: string,
        color: string,
        img?: number
    }
}>()
const borderStyle = computed(() => {
    if (props.item.color) return false;
    return true;
})
const forImgSrc = computed(()=>{
    if(props.item.img){
        return img1;
    }else{
        return img2;
    }
})
</script>
<style lang="scss" scoped>
.gird {
    cursor: pointer;
    padding: 20px 30px;
    border-radius: 4px;
    color: #fff;
    font-size: 13px;

    img {
        width: 50px;
        margin-right: 10px;
    }
    .value {
        font-size: 25px;
        margin-top: 4px;
    }
}
.border {
    border: #ccc solid 1px;
    color: #666;
    .value {
        font-size: 17px;
        margin-top: 4px;
    }
}
</style>