import { useEffect } from "react";
import { useStore } from "../store/store";
import CardList from "../components/CardList";
import image from "../assets/image.png";

const Home = () => {
    const { posts, fetchPosts, loading, error } = useStore();

    useEffect(() => {
        fetchPosts(1);
    }, []);

    return (
        <div>
            <section
                className="relative w-full h-140 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Bienvenido a JSON PLACEHOLDER</h1>
                </div>
            </section>

            <section className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Posts</h2>

                {loading && <p className="text-center mb-4">Loading...</p>}
                {error && <p className="text-center text-red-500 mb-4">Error: {error}</p>}

                <CardList posts={posts ? posts.slice(0, 6) : []} />
            </section>
        </div>
    );
};

export default Home;