import Sidebar from "../../components/Sidebar";
import ThemeButton from "../../components/ThemeButton";

const AdjectiveConjugation = () => {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar currentPage={"Adjective-Conjugation"} />

      <div className="w-full h-full pl-2 bg-slate-50 dark:bg-neutral-900">
        {/* Header */}
        <div className="flex px-2 pt-3">
          <div className="flex flex-col">
            <h1 className="text-4xl text-neutral-900 dark:text-slate-50">
              <b>Adjective</b> Conjugation
            </h1>
            <p className="bg-yellow-400 text-neutral-850 text-opacity-80 px-3 leading-5 w-fit font-mono mt-1 select-none">WORK IN PROGRESS</p>
          </div>
          <div className="flex-grow" />
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default AdjectiveConjugation;
