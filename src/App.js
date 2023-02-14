import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllPrinciple from "./component/AllPrinciple";
import Principle1 from "./component/Principle1";
import Principle2 from "./component/Principle2";
import Principle3 from "./component/Principle3";
import Principle4 from "./component/Principle4";
import Principle5 from "./component/Principle5";
import Principle6 from "./component/Principle6";
import Principle7 from "./component/Principle7";
import Principle8 from "./component/Principle8";
import Principle9 from "./component/Principle9";
import SectionA from "./component/SectionA";
import SectionB from "./component/SectionB";
  

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllPrinciple />,
  },
  {
    path: "/principle-1",
    element: <Principle1 />,
  },
  {
    path: "/principle-2",
    element: <Principle2 />,
  },
  {
    path: "/principle-3",
    element: <Principle3 />,
  },
  {
    path: "/principle-4",
    element: <Principle4 />,
  },
  {
    path: "/principle-5",
    element: <Principle5 />,
  },
  {
    path: "/principle-6",
    element: <Principle6 />,
  },
  {
    path: "/principle-7",
    element: <Principle7 />,
  },
  {
    path: "/principle-8",
    element: <Principle8 />,
  },
  {
    path: "/principle-9",
    element: <Principle9 />,
  },
  {
    path: "/section-a",
    element: <SectionA />,
  },
  {
    path: "/section-b",
    element: <SectionB />,
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