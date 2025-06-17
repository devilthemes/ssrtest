// app/posts/[id]/page.tsx
import React from 'react';
import { use } from "react";
import { notFound } from 'next/navigation';
interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
}

export default async function PostPage({params}: {params: Promise<{ id: string }>}) {
const { id } = await params;
  const res = await fetch(`https://backend.metahorizon.com/wp-json/wp/v2/posts/${id}`, {
    next: { revalidate: 0 }, // Disable caching for SSR
  });

  if (!res.ok) {
    // You can also use notFound() to render 404 page
    //throw new Error('Post not found');
     notFound();
  }

  const post: Post = await res.json();

  if (!post || !post.id) {
    // Handle empty response (optional)
    notFound();
  }
  return (
    <main>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </main>
  );
}
