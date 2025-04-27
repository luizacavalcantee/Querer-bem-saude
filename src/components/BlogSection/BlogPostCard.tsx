import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="border-b border-[#26282a]/20 pb-6 flex flex-col md:flex-row gap-6">
      <div className="flex-shrink-0 w-40 h-40 overflow-hidden border border-[#26282a]/10">
        <Image
          src={post.image}
          alt={`Imagem do post ${post.title}`}
          width={200}
          height={200}
          className="w-full h-full object-cover"
          quality={90}
          priority={post.id <= 3}
        />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex flex-wrap items-center gap-2">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="text-sm font-medium text-primary"
              >
                {category}
                {index < post.categories.length - 1 && ","}
              </span>
            ))}
            <span className="text-sm text-[#26282a]/50">•</span>
            <span className="text-sm text-[#26282a]/50">{post.date}</span>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-[#26282a] mb-2 hover:text-primary cursor-pointer">
          <Link href={`/Blog/${post.id}`}>
            {post.title}
          </Link>
        </h2>
        
        <p className="text-[#26282a]/70 mb-4">{post.excerpt}</p>
        
        <Link 
          href={`/Blog/${post.id}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          Continuar lendo
        </Link>
      </div>
    </article>
  );
}