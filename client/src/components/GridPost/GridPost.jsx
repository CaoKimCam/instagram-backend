import React from 'react';
import './style.css';

function GridPost({ posts, handleClick }) {
  // Kiểm tra nếu posts là undefined hoặc null thì trả về null
  if (!posts) {
    return null; // hoặc return <div></div> hoặc thích hợp với UI của bạn
  }

  return (
    <div className='grid-post'>
      {/* Chọn tab */}
      <div className="tab">
        <div className="tabPosts" style={{ borderTop: "2px solid #000" }}>POSTS</div>
        <div className="tabSaved" style={{ borderTop: "2px solid #fff" }}>SAVED</div>
      </div>

      {/* Phần grid hiển thị các bài đăng của tài khoản đang đăng nhập */}
      <div className="grid">
        {posts.map((post, index) => (
          <div key={index} onClick={() => handleClick(post.postId)}>
            <img src={post.image} alt={`Post ${index}`} className='gridImage' />
          </div>
        ))}
      </div>

    </div>
  );
}

export default GridPost;
