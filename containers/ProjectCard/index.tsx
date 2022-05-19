import styles from "../../styles/containers/ProjectCard.module.css";

type Props = {
  project: Project;
};

const ProjectCard = (props: Props) => {
  const { project } = props;

  return (
    <div className={styles.card}>
      <h3>{project.fields.Name}</h3>
      <div className={styles.content}>
        <p>{project.fields.Description}</p>
        <div className={styles.tags}>
          {project.fields.Technos.map((tag, index) => (
            <span
              className={styles.tag}
              key={index}
              style={{ background: getBackgroundColor(tag) }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.actions}>
        <a href={project.fields.URL} target="_blank">
          <button>Ouvrir</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

const getBackgroundColor = (str: string) =>
  `hsl(${hashCode(str) % 360}, 100%, 80%)`;

const hashCode = (str: string) => {
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};
