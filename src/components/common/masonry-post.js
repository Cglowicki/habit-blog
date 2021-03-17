import React from 'react';

export default function MasonryPost({ post, tagsOnTop }) {
  const style = {backgroundImage: `url("${require(`../../assets/images/shabs.jpeg`)}")`}

  return (
    <a className="masonry-post overlay" style={style} href={post.link}>
      <div className="image-text"></div>
    </a>
  )
}