import { useThree, useFrame } from "@react-three/fiber";
import * as Three from "three";
import { useEffect, useRef } from "react";
import { useControls } from "leva";
import { Box, Facemesh } from "@react-three/drei";

const ThreeElement = () => {
  const { size } = useThree();
  const boxRef = useRef<Three.Mesh>(null);
  const boxCopyRef = useRef<Three.Mesh>(null);

  //   useFrame((state, delta) => {
  //     console.log("state: ", state);
  //     console.log("delta: ", delta);
  //     // if (boxRef.current) {
  //     //   boxRef.current.rotation.x += delta;
  //     //   boxRef.current.scale.z += 0.1;
  //     // }
  //   });

  const box = useControls({
    rotation: {
      value: 0,
      min: -360,
      max: 360,
      step: 1,
    },
    color: "black",
  });

  const boxControl = useControls({
    width: { value: 1, min: 0.1, max: 10, step: 0.1 },
    height: { value: 1, min: 0.1, max: 10, step: 0.1 },
    depth: { value: 1, min: 0.1, max: 10, step: 0.1 },
    widthSeg: { value: 1, min: 0.1, max: 10, step: 1 },
    heightSeg: { value: 1, min: 0.1, max: 10, step: 1 },
    depthSeg: { value: 1, min: 0.1, max: 10, step: 1 },
  });

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      {/* three 는 기본적으로 라디안이란 값으로 돌리는데  우리가 생각하는 30은 degree 이다 그래서 변환을 해줘야함 */}

      <Facemesh position={[-1, 2, -1]}>
        <meshStandardMaterial wireframe color="yellow" />
      </Facemesh>
      {/* <mesh geometry={new Three.BoxGeometry(1, 1, 1)}>
        <meshStandardMaterial color="blue" />
      </mesh> */}

      <mesh ref={boxRef} position={[0, 0, 0]} rotation={[Three.MathUtils.degToRad(0), Three.MathUtils.degToRad(box.rotation), 0]}>
        <boxGeometry args={[boxControl.width, boxControl.height, boxControl.depth, boxControl.widthSeg, boxControl.heightSeg, boxControl.depthSeg]} />
        <meshStandardMaterial wireframe color="red" />
      </mesh>
      <mesh ref={boxCopyRef}>
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default ThreeElement;
