import { MapPin } from 'lucide-react';
import Image from 'next/image';

interface EventCardProps {
  imageUrl: string;
  title: string;
  date: string;
  location: string;
  linkUrl: string;
}

export default function EventCard({ imageUrl, title, date, location, linkUrl }: EventCardProps) {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block">
      <div className="flex flex-col justify-between bg-background h-full p-4 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
        <div className="relative w-full aspect-square"> {/* Container com aspecto quadrado */}
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="rounded-xl object-cover" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="mt-4">
          <h1 className="font-semibold line-clamp-2">{title}</h1>
          <span className="text-sm mt-1 block">{date}</span>
          <div className="flex items-center gap-1 mt-2 bg-primary-hover text-white py-1 px-2 rounded-full w-fit text-sm">
            <MapPin size={18} />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </a>
  );
}