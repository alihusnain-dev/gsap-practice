import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerPrac = () => {
    const scrollRef = useRef();

    useGSAP(() => {
        if (!scrollRef.current) return;
        const boxes = gsap.utils.toArray(scrollRef.current);
        boxes.forEach((box: any) => {
            gsap.to(box, {
                x: 150 * (boxes.indexOf(box) + 5),
                rotation: 360,
                borderRadius: "100%",
                scale: 1.5,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: box,
                    start: "bottom bottom",
                    end: "top top",
                    scrub: true,
                },
            });
        });
    }, { scope: scrollRef })
    return (
        <div>
            <div className="h-screen w-screen bg-black"></div>
            <h1>ScrollTrigger</h1>
            <div ref={scrollRef}>
                <div className="scroll-box h-22 w-22 bg-pink-600 mb-8" id="scroll-pink"></div>
            </div>
            <div ref={scrollRef}>
                <div className="scroll-box h-22 w-22 bg-blue-600 mb-8" id="scroll-blue"></div>
            </div>
            <div className="h-screen w-screen bg-black"></div>
        </div>
    )
}

export default ScrollTriggerPrac