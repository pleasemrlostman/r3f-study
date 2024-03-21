import { Canvas } from "@react-three/fiber";
import ThreeElement from "./ThreeElement";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import ThreeElement2 from "./ThreeElement2";
import InteractionTest from "./InteractionTest";
function App() {
  const color = useControls({
    backgroundColor: "black",
  });

  const grid = useControls({
    segement: {
      value: 10,
      min: 2,
      max: 100,
      step: 1,
    },
    color: "black",
  });

  return (
    <>
      <Canvas
        camera={{
          near: 1,
          // 얼마나 멀리까지 렌더링 할꺼냐
          far: 100,
          position: [5, 5, 5],
        }}
      >
        <color attach="background" args={[color.backgroundColor]} />
        <OrbitControls
        // PI가  180도 / 4를 하면 좌우로 45도만 이동가능
        // 항상  마주보고있는 Z축이 중심
        // minAzimuthAngle={-Math.PI / 4}
        // maxAzimuthAngle={Math.PI / 4}
        // minPolarAngle={Math.PI / 6}
        // maxPolarAngle={-Math.PI / 6}
        />
        {/*  기본적으로 미터단위 */}
        <axesHelper args={[15]} />
        {/* 2번째 값은 격자 조절 첫번 째 m를 몇으로 나눠라 라는 의미*/}
        <gridHelper args={[10, grid.segement, grid.color]} />
        {/* <ThreeElement /> */}
        {/* <ThreeElement2 /> */}
        <InteractionTest />
      </Canvas>
    </>
  );
}

export default App;
