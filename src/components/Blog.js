import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const BlogPost = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BlogTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.8em;
`;

const BlogContent = styled.p`
  margin-bottom: 10px;
  line-height: 1.6;
`;

const BlogAuthor = styled.p`
  color: #888;
  font-size: 0.9em;
  text-align: right;
`;

const blogPosts = [
  {
    id: 1,
    title: 'The Importance of Wearing Hats',
    content: 'Hats have been an essential accessory for centuries. They not only protect us from the sun and rain but also add a stylish touch to our outfits. In this post, we explore the history of hats and how they have evolved over time...',
    author: 'Sagar Panigrahi'
  },
  {
    id: 2,
    title: 'How to Choose the Perfect Hat',
    content: 'Choosing the perfect hat can be a daunting task with so many styles and options available. In this guide, we will walk you through the key factors to consider when selecting a hat that suits your style and needs...',
    author: 'Sagar Panigrahi'
  }
];

const Blog = () => {
  return (
    <BlogContainer>
      {blogPosts.map(post => (
        <BlogPost key={post.id}>
          <BlogTitle>{post.title}</BlogTitle>
          <BlogContent>{post.content}</BlogContent>
          <BlogAuthor>Written by {post.author}</BlogAuthor>
        </BlogPost>
      ))}
    </BlogContainer>
  );
};

export default Blog;
