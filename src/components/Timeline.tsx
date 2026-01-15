import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Timeline = () => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, duration: 2, ease: "power1.out", repeatDelay: 1 });
    useGSAP(() => {
        tl.to("#box-1", {
            x: 100,
            rotate: 360,
            borderRadius: "50%",
        });
        tl.to("#box-2", {
            x: 100,
            rotate: 360,
            borderRadius: "40%",
        });
        tl.to("#box-3", {
            x: 100,
            rotate: 360,
            borderRadius: "30%",
        });
    })
    return (
        <div>
            <h1>Timeline</h1>
            <div className="w-screen mt-12">
                <h1 className="text-4xl text-red-600">Gsap.timeline</h1>
                <div className="w-screen mt-12">
                    <div className="h-22 w-22 bg-yellow-600 mb-8" id="box-1"></div>
                    <div className="h-22 w-22 bg-orange-600 mb-8" id="box-2"></div>
                    <div className="h-22 w-22 bg-pink-600 mb-8" id="box-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Timeline