import { create } from 'zustand';

export const useStore = create((set, get) => ({
    posts: [],
    page: 1,
    totalPages: 1,
    error: null,
    fetchPosts: async (pageParam) => {
        set({ loading: true, error: null });

        try {
            const page = pageParam || get().page;
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}&limit=10`);
            const data = await response.json();

            set({
                posts: data.items,
                page: page,
                totalPages: data.meta.totalPages,
                loading: false
            });
        } catch (err) {
            set({ error: err.message, loading: false });
            console.error("Error fetching posts:", err);
        }
    }
}));


