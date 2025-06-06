<template>
    <div class="flex flex-col justify-between space-y-3 w-64 h-64 cursor-pointer">
        <div class="relative flex flex-col gap-3">
            <Dialog>
                <DialogTrigger as-child>
                    <Button size="icon" class="absolute top-2 right-2 bg-neutral-500 bg-opacity-50 hover:bg-black hover:bg-opacity-50">
                        <FolderOpen class="h-5 w-5" />
                    </Button>
                </DialogTrigger>
                <DialogContent class="sm:max-w-xl">
                    <DialogHeader>
                        <DialogTitle>이미지 상세정보</DialogTitle>
                        <DialogDescription>선택한 이미지의 상세정보를 확인하세요.</DialogDescription>
                    </DialogHeader>
                    <div class="flex flex-col items-center space-x-2 gap-3">
                        <img :src="image.urls.full" alt="" class="h-80 w-full rounded-xl object-cover" />
                        <div class="flex items-center justify-start w-full">
                            <div class="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage :src="image.user.profile_image.medium" alt="profile_image" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <small class="text-sm font-medium leading-none">{{ image.user.id }}</small>
                            </div>
                        </div>
                        <div class="flex flex-col w-full gap-2">
                            <div class="flex items-center">
                                <Pin class="h-4 w-4 mt-[2px] mr-1" />
                                <small class="text-sm font-medium">{{ image.alternative_slugs.ko }}</small>
                            </div>
                            <div class="flex items-center">
                                <ClipboardPenLine class="h-4 w-4 mt-[2px] mr-1" />
                                <small class="text-sm font-medium">{{ image.alt_description }}</small>
                            </div>
                            <div class="flex items-start">
                                <AlignLeft class="h-4 w-4 min-w-4 mr-1" />
                                <small class="text-sm font-medium leading-4">{{ image.description ? image.description : "등록된 묘사 및 설명글이 없습니다." }}</small>
                            </div>
                        </div>
                        <div class="flex items-center justify-end w-full gap-4">
                            <div class="flex items-center gap-1 text-sm">
                                <p className="leading-7">게시일:</p>
                                {{ formatDate(image.created_at) }}
                            </div>
                            <div class="flex items-center gap-1 text-sm">
                                <Heart class="h-[14px] w-[14px] mt-[2px] text-rose-600" fill="#e11d48" />
                                {{ formatNumberWithCommas(image.likes) }}
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <img :src="image.urls.small" alt="" class="h-40 w-full rounded-xl object-cover" />
            <small className="w-full gap-1 text-sm font-medium line-clamp-2"> {{ image.alt_description }} </small>
        </div>
        <div class="space-y-2">
            <div class="flex items-center justify-between w-full">
                <div class="flex items-center gap-1 text-sm">
                    <p className="leading-7">게시일:</p>
                    {{ formatDate(image.created_at) }}
                </div>
                <div class="flex items-center gap-1 text-sm">
                    <Heart class="h-[14px] w-[14px] mt-[2px] text-rose-600" fill="#e11d48" />
                    {{ formatNumberWithCommas(image.likes) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Heart, FolderOpen, Pin, ClipboardPenLine, AlignLeft } from "lucide-vue-next";

export default {
    props: ["image"],
    components: { Avatar, AvatarFallback, AvatarImage, Button, FolderOpen, Heart, Pin, ClipboardPenLine, AlignLeft, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose },
    methods: {
        formatDate(date: string) {
            return dayjs(date).format("YYYY-MM-DD");
        },
        formatNumberWithCommas(count: number) {
            return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    },
};
</script>

<style lang="scss" scoped></style>
