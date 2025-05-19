import { Card } from "antd";
import { Achievement } from "../utils/types";

// AchievementsSection Component
const AchievementsSection: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: 'Led Microfrontend App',
      description: 'Reduced deployment time by 20% with Module Federation.',
      tech: ['React.js', 'Module Federation'],
    },
    {
      title: 'Optimized Dashboard',
      description: 'Achieved 30% faster load times with Highcharts.',
      tech: ['React.js', 'Highcharts'],
    },
    {
      title: 'Scaled Document Library',
      description: 'Processed 10K+ files, cutting retrieval time by 25%.',
      tech: ['AWS', 'React.js'],
    },
  ];

  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item) => (
            <Card key={item.title} title={item.title} className="shadow">
              <p>{item.description}</p>
              <p className="text-blue-600">{item.tech.join(', ')}</p>
              <a href="#" className="text-blue-600 mt-4 inline-block">View Details</a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;