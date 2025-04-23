import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: string;
  date: string;
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "STUDY BUDDY – Smart Study Companion",
      description: "Study Buddy is an AI-enabled web application designed to enhance collaborative learning among students by helping them stay organized, motivated, and productive. The platform allows users to connect with peers based on subjects, study goals, or availability, enabling focused group study sessions and accountability partnerships.",
      technologies: ["React.js", "Node.js", "MongoDB", "AI"],
      image: "bg-[url('/project1.png')] bg-cover bg-center",
      githubUrl: "https://github.com/adityaarya2004/hello-cloudbuild-app",
      liveUrl: "#",
      category: "web",
      date: "Oct 2024- Nov 2024"
    },
    {
      id: 2,
      title: "CUSTOMER CHURN PREDICTION",
      description: "The goal is to identify patterns, track key metrics, and predict the likelihood of customers discontinuing service. By integrating predictive analytics and intuitive visualizations, the dashboard enables businesses to take proactive steps in improving customer retention and satisfaction.",
      technologies: ["PowerBI", "SQL", "Statistical Methods", "Machine Learning"],
      image: "bg-[url('/project2.png')] bg-cover bg-center",
      githubUrl: "https://github.com/adityaarya2004/Customer-Churn-Analysis",
      liveUrl: "#",
      category: "data",
      date: "Jun 2024 - Jul 2024"
    },
    {
      id: 3,
      title: "AI CODE TO PSEUDOCODE CONVERTER",
      description: "This project is an AI-powered tool that translates programming code into easy-to-understand pseudocode. Designed to assist students, educators, and developers, it simplifies complex logic into plain language instructions, improving code comprehension and documentation.",
      technologies: ["HTML", "CSS", "JavaScript", " OpenAI GPT"],
      image: "bg-[url('/project3.png')] bg-cover bg-center",
      githubUrl: "https://github.com/adityaarya2004/AI-Code-to-PseudoCode-converter",
      liveUrl: "#",
      category: "web",
      date: "Mar 2025 - Apr 2025"
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'data', label: 'Data Analysis' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Featured <span className="text-cosmic-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here's a collection of my most notable projects. Each one demonstrates 
            different skills in data analysis and web development.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              className={filter === category.value 
                ? "bg-cosmic-blue hover:bg-cosmic-blue/80 text-white" 
                : "text-gray-300 border-gray-600 hover:text-cosmic-blue hover:border-cosmic-blue"}
              onClick={() => setFilter(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="bg-space-light border border-gray-700 hover:border-cosmic-blue/50 transition-all duration-300 h-full overflow-hidden hover:shadow-lg hover:shadow-cosmic-blue/20">
                <div className={`h-40 ${project.image} flex items-center justify-center`}>
                  {/* Project preview image */}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-display">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    <span className="text-cosmic-blue text-xs">{project.date}</span> • {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-space-darker px-2 py-1 rounded-md text-cosmic-blue"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-gray-300 border-gray-600 hover:text-cosmic-blue hover:border-cosmic-blue"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-cosmic-blue hover:bg-cosmic-blue/80 text-white"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;