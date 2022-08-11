// This component is just for example purposes since
// our example list is displaying dummy blog posts

const Post = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Post ID: {post.id}</p>
    </article>
  );
};

export default Post;
