import { ReactNode } from "react";
import styles from "../styles/layouts/Default.module.css";

type Props = {
  children: ReactNode;
};

const DefaultLayout = (props: Props) => {
  return (
    <div className={styles.app}>
      <main className={styles.content}>{props.children}</main>
    </div>
  );
};

export default DefaultLayout;
