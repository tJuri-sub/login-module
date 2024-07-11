import { Header } from "./components/header";
import { RegForm } from "./components/loginform";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#726ef7] to-[#b6b4f9]">
        <Header />
        <div className="h-[70vh] flex justify-center items-center">
          <RegForm />
        </div>
      </div>
    </>
  );
}

export default App;
