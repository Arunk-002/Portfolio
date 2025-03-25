import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import React from 'react';

export default function AnimatedSphere({ skills }) {
  const rotate = useMotionValue(0);

  // Flatten all skills into a single array
  const flattenedSkills = skills.flatMap(category => category.items);
  
  // Create 12 faces for spherical effect
  const faceCount = 12;
  const skillGroups = [];
  const chunkSize = Math.ceil(flattenedSkills.length / faceCount);
  for (let i = 0; i < faceCount; i++) {
    skillGroups.push(flattenedSkills.slice(i * chunkSize, (i + 1) * chunkSize));
  }

  useAnimationFrame((time) => {
    const newRotate = Math.sin(time / 8000) * 360;
    rotate.set(newRotate);
  });

  return (
    <div className="container">
      <motion.div 
        className="sphere"
        style={{
          rotateY: rotate,
          transformStyle: 'preserve-3d',
        }}
      >
        {skillGroups.map((group, index) => {
          const angle = (360 / faceCount) * index;
          return (
            <div 
              key={index}
              className="face"
              style={{
                transform: `
                  rotateY(${angle}deg)
                  translateZ(150px)
                `
              }}
            >
              {group.map((skill, i) => (
                <div key={i} className="skill-item">{skill}</div>
              ))}
            </div>
          )
        })}
      </motion.div>
      <style>{`
        .container {
          perspective: 1200px;
          width: 300px;
          height: 300px;
        }
        .sphere {
          width: 300px;
          height: 300px;
          position: relative;
          transform-style: preserve-3d;
        }
        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 10px;
        }
        .skill-item {
          font-size: 0.8rem;
          font-weight: 500;
          color: #ABB2BF;
          text-align: center;
          line-height: 3;
          padding: 0 20px;
          word-break: break-word;
          opacity: 0.9;
          transition: all 0.3s ease;
          position: relative;
          transform-origin: center;
        }
        .skill-item:hover {
          text-shadow: 0 0 12px rgba(0, 255, 136, 0.8);
          transform: scale(1.1);
          cursor: pointer;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}