import './App.css';
import Header from "./components/Header"
import Blog from "./components/Blog"
import Pageination from "./components/Pageination"
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';

function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts()
  },[fetchBlogPosts]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header/>
      <Blog/>
      <Pageination/>
    </div>
  );
}

export default App;
