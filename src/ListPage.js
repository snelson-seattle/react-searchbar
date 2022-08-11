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
    <article className="flex flex-col">
      <h2 className="text-2xl font-bold pb-3">No Matching Posts</h2>
    </article>
  );

  return (
    <main className="container mx-auto flex flex-wrap py-6">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <h1 className="text-[32px] self-start mb-4">Posts</h1>
        {content}
      </section>
    </main>
  );
};

export default ListPage;
