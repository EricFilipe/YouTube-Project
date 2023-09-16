import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home-page";
import Shorts from "./pages/shorts";
import Subscription from "./pages/subscription";
import Library from "./pages/library";
import { MenuContext } from "./contexts/menuContext";
import Login from "./pages/login/login";
import Login2 from "./pages/login/login2";
import { UserStorage } from "./contexts/userContext";
import { EmailStorage } from "./contexts/emailContext";
import SignUp from "./pages/sign-up/sign-up";
import SignUp2 from "./pages/sign-up/sign-up2";
import VideoUpload from "./pages/videoupload/videoUpload";
import SearchPage from "./pages/search/search";
import YourVideos from "./pages/yourVideos/yourVideos";

function App() {
  const {openMenu} = useContext(MenuContext)

  return (
    <BrowserRouter>
      <UserStorage>
        <EmailStorage>
            <div className="App">
                <Routes>
                  <Route path="/" element={<Home openMenu={openMenu} />} />
                  <Route path="/shorts" element={<Shorts />} />
                  <Route path="/subscription" element={<Subscription />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/login/password" element={<Login2 />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/sign-up2" element={<SignUp2 />} />
                  <Route path="/video-upload" element={<VideoUpload />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/yourvideos" element={<YourVideos />} />
              </Routes>
            </div>
        </EmailStorage>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
