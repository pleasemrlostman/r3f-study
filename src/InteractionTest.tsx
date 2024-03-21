import * as Three from "three";
import { ThreeEvent } from "@react-three/fiber";

export default function InteractionTest() {
  const clickFunction = (e: ThreeEvent<MouseEvent>) => {
    console.log("e", e);
    e.object.material.color = new Three.Color("green");
  };

  const overFunction = (e: any) => {
    console.log("e", e);
    e.object.scale.set(2, 2, 2);
  };
  const outFunction = (e: any) => {
    console.log("e", e);
    e.object.scale.set(1, 1, 1);
  };

  return (
    <>
      <ambientLight />
      <directionalLight intensity={3} />
      <mesh position={[-2, 0, 0]} onClick={(e) => clickFunction(e)}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[0, 0, 0]} onClick={(e) => clickFunction(e)}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[2, 0, 0]} onClick={(e) => clickFunction(e)}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
