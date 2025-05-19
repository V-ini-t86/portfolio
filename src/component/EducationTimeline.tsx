import { Card } from "antd";
import { gsap } from "gsap";
import React from "react";

const EducationTimeline: React.FC = () => {
  React.useEffect(() => {
    gsap.from('.education-card', {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: '.education-card',
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section id="education" className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="absolute left-1/2 w-1 bg-blue-900 h-32"></div>
        <Card
          className="education-card w-5/12 ml-8"
          title="B.Tech, Computer Science"
        >
          <p className="text-gray-600">Guru Gobind Singh Indraprastha University, 2019–2023</p>
          <p>Focused on JavaScript and algorithms.</p>
        </Card>
      </div>
    </section>
  );
};

export default EducationTimeline;