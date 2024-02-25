import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainMenu from "./pages/mainmenu/MainMenu";
import HowToPlay from "./pages/howtoplay/HowToPlay";
import Category from "./pages/category/Category";
import Game from "./pages/ingame/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />,
  },
  {
    path: "/how-to-play",
    element: <HowToPlay />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
