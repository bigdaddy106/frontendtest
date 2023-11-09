import { lazy, Suspense } from "react";
import { Header } from "./shared/components";
import { PhotoProvider } from "./photos/components/PhotoProvider";
import "./App.css";

const Gallery = lazy(() =>
  import("./photos/components/Gallery" /* webpackChunkName: "gallery" */).then(
    (module) => ({ default: module.Gallery })
  )
);
const Album = lazy(() =>
  import("./photos/components/Album" /* webpackChunkName: "gallery" */).then(
    (module) => ({ default: module.Album })
  )
);

function App() {
  return (
    <>
      <Header title="Brainscape App Coding Exercise">
        Photo Album Generator by Ron C.
      </Header>
      <main>
        <PhotoProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Gallery />
            <Album />
          </Suspense>
        </PhotoProvider>
      </main>
    </>
  );
}

export default App;
