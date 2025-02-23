"use client"

import { useState } from "react"
import { BlogPostPreview } from "./BlogPostPreview"
import { CategoryFilter } from "./CategoryFilter"
import { blogPosts } from "@/lib/blog-data"
import type { BlogPost } from "@/lib/blog-data"

export function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts

  return (
    <div className="container mx-auto px-4 py-8">
      <main className="flex flex-col gap-1 mb-8">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">Heftix <span className="text-violet-500 underline">Blogs</span></h1>
      <p className="text-sm font-light leading-tight tracking-tight text-muted-foreground">get in touch with heftix to know more on our products and user end solutions, subscribe to our blog page.</p>
      </main>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post: BlogPost) => (
          <BlogPostPreview key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

