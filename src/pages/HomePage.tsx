import Card from "../components/common/Card";
import { APP_TITLE } from "../constants/app";
import useTitle from "../hooks/useTitle";

function HomePage() {
  useTitle(APP_TITLE);

  return (
    <div>
      <h1>{APP_TITLE}</h1>
      <p>
        A clean React + TypeScript starter project with routing, reusable
        components, and API structure.
      </p>

      <Card
        title="Architecture First"
        description="This boilerplate is structured to demonstrate scalable React project organization."
      />
    </div>
  );
}

export default HomePage;