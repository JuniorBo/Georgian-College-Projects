'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const foundPost = blogPosts.find(p => p.id === id);
    setPost(foundPost);
    setIsLoading(false);
  }, [id]);

  if (isLoading) return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
    </div>
  );

  if (!post) return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <p className="text-xl">Post not found</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <article className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4">
              <Image
                src={post.authorImage}
                alt={post.author}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date} · {post.readTime}
                </p>
              </div>
            </div>
          </header>

          <div className="prose dark:prose-invert max-w-none">
            <div
              className="text-lg leading-relaxed text-gray-600 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.longDescription }}
            />
          </div>

          {/* Back to Blog Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
              Back to Blog
            </Link>
          </motion.div>
        </motion.div>
      </article>
    </div>
  );
}