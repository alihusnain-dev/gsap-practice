import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function App() {
  useGSAP(() => {
    gsap.to("#box1", {
      x: 100,
      duration: 2,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      ease: "power1.out",
      borderRadius: "50%",
    });
    gsap.to("#box2", {
      x: 100,
      duration: 2,
      delay: 1,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      ease: "power1.out",
      borderRadius: "50%",
    });
    gsap.to("#box3", {
      x: 100,
      duration: 2,
      delay: 2,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      ease: "power1.out",
      borderRadius: "50%",
    });
  });
  return (
    <>
      <div className="bg-black h-screen w-screen overflow-hidden">
        <h1 className="text-4xl text-red-600">Hello World</h1>
        <div className="w-screen mt-12">
          <div className="h-52 w-52 bg-red-600 mb-8" id="box1"></div>
          <div className="h-52 w-52 bg-blue-600 mb-8" id="box2"></div>
          <div className="h-52 w-52 bg-green-600 mb-8" id="box3"></div>
        </div>
      </div>
    </>
  )
}

export default App
