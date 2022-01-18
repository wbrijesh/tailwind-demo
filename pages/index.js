import Navbar from "../components/navbar";
import PageHeading from "../components/pageHeading";
import PostsFilter from "../components/postsFilter";
import { useState } from "react";
import Posts from "../components/posts";

export default function Home() {
  const [postsCategory, setPostsCategory] = useState("all");
  const [sortPostsBy, setSortPostsBy] = useState("newest");
  return (
    <>
      <Navbar />
      <PageHeading />
      <PostsFilter
        postsCategory={postsCategory}
        sortPostsBy={sortPostsBy}
        setPostsCategory={setPostsCategory}
        setSortPostsBy={setSortPostsBy}
      />
      <Posts postsCategory={postsCategory} sortPostsBy={sortPostsBy} />
    </>
  );
}
