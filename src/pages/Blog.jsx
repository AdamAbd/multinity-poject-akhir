import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../Blog.css";

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
    <section className="section">
      <h1 className="section-title">Blog</h1>
      <p className="section-description">
        Berikut adalah tulisanku (tapi bo'ong)
      </p>
      {loading ? (
        <i className="loading">Loading Blog ...</i>
      ) : (
        <div className="blogs">
          {blogs.map(function (blog) {
            return (
              <article className="blog" key={blog.id}>
                <h2 className="blog-title">
                  <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h2>
                <p className="blog-description">
                  {blog.newsSite}
                  {". "}
                  <time>{new Date(blog.publishedAt).toLocaleDateString()}</time>
                </p>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Blog;
