// Pinia 라이브러리에서 defineStore 함수를 가져옵니다.
// Pinia는 Vue.js의 상태 관리 라이브러리로, 애플리케이션의 상태를 중앙에서 관리하고 컴포넌트 간에 데이터를 공유할 수 있게 해줍니다.
import { defineStore } from "pinia";

// HTTP 요청을 위해 axios 라이브러리를 가져옵니다.
// axios는 브라우저와 Node.js 환경 모두에서 사용 가능한 Promise 기반의 HTTP 클라이언트입니다.
import axios from "axios";

// 'main'이라는 이름의 스토어를 정의합니다.
// 스토어는 애플리케이션의 상태를 중앙에서 관리하며, 상태 변화에 대한 로직을 캡슐화합니다.
export const useStore = defineStore("main", {
    // 스토어의 상태(state)를 정의합니다.
    state: () => ({
        // 기본 검색어로 "korea"를 설정합니다.
        // 사용자가 검색을 시작할 때의 초기값으로 사용됩니다.
        searchValue: "korea", // default 검색어

        // API에서 가져온 이미지 데이터를 저장할 배열을 초기화합니다.
        // 이 배열은 이미지 정보를 담고 있으며, UI에서 이를 렌더링할 수 있습니다.
        images: [], // 이미지 값

        // 현재 페이지 번호를 설정합니다.
        // 페이지네이션을 구현할 때 사용됩니다. 초기값은 1입니다.
        page: 1,

        // 페이지당 최대 이미지 수를 설정합니다 (Unsplash API 기준).
        // Unsplash API에서는 페이지당 최대 30개의 이미지를 반환합니다.
        perPage: 30, // Unsplash API에서는 페이지당 검색되는 이미지 수는 30개가 최대

        // 전체 이미지 수를 저장할 변수입니다.
        // API로부터 받은 전체 이미지의 수를 나타내며, 이를 통해 페이지네이션을 할 수 있습니다.
        total: 1,

        // 전체 페이지 수를 저장할 변수입니다.
        // 전체 이미지 수와 페이지당 이미지 수를 기반으로 계산됩니다.
        totalPages: 1,
    }),

    // 상태를 변경하는 메서드(actions)를 정의합니다.
    actions: {
        // Unsplash API에서 이미지를 가져오는 비동기 함수입니다.
        async fetchApi() {
            // Unsplash API의 접근 키를 설정합니다.
            // 이 키는 API 호출 시 인증을 위해 필요하며, 보안상 노출되지 않도록 주의해야 합니다.
            const ACCESS_KEY = "0TbqBCCEFC_5hxSRcWSxRCtV4HFSk47DpzWmORCXBW8";

            // API 요청을 위한 URL을 구성합니다.
            // 페이지 번호, 검색어, 페이지당 이미지 수, 인증 키를 URL에 포함하여 요청을 만듭니다.
            const API_URL = `https://api.unsplash.com/search/photos?page=${this.page}&query=${this.searchValue}&per_page=${this.perPage}&client_id=${ACCESS_KEY}`;

            // API 호출을 시도합니다.
            try {
                // axios를 사용하여 API에 GET 요청을 보냅니다.
                // await 키워드를 사용하여 비동기 요청이 완료될 때까지 기다립니다.
                const res = await axios.get(API_URL);

                // API 응답 결과를 콘솔에 출력하여 확인합니다.
                // 이는 디버깅에 유용하며, API에서 반환된 데이터 구조를 이해하는 데 도움이 됩니다.
                console.log(res);

                // API에서 받은 이미지 데이터를 스토어의 images 배열에 저장합니다.
                // res.data.results는 이미지 정보가 담긴 배열입니다.
                this.images = res.data.results;

                // API에서 받은 전체 이미지 수를 total에 저장합니다.
                // res.data.total은 검색 결과의 총 이미지 수를 나타냅니다.
                this.total = res.data.total;

                // API에서 받은 총 페이지 수를 totalPages에 저장합니다.
                // res.data.total_pages는 전체 페이지 수를 나타내며, 페이지네이션을 구현하는 데 사용됩니다.
                this.totalPages = res.data.total_pages;
            } catch (error) {
                // 에러가 발생한 경우, 에러 메시지를 콘솔에 출력합니다.
                // 이는 API 호출이 실패했을 때, 원인을 파악하는 데 도움을 줍니다.
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
