<template>
    <div class="layout">Bookmarks View</div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.layout {
    width: calc(100% - 48px);
    max-width: 1400px;

    display: grid;
    grid-template-columns: repeat(5, 1fr);

    flex: 1;
    flex-wrap: wrap; /* 추가: 자식 요소가 여러 줄로 배치될 수 있도록 설정 */
    align-content: flex-start; /* 추가: 자식 요소들이 위에서부터 정렬되도록 설정 */

    padding: 24px;
    gap: 40px 24px; /* 추가: 각 요소 간의 간격 설정 */

    overflow-y: scroll;

    // /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    // /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
