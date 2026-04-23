import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <header style={styles.header}>
        <h2>React TypeScript BoilerPlate</h2>
        <nav style={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    borderBottom: "1px solid #ddd",
  },
  nav: {
    display: "flex",
    gap: "16px",
  },
  main: {
    padding: "24px",
  },
};

export default MainLayout;