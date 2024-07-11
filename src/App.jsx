import { Header } from "./components/header";
import { RegForm } from "./components/loginform";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="h-[70vh] flex justify-center items-center">
          <RegForm />
        </div>
      </div>
    </>
  );
}

export default App;
