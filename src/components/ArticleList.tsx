import ArticlePreview from "./ArticlePreview";
import { Post } from "../data/types";

interface Props {
  posts: Post[];
}

function ArticleList({ posts }: Props) {
  return (
    <main>
      {posts.map((post) => (
        <ArticlePreview key={post.id} {...post} />
      ))}
    </main>
  );
}

export default ArticleList;
