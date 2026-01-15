import { useGSAP } from '@gsap/react'

const Stagger = () => {
    useGSAP(() => {
        gsap.to(".boxe", {
            x: 100,
            duration: 2,
            repeat: -1,
            yoyo: true,
            rotate: 360,
            ease: "power1.out",
            borderRadius: "50%",
            stagger: {
                amount: 0.5,
                grid: [
                    3, 2
                ],
                ease: "power1.out",
                from: "center",
                axis: "y",
            }
        });
    })
    return (
        <div>
            <h1>Stagger</h1>
            <div className="w-screen mt-12">
                <h1 className="text-4xl text-red-600">Gsap.stagger</h1>
                <div className="w-screen mt-12">
                    <div className="h-22 w-22 bg-purple-100 mb-8 boxe"></div>
                    <div className="h-22 w-22 bg-purple-200 mb-8 boxe"></div>
                    <div className="h-22 w-22 bg-purple-300 mb-8 boxe"></div>
                    <div className="h-22 w-22 bg-purple-400 mb-8 boxe"></div>
                    <div className="h-22 w-22 bg-purple-500 mb-8 boxe"></div>
                    <div className="h-22 w-22 bg-purple-600 mb-8 boxe"></div>

                </div>
            </div>
        </div>
    )
}

export default Stagger