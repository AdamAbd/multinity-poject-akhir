import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import "../Blog.css";

function BlogDetail() {
  const params = useParams();

  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(
    function () {
      async function getBlog() {
        document.title = "Loading...";

        const response = await fetch(
          `https://api.spaceflightnewsapi.net/v3/blogs/${params.id}`
        );

        if (!response.ok) {
          document.title = "Blog Not Found";
          return setNotFound(true);
        }

        const data = await response.json();
        document.title = `${data.title} > Blog > Adam Website`;

        setBlog(data);
        setLoading(false);
        // console.log(data);
      }

      getBlog();
    },
    [params]
  );

  if (notFound) {
    return (
      <section className="section">
        <h1 className="section-title">BlogDetail</h1>
        <p className="section-description">Yaah blognya gak ketemu nih :(</p>
      </section>
    );
  }

  return (
    <section className="section">
      {/* <Helmet>
        <title>
          {blog.title ? blog.title : ""} {">"} Blog {">"} Adam Website
        </title>
      </Helmet> */}
      {loading ? (
        <i>Loading Blog ...</i>
      ) : (
        <article>
          <h1 className="blog-title">{blog.title}</h1>
          <time className="blog-description">
            {new Date(blog.publishedAt).toLocaleDateString()}
          </time>
          <img className="blog-image" src={blog.imageUrl} alt={blog.title} />
          <p>{blog.summary}</p>
          <p className="blog-description">
            Source:{" "}
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              {blog.newsSite}
            </a>
          </p>
        </article>
      )}
    </section>
  );
}

export default BlogDetail;
