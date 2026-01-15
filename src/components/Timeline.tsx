import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Timeline = () => {
    const tl = gsap.timeline();
    useGSAP(() => {
        tl.to("#box4", {
            x: 100,
            duration: 2,
            repeat: -1,
            yoyo: true,
            rotate: 360,
            ease: "power1.out",
            borderRadius: "50%",
        });
    })
    return (
        <div>
            <h1>Timeline</h1>
            <div className="w-screen mt-12">
                <h1 className="text-4xl text-red-600">Gsap.timeline</h1>
                <div className="w-screen mt-12">
                    <div className="h-52 w-52 bg-yellow-600 mb-8" id="box4"></div>
                    <div className="h-52 w-52 bg-orange-600 mb-8" id="box5"></div>
                    <div className="h-52 w-52 bg-pink-600 mb-8" id="box6"></div>
                </div>
            </div>
        </div>
    )
}

export default Timeline