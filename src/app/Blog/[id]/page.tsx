import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Não defina PageProps manualmente - deixe o Next.js inferir
export default function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = blogPosts.find((post) => post.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <Link 
          href="/Blog" 
          className="flex items-center text-primary mb-6 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para o blog
        </Link>

        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full"
              >
                {category}
              </span>
            ))}
            <span className="text-sm text-[#26282a]/50 ml-2">{post.date}</span>
          </div>

          <h1 className="text-3xl font-bold text-[#26282a] mb-6">{post.title}</h1>

          <div className="w-full h-96 relative rounded-lg overflow-hidden border border-[#26282a]/10 mb-8">
            <Image
              src={post.image}
              alt={`Imagem do post ${post.title}`}
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>
        </div>

        <div 
          className="prose max-w-none text-[#26282a]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-6 border-t border-[#26282a]/20">
          <Link 
            href="/Blog" 
            className="flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para todos os posts
          </Link>
        </div>
      </div>
    </div>
  );
}