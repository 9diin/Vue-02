<template>
    <nav class="nav">
        <div class="nav__container">
            <Button
                v-for="menu in menuItems"
                :key="menu.id"
                variant="ghost"
                class="h-full py-2 px-3 rounded-sm text-sm font-medium hover:bg-neutral-50"
                :class="{ 'bg-neutral-100': menu.isActive }"
                @click="handleMenuClick(menu)"
            >
                {{ menu.label }}
            </Button>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "@/components/ui/button";
import { NavMenu } from "@/types";
import { useStore } from "@/stores";

export default defineComponent({
    name: "CommonNavigation",
    components: { Button },
    data() {
        return {
            menuItems: [
                {
                    id: 1,
                    label: "보도/편집 전용",
                    searchValue: "edit",
                    isActive: false,
                },
                {
                    id: 2,
                    label: "팔로잉",
                    searchValue: "following",
                    isActive: false,
                },
                {
                    id: 3,
                    label: "Unsplash Photo+",
                    searchValue: "photo",
                    isActive: false,
                },
                {
                    id: 4,
                    label: "단색",
                    searchValue: "one color",
                    isActive: false,
                },
                {
                    id: 5,
                    label: "3D 렌더링",
                    searchValue: "3d rendering",
                    isActive: false,
                },
                {
                    id: 6,
                    label: "자연",
                    searchValue: "nature",
                    isActive: false,
                },
                {
                    id: 7,
                    label: "텍스쳐 및 패턴",
                    searchValue: "texture",
                    isActive: false,
                },
                {
                    id: 8,
                    label: "인테리어",
                    searchValue: "interior",
                    isActive: false,
                },
                {
                    id: 9,
                    label: "필름",
                    searchValue: "film",
                    isActive: false,
                },
                {
                    id: 10,
                    label: "실험적인",
                    searchValue: "experimental",
                    isActive: false,
                },
                {
                    id: 11,
                    label: "여행",
                    searchValue: "travel",
                    isActive: false,
                },
                {
                    id: 12,
                    label: "스포츠",
                    searchValue: "sports",
                    isActive: false,
                },
            ] as NavMenu[],
            store: useStore(),
        };
    },
    emits: ["send-event"],

    methods: {
        handleMenuClick(menu: NavMenu) {
            this.menuItems.forEach((item: NavMenu) => {
                if (item.id === menu.id) item.isActive = true;
                else item.isActive = false;
            });
            this.$emit("send-event", menu.searchValue);
            this.store.setPage(1);
        },
    },
});
</script>

<style lang="scss" scoped>
.nav {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid $color-neutral-100;

    &__container {
        width: 100%;
        max-width: 1400px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 6px 24px;
    }
}
</style>
