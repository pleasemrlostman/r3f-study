import { useThree, useFrame } from "@react-three/fiber";
import * as Three from "three";
import { useEffect, useRef } from "react";
import { useControls } from "leva";
import { Box, Facemesh } from "@react-three/drei";

const ThreeElement2 = () => {
  const { size } = useThree();
  const boxRef = useRef<Three.Mesh>(null);

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      {/* <fog attach={"fog"} args={["blue", 3, 10]}></fog> */}
      <mesh ref={boxRef} position={[0, 1, 0]}>
        <boxGeometry />
        <meshStandardMaterial wireframe color="red" />
      </mesh>
      <mesh ref={boxRef} position={[2, 1, 0]}>
        <boxGeometry />
        <meshBasicMaterial color="red" visible={true} transparent={true} opacity={1} side={Three.FrontSide} alphaTest={1} depthTest={true} fog={true} />
      </mesh>

      <mesh ref={boxRef} position={[4, 1, 0]}>
        <boxGeometry />
        {/* <meshLambertMaterial color="red"  visible={true} transparent={true} opacity={1} side={Three.FrontSide} alphaTest={1} depthTest={true} fog={true} /> */}
        <meshPhongMaterial color="red" visible={true} transparent={true} opacity={1} side={Three.FrontSide} alphaTest={1} depthTest={true} fog={true} />
      </mesh>
    </>
  );
};

export default ThreeElement2;
