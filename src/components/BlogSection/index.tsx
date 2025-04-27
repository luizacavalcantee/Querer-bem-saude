"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BlogPostCard } from "./BlogPostCard";
import { blogPosts, blogCategories } from "@/lib/blog-data";

export default function BlogSection() {
  const [activeTag, setActiveTag] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeTag === "Todos" || 
                          post.categories.includes(activeTag);
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-background px-4 py-8 md:px-12 md:py-12">
      <nav className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-0 justify-between w-full pb-4 border-b-1 border-[#26282a]/30">
        <div className="flex flex-wrap items-center gap-6">
          {blogCategories.map((category) => (
            <span
              key={category}
              className={`text-sm font-medium hover:text-primary cursor-pointer transition-colors ${
                activeTag === category ? "text-primary" : "text-[#26282a]/80"
              }`}
              onClick={() => setActiveTag(category)}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="relative w-64 self-start">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#26282a]" />
          <Input
            placeholder="Pesquisar por..."
            className="pl-10 border-none shadow-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </nav>

      <div className="mt-8 space-y-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))
        ) : (
          <div className="py-12 text-center">
            <p className="text-[#26282a]/50 mb-4">Nenhum post encontrado</p>
            <button 
              className="text-sm text-primary hover:underline"
              onClick={() => {
                setActiveTag("Todos");
                setSearchQuery("");
              }}
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}