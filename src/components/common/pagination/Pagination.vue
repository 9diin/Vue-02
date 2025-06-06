<template>
    <Pagination :total="total >= 1000 ? 1000 : total" :itemsPerPage="30" :sibling-count="1" show-edges :default-page="currentPage">
        <PaginationList v-slot="{ items }" class="flex items-center gap-1">
            <PaginationFirst @click="changePage(1)" />
            <PaginationPrev @click="changePage(currentPage - 1)" />

            <template v-for="(item, index) in items" :key="index">
                <PaginationListItem v-if="item.type === 'page'" :value="item.value" as-child>
                    <Button class="w-10 h-10 p-0" :variant="item.value === currentPage ? 'default' : 'outline'" @click="changePage(item.value)">
                        {{ item.value }}
                    </Button>
                </PaginationListItem>
                <PaginationEllipsis v-else :index="index" />
            </template>

            <PaginationNext @click="changePage(currentPage + 1)" />
            <PaginationLast @click="changePage(totalPages > 34 ? 34 : totalPages)" />
        </PaginationList>
    </Pagination>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from "@/components/ui/pagination";
import { useStore } from "@/stores/index";

export default defineComponent({
    props: {
        total: {
            type: Number,
            required: true,
        },
        totalPages: {
            type: Number,
            required: true,
        },
    },
    name: "CommonPagination",
    components: { Button, Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev },
    data() {
        return { store: useStore() };
    },
    computed: {
        currentPage() {
            return this.store.page;
        },
    },
    methods: {
        changePage(page: number) {
            this.store.setPage(page);
        },
    },
});
</script>
