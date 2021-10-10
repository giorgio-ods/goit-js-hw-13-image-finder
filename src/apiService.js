
export default class ImgApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages() {
     const key = '23373005-f6518b9f8c0fff9e8298e5fbb'
     const url = `https://pixabay.com/api/?key=${key}&q=${this.searchQuery}&image_type=photo&page=${this.page}&per_page=12`
  
        return fetch(url).then(r => r.json()).then(data => {
            this.page += 1;
            return data.hits;
            })
    }

    resetPage() { this.page = 1 };

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    };
}
