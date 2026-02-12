import { AppLayout } from "./layout/AppLayout";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </>
  );
}

export default App;
