
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileCode, Database, Network, Globe } from 'lucide-react';

const TechnologiesSection = () => {
  const frontendTech = [
    { name: "React.js", level: 90 },
    { name: "Vue.js", level: 85 },
    { name: "Angular", level: 80 },
    { name: "TypeScript", level: 95 },
  ];

  const backendTech = [
    { name: "Node.js", level: 92 },
    { name: "Python", level: 88 },
    { name: "MongoDB", level: 85 },
    { name: "SQL", level: 90 },
  ];

  const technologyCategories = [
    {
      icon: <FileCode size={40} className="text-horizop-green" />,
      title: "Frontend Development",
      description: "Modern, responsive interfaces built with React.js, Vue.js, and TypeScript for intuitive user experiences.",
      technologies: ["React.js", "Vue.js", "Angular", "TypeScript", "HTML5/CSS3"]
    },
    {
      icon: <Database size={40} className="text-horizop-green" />,
      title: "Backend Systems",
      description: "Scalable and secure server solutions using Node.js, Python, and robust database architectures.",
      technologies: ["Node.js", "Python", "MongoDB", "PostgreSQL", "Express"]
    },
    {
      icon: <Network size={40} className="text-horizop-green" />,
      title: "Data Analytics",
      description: "Comprehensive data processing pipelines with machine learning integration for actionable insights.",
      technologies: ["TensorFlow", "PyTorch", "Apache Spark", "Pandas", "Tableau"]
    },
    {
      icon: <Globe size={40} className="text-horizop-green" />,
      title: "IoT & Cloud Solutions",
      description: "Connected device ecosystems integrated with robust cloud infrastructure for real-time energy monitoring.",
      technologies: ["AWS", "Azure", "Google Cloud", "MQTT", "IoT Protocols"]
    }
  ];

  return (
    <section id="technologies" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-medium text-horizop-navy mb-4">Technologies We Use</h2>
          <div className="w-20 h-1 bg-horizop-green mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our technology stack is carefully selected to provide robust, scalable, and efficient solutions for the energy sector's unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-white to-horizop-lightBlue/30 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <FileCode className="mr-2 text-horizop-green" size={24} />
              Frontend Technologies
            </h3>
            <div className="space-y-4">
              {frontendTech.map((tech, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{tech.name}</span>
                    <span className="text-gray-500 text-sm">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-horizop-green h-2 rounded-full" 
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-horizop-lightBlue/30 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Database className="mr-2 text-horizop-green" size={24} />
              Backend Technologies
            </h3>
            <div className="space-y-4">
              {backendTech.map((tech, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{tech.name}</span>
                    <span className="text-gray-500 text-sm">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-horizop-green h-2 rounded-full" 
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12">Technology Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyCategories.map((category, index) => (
              <Card key={index} className="card-hover border-none shadow-md h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">{category.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{category.title}</h4>
                  <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
                  <div>
                    <h5 className="text-sm font-semibold text-horizop-navy mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech, i) => (
                        <span key={i} className="bg-horizop-lightBlue text-horizop-navy text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Our technology choices are driven by performance, security, and the specific requirements of energy sector applications. We continuously evaluate and integrate new technologies to maintain cutting-edge solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
