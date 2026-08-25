import {Route, Routes} from "react-router-dom"
import CreateUser from "./components/CreateUser.jsx"
import Feed from "./components/Feed.jsx"
function App() {
 

  return (
   <>
   <Routes>
    <Route path="/create" element={<CreateUser />} />
    <Route path="/posts" element={<Feed/>} />
    <Route path="*" element={<Error />} />
    
   </Routes>
   </>
  )
}

export default App
