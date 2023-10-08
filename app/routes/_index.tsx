import type { MetaFunction } from "@remix-run/node";
import '../styles/global.scss'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>TODO</h1>
      <ul>
        <li>make sass optional, warn when sass is not installed when there are .scss files</li>
        <li>add nested scss imports to watchFiles, not working with findFileUrl importer in sass.compile, should work though 🤯</li>
      </ul>
    </div>
  );
}
