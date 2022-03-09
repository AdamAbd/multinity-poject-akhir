import React, { useEffect, useState } from "react";

function Blog() {
  const [blogs, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function getBlog() {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );
      const data = await response.json();

      setBlog(data);
      setLoading(false);
      // console.log(data);
    }
    getBlog();
  }, []);

  return (
    <section>
      <h1>Blog</h1>
      <p>Tulisan-tulisan ku tapi boong</p>
      {loading ? (
        <i>Loading Blog ...</i>
      ) : (
        <div>
          {blogs.map(function (blog) {
            return <article key={blog.id}>{blog.title}</article>;
          })}
        </div>
      )}
    </section>
  );
}

export default Blog;
