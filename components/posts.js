import { useState, useEffect } from "react";

const posts = [
  {
    title: "Post 1",
    subtitle: "Subtitle 1",
    date: new Date(2021, 11, 26, 12, 27),
    category: "published",
    image: "https://source.unsplash.com/random/400x200",
  },
  {
    title: "Post 2",
    subtitle: "Subtitle 2",
    date: new Date(2021, 12, 18, 10, 16),
    category: "draft",
    image: "https://source.unsplash.com/random/400x200",
  },
  {
    title: "Post 3",
    subtitle: "Subtitle 3",
    date: new Date(2022, 1, 15, 9, 10),
    category: "scheduled",
    image: "https://source.unsplash.com/random/400x200",
  },
  {
    title: "Post 4",
    subtitle: "Subtitle 4",
    date: new Date(2022, 1, 15, 9, 10),
    category: "published",
    image: "https://source.unsplash.com/random/400x200",
  },
];

export default function Posts({ postsCategory, sortPostsBy }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    if (postsCategory === "all") {
      setFilteredPosts(posts);
    } else {
      const filteredPosts = posts.filter(
        (post) => post.category === postsCategory
      );
      setFilteredPosts(filteredPosts);
    }
  }, [postsCategory]);

  useEffect(() => {
    console.log("Filtered posts: ", filteredPosts);
  }, [filteredPosts]);

  return (
    <>
      {filteredPosts &&
        filteredPosts.map((post) => (
          <div className="max-w-6xl mx-auto mt-4 flex pb-4 border-b border-gray-200">
            <div className="mr-4">
              <img src={post.image} alt="Post image" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-sm">{post.subtitle}</p>
              <p className="text-sm">{post.category}</p>
              <p className="text-sm">{JSON.stringify(post.date)}</p>
            </div>
          </div>
        ))}
    </>
  );
}
