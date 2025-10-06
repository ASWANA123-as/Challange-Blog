import React, { useState } from "react";

function Blog() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const comment = {
      id: Date.now(),
      text: newComment,
      date: new Date().toLocaleString(),
    };
    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Blog Article */}
      <article className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          A Blog Application
        </h1>
        <h2 className="text-gray-500 mb-6">By Aswana • Oct 07, 2025</h2>
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.iWFjsA5X1fUI1sxE0ZZfmgHaFj?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="blog page"
          className="rounded-2xl shadow-lg mb-6"
        />
        <p className="text-lg leading-relaxed text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quas
          quod iste sit sed quo doloremque, quam cum odit enim laborum sequi
          corporis ipsum eum ducimus saepe laboriosam minus reprehenderit.
        </p>
      </article>

      {/* Comments Section */}
      <section className="border-t pt-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comments</h2>

        {/* Comment Input */}
        <div className="mb-6">
          <textarea
            rows="3"
            placeholder="Add your comment..."
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Post Comment
          </button>
        </div>

        {/* Comment List */}
        <div className="space-y-4">
          {comments.length === 0 ? (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="border p-4 rounded-lg bg-gray-50 shadow-sm"
              >
                <p className="text-gray-800">{comment.text}</p>
                <p className="text-sm text-gray-500 mt-2">{comment.date}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Blog;
