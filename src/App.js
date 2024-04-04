import "./App.scss";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VideoDetailsPage />} />
        <Route path="videos/:videoId" element={<VideoDetailsPage />} />
        <Route path="upload" element={<UploadPage />} />
        <Route path="*" element={<>Not Found 404</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
