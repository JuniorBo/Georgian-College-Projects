'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'AI & Development', 'Programming Tips'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-center mb-6">Blog</h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Thoughts, insights, and guides about web development, programming, and technology.
          </p>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-16">
        <AnimatePresence>
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {post.featured && (
                    <span className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs z-10">
                      Featured
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.date} · {post.readTime}</p>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}