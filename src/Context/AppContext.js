import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

function AppContextProvider({children}){
    const [loading , setLoading] = useState(false);
    const [page , setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [posts , setPosts] = useState([]);
}

async function fetchBlogPosts(page = 1){
    setLoading(true)
    let url = `${baseUrl}?page=${page}`;
    try {
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        setPage(data.page);
        setPosts(data.posts);
        setTotalPages(data.totalPages);
    } catch (error) {
        console.log("error");
        setPage(1);
        setPosts([]);
        setTotalPages(null);
    }
    setLoading(false);
}

function handlerPageChange(){
    setPage(page);
    fetchBlogPosts(page);
}

const value = {
    posts, setPosts,
    totalPages, setTotalPages,
    loading , setLoading,
    page , setPage,
    handlerPageChange,
    fetchBlogPosts
}

return <AppContext.Provider value={value}>
    {children}
</AppContext.Provider>












export default AppContextProvider;