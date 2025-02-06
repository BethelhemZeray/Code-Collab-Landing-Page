import Image from "next/image";
import { TProject } from "../constants/type";

type ProjectCardProps = {
  project: TProject;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full"
              style={{ backgroundColor: tag.color }}
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Source Code Link */}
        <a
          href={project.sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
}