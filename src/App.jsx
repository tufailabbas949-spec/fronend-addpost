import { Route, Routes, } from "react-router-dom"
import FeedPostAll from "./pages/FeedPostALL.jsx"
import Login from "./pages/Login.jsx"
import SingUp from "./pages/SingUp.jsx"
import Home from "./pages/Home.jsx"
import Createpost from "./pages/Createpost.jsx"
import ProtectedRoute from "./components/Protected.jsx"
import UserProfile from "./pages/UserProfile.jsx"
import UserUpadate from "./pages/UserUpadate.jsx"
import Layout from "./pages/Layout.jsx"
import SearchUser from "./pages/SerachUser.jsx"

function App() {


  return (
    <>
      <Routes>
        {/* <Route path="/" element={<h1>app runing</h1>} ></Route> */}
        <Route path="/" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/searchuser" element={<SearchUser />} />
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/userupdate" element={<UserUpadate />} />
            <Route path="/create/post" element={<Createpost />} />
            <Route path="/all_post" element={<FeedPostAll />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
