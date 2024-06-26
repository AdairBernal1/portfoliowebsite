import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <a 
    href={url}
    target="_blank"
    rel="noopener noreferrer" 
    className="z-30">
      <div className="h-full flex-shrink-0 relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <Image
          src={src}
          alt={title}
          width={600}
          height={600}
          className="h-80 w-full object-fill"
        />
        <div className="flex-1 p-6 flex flex-col justify-between">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
