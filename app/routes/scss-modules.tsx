import type { MetaFunction } from "@remix-run/node";

import styles from '../styles/scss-modules.module.scss';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Remix</h1>
    </div>
  );
}
