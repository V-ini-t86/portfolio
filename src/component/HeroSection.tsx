import { useSpring, animated } from '@react-spring/web';
import { Button } from 'antd';
import React from 'react';

// HeroSection Component
const HeroSection: React.FC = () => {
  const props = useSpring({ opacity: 1, delay: 300 });

  return (
    <animated.section id="home" style={props} className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Vinit</h1>
        <h2 className="text-3xl mb-6">Associate Product Engineer</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          I’m a passionate developer with 2+ years of experience building scalable web applications using React.js, TypeScript, and AWS. I specialize in data visualization with Highcharts and Echarts, delivering intuitive UI/UX and measurable performance gains.
        </p>
        <div className="space-x-4">
          <Button type="primary" href="#work">View Projects</Button>
          <Button type="default" href="/resume.pdf">Download Resume</Button>
        </div>
      </div>
    </animated.section>
  );
};

export default HeroSection;