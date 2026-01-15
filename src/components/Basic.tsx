import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Basic = () => {
    useGSAP(() => {
        gsap.to(["#box1", "#box2", "#box3"], {
            x: 100,
            duration: 2,
            repeat: -1,
            yoyo: true,
            rotate: 360,
            ease: "power1.out",
            borderRadius: "50%",
        });
        gsap.from(["#box4", "#box5", "#box6"], {
            x: 100,
            duration: 2,
            repeat: -1,
            yoyo: true,
            rotate: 360,
            ease: "power1.out",
            borderRadius: "50%",
        });
        gsap.fromTo(
            ["#box7", "#box8", "#box9"],
            {
                y: 0,
                rotate: 0,
                borderRadius: "0%",
            },
            {
                y: 100,
                repeat: -1,
                yoyo: true,
                rotate: 180,
                borderRadius: "100%",
                duration: 2,
                ease: "elastic.out(1, 0.3)",
            }
        );
    });
    return (
        <div className="grid grid-cols-3 border-b border-gray-600">
            <div className="w-screen mt-12">
                <h1 className="text-4xl text-red-600">Gsap.to</h1>
                <div className="w-screen mt-12">
                    <div className="h-22 w-22 bg-red-600 mb-8" id="box1"></div>
                    <div className="h-22 w-22 bg-blue-600 mb-8" id="box2"></div>
                    <div className="h-22 w-22 bg-green-600 mb-8" id="box3"></div>
                </div>
            </div>
            <div className="w-screen mt-12">
                <h1 className="text-4xl text-red-600">Gsap.from</h1>
                <div className="w-screen mt-12">
                    <div className="h-22 w-22 bg-yellow-600 mb-8" id="box4"></div>
                    <div className="h-22 w-22 bg-orange-600 mb-8" id="box5"></div>
                    <div className="h-22 w-22 bg-pink-600 mb-8" id="box6"></div>
                </div>
            </div>
            <div className="w-screen mt-12">
                <h1 className="text-4xl text-red-600">Gsap.fromTo</h1>
                <div className="w-screen mt-12">
                    <div className="h-22 w-22 bg-emerald-600 mb-8" id="box7"></div>
                    <div className="h-22 w-22 bg-amber-600 mb-8" id="box8"></div>
                    <div className="h-22 w-22 bg-blue-600 mb-8" id="box9"></div>
                </div>
            </div>
        </div>
    )
}

export default Basic