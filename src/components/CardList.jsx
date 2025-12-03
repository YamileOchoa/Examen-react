import Card from "./Card";

const CardList = ({ posts }) => (
    <div className="grid grid-cols-3 gap-4 justify-items-center">
        {posts.map((post) => (
            <Card key={post.id} post={post} />
        ))}
    </div>
);

export default CardList;