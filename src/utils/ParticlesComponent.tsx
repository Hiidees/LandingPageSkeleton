import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import "./Particles.css";
export default function ParticlesComponent() {
  const [height, setHeight] = useState("");

  useEffect(() => {
    function handleResize(): void {
      setHeight(document.body.scrollHeight + "px");
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Particles
      height={height}
      canvasClassName="example"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        interactivity: {
          detect_on: "window",
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.2,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#d1dffb",
          },
          links: {
            color: "#d1dffb",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 2,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 1500,
            },
            value: 70,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
          size: {
            random: false,
            value: 2.5,
          },
        },
      }}
    />
  );
}
