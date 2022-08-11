// This component is just for example purposes since
// our example list is displaying dummy blog posts

const Post = ({ post }) => {
  return (
    <article className="flex flex-col shadow my-4">
      <h2 className="text-2xl font-bold pb-3">{post.title}</h2>
      <p className="pb-3">{post.body}</p>
      <p className="pb-3">Post ID: {post.id}</p>
    </article>
  );
};

export default Post;
