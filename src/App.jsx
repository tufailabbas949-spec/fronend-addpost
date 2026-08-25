import {Route, Routes} from "react-router-dom"
import CreateUser from "./components/CreateUser.jsx"
import Feed from "./components/Feed.jsx"
function App() {
 

  return (
   <>
   <nav className="flex items-center justify-center text-3xl">
    <Link to="/posts">posts</Link>
   </nav>
   <Routes>
    
    <Route path="/" element={<CreateUser />} />
    <Route path="/posts" element={<Feed/>} />
    <Route path="*" element={<Error />} />
    
   </Routes>
   </>
  )
}

export default App
