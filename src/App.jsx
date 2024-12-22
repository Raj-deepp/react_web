import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Front from "./components/Front";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Front />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
