import ProjectCard from "../ProjectCard";
import styles from "../../styles/containers/ProjectsList.module.css";

type Props = {
  projects: Project[];
};

const ProjectsList = (props: Props) => {
  const { projects = [] } = props;
  return (
    <div className={styles.list}>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
