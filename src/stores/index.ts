import { defineStore } from "pinia";
import { ImageData } from "@/types";
import axios from "axios";

export const useStore = defineStore("main", {
    state: () => ({
        searchValue: "korea", // default 검색어
        images: [] as ImageData[], // 이미지 값, 타입 지정
        page: 1,
        perPage: 30, // Unsplash API에서는 페이지당 검색되는 이미지 수는 30개가 최대
        total: 1,
        totalPages: 1,
    }),
    actions: {
        async fetchApi() {
            const ACCESS_KEY = "0TbqBCCEFC_5hxSRcWSxRCtV4HFSk47DpzWmORCXBW8";
            const API_URL = `https://api.unsplash.com/search/photos?page=${this.page}&query=${this.searchValue}&per_page=${this.perPage}&client_id=${ACCESS_KEY}`;

            try {
                const res = await axios.get(API_URL);

                this.images = res.data.results;
                this.total = res.data.total;
                this.totalPages = res.data.total_pages;

                console.log(res);
            } catch (error) {
                console.log(error);
            }
        },
        setPage(payload: number) {
            this.page = payload;
            this.fetchApi(); // 페이지가 바뀔 때마다 API 호출
        },
        setSearchValue(payload: string) {
            this.searchValue = payload;
            this.setPage(1); // 검색어가 바뀔 때마다 페이지는 1로 초기화
        },
    },
});
