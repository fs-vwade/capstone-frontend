// src/pages/Projects.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { useGetProjectsQuery } from '../features/projects';

const Projects = () => {
  const navigate = useNavigate();
  const { data: projects, isLoading } = useGetProjectsQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">All Projects</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="bg-gray-800 rounded-lg pl-10 pr-4 py-2"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => navigate(`/projects/${project.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;