<template>
    <div class="page">
        <!-- 헤더 -->
        <CommonHeader />

        <!-- 네비게이션 메뉴 -->
        <CommonNavigation @send-event="clickMenu" />

        <!-- 검색 창 -->
        <div class="page__wallpaper">
            <img src="/assets/images/wallpaper.png" alt="" class="page__wallpaper__img" />
            <div class="page__wallpaper__search-box">
                <h1 class="scroll-m-20 text-4xl text-white font-extrabold tracking-tight lg:text-4xl">프로젝트 01: 오픈 API를 활용한 이미지 검색 사이트 만들기</h1>
                <div class="flex flex-col w-full mt-5 mb-2">
                    <h4 class="scroll-m-20 text-md text-white font-semibold tracking-tight">인터넷 시각자료 출처입니다.</h4>
                    <h4 class="scroll-m-20 text-md text-white font-semibold tracking-tight">모든 지역에 있는 크리에이터들의 지원을 받습니다.</h4>
                </div>
                <SearchBar @update:modelValue="changeSearchValue" @keydown.enter="handleSearch" />
            </div>
        </div>

        <!-- 페이지 라우터 -->
        <RouterView />

        <!-- 푸터 -->
        <footer class="page__footer">
            <CommonPagination :total="total" :totalPages="totalPages" />
        </footer>
    </div>
</template>

<script lang="ts">
import { CommonHeader, CommonNavigation, CommonPagination } from "@/components/common/index";
import { SearchBar } from "@/components/ui/search-bar";
import { useStore } from "@/stores/index";

export default {
    components: {
        CommonHeader,
        CommonNavigation,
        CommonPagination,
        SearchBar,
    },
    data() {
        return {
            store: useStore(),
            searchValue: "",
        };
    },
    computed: {
        prevSearchValue() {
            return this.store.searchValue;
        },
        total() {
            return this.store.total;
        },
        totalPages() {
            return this.store.totalPages;
        },
    },
    methods: {
        changeSearchValue(event: string | number) {
            this.searchValue = String(event);
        },
        handleSearch() {
            if (this.searchValue === "") this.store.setSearchValue(this.prevSearchValue);
            else this.store.setSearchValue(this.searchValue);
        },
        clickMenu(event: string) {
            this.changeSearchValue(event);
            this.handleSearch();
        },
    },
};
</script>

<style lang="scss" scoped>
.page {
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    &__wallpaper {
        position: relative;

        width: 100%;
        height: 280px;

        display: flex;
        align-items: center;
        justify-content: center;

        &__img {
            width: 100%;
            height: 100%;

            object-fit: cover;
        }
        &__search-box {
            position: absolute;
            top: 50%;
            left: 50%;

            transform: translate(-50%, -50%);

            max-width: 1400px;

            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    &__footer {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 8px 24px;

        border-top: 1px solid $color-neutral-100;
    }
}
</style>
