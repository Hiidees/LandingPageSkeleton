import Particles from "react-tsparticles";
import "./Particles.css";
export default function ParticlesComponent() {
  return (
    <Particles
      canvasClassName="example"
      height="120px"
      width="300px"
      options={{
        fpsLimit: 60,
        interactivity: {
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
              value_area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            random: true,
            value: 5,
          },
        },
      }}
    />
  );
}
