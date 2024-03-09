import { Canvas } from "@react-three/fiber";
import ThreeElement from "./ThreeElement";
import "./App.css";
function App() {
  return (
    <>
      <Canvas
        camera={{
          near: 1,
          far: 20,
          fov: 150,
        }}
      >
        <ThreeElement />
      </Canvas>
    </>
  );
}

export default App;
