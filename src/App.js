import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Topbar />
      <div class="container">
        <Sidebar />
        <Home />
        {/* <div class="others">other pages</div> */}
      </div>
    </div>
  );
}

export default App;
