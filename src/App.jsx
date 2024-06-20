import { Header } from "./components/header";
import { RegForm } from "./components/loginform";

function App() {
  return (
    <>
      <Header />
      <div className="h-[70vh] flex justify-center items-center">
        <RegForm />
      </div>
    </>
  );
}

export default App;
