<template>
    <div class="tags-view-container" ref="tagsView">
        <router-link
            v-for="view in visitedViews"
            :key="view.path"
            class="tags-view-item"
            :class="isActive(view) ? 'active' : ''"
            :to="{ path: view.path, query: view.query, fullPath: view.fullPath }"
            @contextmenu.prevent="openMenu(view, $event)"
        >
            {{ title(view) }}
            <img
                class="tags-view-close"
                @click.prevent.stop="closeSelectedTag(view)"
                src="../../../../assets/images/main/x1.png"
            />
        </router-link>
        <ul
            v-if="visible"
            :style="{ left: rect.left + 'px', top: rect.top + 'px' }"
            class="contextmenu"
        >
            <li @click="handleMenuClose">关闭</li>
            <li @click="handleCloseOthers">关闭其他</li>
            <li @click="handleCloseAll">关闭所有</li>
        </ul>
    </div>
</template>
<script setup lang="ts">
const store = useStore();
const visitedViews = computed(() => store.getters.app.tagViews);
const router = useRouter();
const route = useRoute();
const addVisitedViews = () => {
    let view = JSON.parse(JSON.stringify(route))
    if (view.meta.noHistory) return;
    store.dispatch('app/addTagView', view);
}
watchEffect(()=>{
    addVisitedViews();
})
const title = (view) => {
    return view.meta?.title || '未命名'
}
const isActive = (view) => {
    return route.path == view.path;
}
const closeSelectedTag = (view) => {
    store.dispatch('app/delTagView', view);
    nextTick(() => {
        let tags = visitedViews.value;
        if (tags.length > 0) {
            let lastView = visitedViews.value.slice(-1)[0];
            router.push({
                path: lastView.path
            })
        } else {
            router.push({
                path: '/'
            })
        }
    })
}
// 右键菜单栏操作
const rect = reactive({
    top: 0,
    left: 0
})
const tagsView = ref()
const visible = ref(false)
const selectedTag = ref()
const openMenu = (view, e) => {
    let $el = tagsView.value;
    const menuMinWidth = 105
    const offsetLeft = $el.getBoundingClientRect().left // container margin left
    const offsetWidth = $el.offsetWidth // container width
    const maxLeft = offsetWidth - menuMinWidth // left boundary
    const left = e.clientX - offsetLeft + 15 // 15: margin right
    if (left > maxLeft) {
        rect.left = maxLeft
    } else {
        rect.left = left
    }
    rect.top = e.clientY
    visible.value = true;
    selectedTag.value = view;
}
const closeMenu = () => {
    visible.value = false;
}
watchEffect(() => {
    if (visible.value) {
        document.body.addEventListener('click', closeMenu)
    } else {
        document.body.removeEventListener('click', closeMenu)
    }
})
const handleMenuClose = () => {
    closeSelectedTag(selectedTag.value)
}
const handleCloseOthers = () => {
    if (route.path != selectedTag.value.path) {
        router.push({
            path: selectedTag.value.path
        })
    }
    let view = JSON.parse(JSON.stringify(selectedTag.value))
    store.dispatch('app/delOthersTagView', view);
}
const handleCloseAll = () => {
    router.push({
        path: '/'
    })
    store.dispatch('app/delAllTagView');
}


</script>
<style lang="scss" scoped>
.tags-view-container {
    height: 34px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    .tags-view-item {
        text-decoration: none;
        display: inline-block;
        position: relative;
        cursor: pointer;
        height: 26px;
        line-height: 26px;
        border: 1px solid #d8dce5;
        color: #495060;
        background: #fff;
        padding: 0 4px 0 8px;
        font-size: 12px;
        margin-left: 5px;
        margin-top: 4px;
        &:first-of-type {
            margin-left: 20px;
        }
        &:last-of-type {
            margin-right: 20px;
        }
        &.active {
            &::before {
                content: "";
                background: #409eff;
                display: inline-block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                position: relative;
                margin-right: 2px;
            }
        }
        .tags-view-close {
            height: 16px;
            vertical-align: -3px;
            transform: scale(0.6);
            &:hover {
                transform: scale(1);
            }
        }
    }
    .contextmenu {
        margin: 0;
        background: #fff;
        z-index: 3000;
        position: absolute;
        list-style-type: none;
        padding: 5px 0;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 400;
        color: #333;
        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
        li {
            margin: 0;
            padding: 7px 16px;
            cursor: pointer;
            &:hover {
                background: #eee;
            }
        }
    }
}
</style>