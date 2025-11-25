import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Stair = (props) => {
       const containerRef = useRef(null);
       const contentRef = useRef(null);

       useEffect(() => {
              const container = containerRef.current;
              const content = contentRef.current;
              const stairs = container.querySelectorAll(".StairScoped");

              // show stair overlay
              gsap.set(container, { display: "block" });

              const tl = gsap.timeline({
                     defaults: { ease: "power1.out" },
                     onComplete: () => {
                            gsap.set(container, { display: "none" });
                            gsap.set(stairs, { clearProps: "all" });
                     },
              });

              // Animation: grow stairs
              tl.to(stairs, {
                     height: "100%",
                     duration: 0.35,
                     stagger: { each: 0.05, amount: 0.35 },
              });

              // slide stairs down
              tl.to(stairs, {
                     y: "100%",
                     duration: 0.25,
                     stagger: { each: 0.04, amount: 0.25 },
              });

              // Content reveal
              gsap.from(content, {
                     opacity: 0,
                     scale: 1.12,
                     duration: 0.7,
                     ease: "power2.out",
                     delay: 0.3,
              });

              return () => {
                     tl.kill();
              };
       }, []); // EMPTY → run only once on first load

       return (
              <div className="relative z-50">

                     {/* Stair transition overlay */}
                     <div
                            ref={containerRef}
                            className="fixed inset-0 z-50 w-full h-screen overflow-hidden"
                            style={{ display: "none", background: "#fff" }}
                     >
                            <div className="absolute inset-0 flex">
                                   <div className="StairScoped w-1/7 h-[0%] bg-gray-900" />
                                   <div className="StairScoped w-1/7 h-[0%] bg-gray-800" />
                                   <div className="StairScoped w-1/7 h-[0%] bg-gray-900" />
                                   <div className="StairScoped w-1/7 h-[0%] bg-gray-800" />
                                   <div className="StairScoped w-1/7 h-[0%] bg-gray-900" />
                                   <div className="StairScoped w-1/7 h-[0%] bg-gray-800" />
                                   <div className="StairScoped w-1/7 h-[0%] bg-gray-900" />
                            </div>
                     </div>

                     {/* Your app content */}
                     <div ref={contentRef}>{props.children}</div>
              </div>
       );
};

export default Stair;
