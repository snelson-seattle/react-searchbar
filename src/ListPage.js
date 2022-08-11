// This component will show the filtered list of results from our search input
// The example is using dummy blog posts but you could change the content to
// match your needs

import Post from "./Post";

const ListPage = ({ searchResults }) => {
  const results = searchResults.map((post) => (
    <Post key={post.id} post={post} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching Posts</p>
    </article>
  );

  return <main>{content}</main>;
};

export default ListPage;
