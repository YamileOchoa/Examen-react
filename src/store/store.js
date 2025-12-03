import { create } from 'zustand';

export const useStore = create((set, get) => ({
    posts: [],
    page: 1,
    perPage: 10,
    totalPages: 1,
    error: null,
    loading: false,

    fetchPosts: async (pageParam) => {
        set({ loading: true, error: null });

        try {
            const page = pageParam || get().page;
            const perPage = get().perPage;

            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();

            const totalPages = Math.ceil(data.length / perPage);
            const start = (page - 1) * perPage;
            const end = start + perPage;

            set({
                posts: data.slice(start, end),
                page,
                totalPages,
                loading: false
            });
        } catch (err) {
            set({ error: err.message, loading: false });
            console.error("Error fetching posts:", err);
        }
    }
}));