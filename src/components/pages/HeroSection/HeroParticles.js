import React from 'react'
import Particles from "react-tsparticles";

const HeroParticles = () => {
const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
    console.log(container);
    };
    return (
        <div>
  <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "none",
          },
        },
        fpsLimit: 90,
        particles: {
          color: {
            value: "#ffffff",
          },
          move: {
            direction: "bottom-right",
            enable: true,
            outMode: "out",
            random: true,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 10,
          },
          opacity: {
              random: true,
              minimumValue: 0.2,
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: false,
            value: 100,
          },
        },
        detectRetina: true,
      }}
    />
        </div>
    )
}

export default HeroParticles
