import Link from "next/link";

export default async function Page() {
  // Don't need useEffect because we are in server component
  const response = await fetch("http://dummyjson.com/posts?limit=10");
  const data = await response.json();

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>

      <ul>
        <li>
          {data.posts.map((post) => (
            <li key={post.id} className="mb-3">
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </li>
      </ul>
    </main>
  );
}
