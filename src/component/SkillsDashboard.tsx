import { Card } from "antd";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const SkillsDashboard = () => {
  const chartOptions = {
    chart: {
      polar: true,
      type: 'column'
    },
    title: { text: 'Skill Proficiency' },
    xAxis: { categories: ['React.js', 'TypeScript', 'AWS', 'Highcharts', 'Redux'] },
    yAxis: { min: 0, max: 100 },
    series: [{ name: 'Proficiency', data: [90, 85, 75, 80, 80] }],
  };

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="Skill Proficiency" className="shadow">
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          </Card>
          <Card title="Project Impacts" className="shadow">
            <div className="h-48 bg-gray-300 flex items-center justify-center">[Bar Chart Placeholder]</div>
          </Card>
          <Card title="Visualization Demo" className="shadow">
            <div className="h-48 bg-gray-300 flex items-center justify-center">[Highcharts/Echarts Toggle]</div>
            <a href="#" className="text-blue-600 mt-4 inline-block">View Code</a>
          </Card>
        </div>k
      </div>
    </section>
  );
};

export default SkillsDashboard;