import { useProjects } from "../utils/hooks";

export function HomePage() {
  const { data, loading, error } = useProjects();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data);

  return (
    <div className="flex flex-col gap-2">
      {data.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          nev={project.nev}
          alkotasAzonosito={project.alkotasAzonosito}
          keletkezesKezdoId={project.keletkezesKezdoIdopontjaInt}
          opontjaInt
          tipus={project.tipus}
          megjelenitendoNev={project.megjelenitendoNev}
        />
      ))}
    </div>
  );
}

/** @typedef {object} Project
 * @property {number} id
 * @property {string} nev
 * @property {string} alkotasAzonosito
 * @property {number} keletkezesKezdoIdopontjaInt
 * @property {string} tipus
 * @property {string} megjelenitendoNev
 */

/**
 * @param {Project} props
 * @returns {JSX.Element}
 */

function ProjectCard(props) {
  return (
    <div className="flex p-2 rounded gap-2 bg-blue-200">
      <img
        src="https://picsum.photos/80/80"
        alt={props.alkotasAzonosito}
        className="w-20 h-20 rounded-full"
      />

      <div className="flex flex-col gap-2">
        <h2 className="text-lg">{props.nev}</h2>
        <p>{props.alkotasAzonosito}</p>
        <p>{props.keletkezesKezdoIdopontjaInt}</p>
        <p>{props.tipus}</p>
        <p>{props.megjelenitendoNev}</p>
      </div>
    </div>
  );
}
