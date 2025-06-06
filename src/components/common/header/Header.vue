<template>
    <header class="header">
        <div class="header__child">
            <Avatar class="rounded-sm">
                <AvatarImage src="/assets/images/logo.png" alt="profile" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Do it!</h3>
        </div>
        <div class="header__child">
            <Button variant="secondary" @click="moveToBookmarkPage">
                <BookMarked class="h-5 w-5 mr-1" />
                북마크
            </Button>
            <Separator orientation="vertical" class="h-10" />
            <div class="flex items-center gap-2">
                <Avatar>
                    <AvatarImage src="/assets/images/profile.svg" alt="profile" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <small class="text-sm font-medium leading-none">9Diin | Do it Vue.js</small>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookMarked } from "lucide-vue-next";

export default defineComponent({
    name: "CommonHeader",
    components: {
        Avatar,
        AvatarFallback,
        AvatarImage,
        Button,
        BookMarked,
        Separator,
    },
    data() {
        return {
            router: useRouter(),
        };
    },
    methods: {
        moveToBookmarkPage() {
            this.router.push("/bookmarks"); // 북마크 페이지로 이동
        },
    },
});
</script>

<style lang="scss" scoped>
.header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 8px 24px;

    border-bottom: 1px solid $color-neutral-100;

    &__child {
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        gap: 12px;
    }
}
</style>
