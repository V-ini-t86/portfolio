import React from "react";
import { TimelineItem } from "../utils/types";
import gsap from "gsap";
import { Card } from "antd";

// WorkTimeline Component
const WorkTimeline: React.FC = () => {
  const items: TimelineItem[] = [
    {
      title: 'Document Library',
      subtitle: 'Associate Product Engineer, 2023–Present',
      description: 'Built a scalable document management system with AWS S3 and DynamoDB, processing 10K+ files.',
      tech: ['React.js', 'AWS', 'TypeScript'],
    },
    {
      title: 'Portfolio Dashboard',
      subtitle: 'Associate Product Engineer, 2023–Present',
      description: 'Developed a data-driven dashboard with Highcharts, reducing load time by 30%.',
      tech: ['React.js', 'Highcharts', 'Redux'],
    },
    {
      title: 'Microfrontend App',
      subtitle: 'Associate Product Engineer, 2023–Present',
      description: 'Led end-to-end development with Module Federation.',
      tech: ['React.js', 'Module Federation'],
    },
    {
      title: 'Reporting Module',
      subtitle: 'Associate Product Engineer, 2023–Present',
      description: 'Automated 100+ daily reports with Puppeteer.',
      tech: ['Puppeteer', 'Node.js'],
    },
  ];

  React.useEffect(() => {
    gsap.utils.toArray('.timeline-card').forEach((card: any, i: number) => {
      gsap.from(card, {
        opacity: 0,
        x: i % 2 === 0 ? -100 : 100,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });
    });
  }, []);

  return (
    <section id="work" className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="absolute left-1/2 w-1 bg-blue-900 h-full"></div>
        <div className="space-y-12">
          {items.map((item, index) => (
            <Card
              key={item.title}
              className={`timeline-card w-5/12 ${index % 2 === 0 ? 'ml-8' : 'ml-1/2'}`}
              title={item.title}
            >
              <p className="text-gray-600">{item.subtitle}</p>
              <p>{item.description}</p>
              <p className="text-blue-600">{item.tech.join(', ')}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkTimeline;