import { Link } from "react-router-dom";

import { useGetProjectsQuery } from "./projectSlice";

export default function ProjectList() {
  const { data: projects = [] } = useGetProjectsQuery();

  return (
    <>
      <h1>Projects Available</h1>
      <ul>
        {parties.map((p) => (
          <li key={p.id}>
            <h2>{p.projectname}</h2>
            <Link to={`/projects/${p.id}`}>Project Details</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
