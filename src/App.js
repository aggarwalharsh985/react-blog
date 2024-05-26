import './App.css';
import Header from "./components/Header"
import Blog from "./components/Blog"
import Pageination from "./components/Pageination"

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header/>
      <Blog/>
      <Pageination/>
    </div>
  );
}

export default App;
