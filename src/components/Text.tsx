import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Text = () => {
    useGSAP(() => {
        gsap.to(".text", {
            opacity: 1,
            y: 0,
            ease: "power1.inOut",
        });
        gsap.fromTo(".para", {
            opacity: 0,
            y: 20,
        }, {
            opacity: 1,
            y: 0,
            delay: 1,
            stagger: 0.1,
        });
    })
    return (
        <div className='h-screen w-screen bg-black'>
            <h1 id="text" className='text opacity-0 translate-y-10 text-white'>GSAP by DevDoz</h1>
            <p className='mt-5 text-gray-500 para'>
                we can use same method like
                <code>gsap.to()</code>
                <code>gsap.from()</code>
                <code>gsap.fromTo()</code>
                <code>gsap.timeline()</code>  to animate Text.
            </p>
        </div>
    )
}

export default Text