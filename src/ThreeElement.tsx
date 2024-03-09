import { useThree, useFrame } from "@react-three/fiber";
import * as Three from "three";
import { useRef } from "react";

const ThreeElement = () => {
  const { size } = useThree();
  const boxRef = useRef<Three.Mesh>(null);

  //   useFrame((state, delta) => {
  //     console.log("state: ", state);
  //     console.log("delta: ", delta);
  //     // if (boxRef.current) {
  //     //   boxRef.current.rotation.x += delta;
  //     //   boxRef.current.scale.z += 0.1;
  //     // }
  //   });

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      {/* three 는 기본적으로 라디안이란 값으로 돌리는데  우리가 생각하는 30은 degree 이다 그래서 변환을 해줘야함 */}
      <mesh
        ref={boxRef}
        rotation={[
          Three.MathUtils.degToRad(45),
          Three.MathUtils.degToRad(45),
          0,
        ]}
      >
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default ThreeElement;
