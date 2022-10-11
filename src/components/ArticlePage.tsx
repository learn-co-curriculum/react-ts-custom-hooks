import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeEmojiList } from "../utils";
import { Post } from "../data/types";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQuery";

function ArticlePage() {
  // fetch data for a post
  const { id } = useParams();
  const { data: post, isLoaded } = useQuery(
    `http://localhost:4000/posts/${id}`
  );

  // set the document title
  const pageTitle = post
    ? `Underreacted | ${(post as Post).title}`
    : "Underreacted";
  useDocumentTitle(pageTitle);

  if (!isLoaded) return <h3>Loading...</h3>;

  const { minutes, title, date, preview } = post as Post;
  const emojis = makeEmojiList(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default ArticlePage;
