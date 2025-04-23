import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { RocketIcon, BrainIcon, Code, Sparkles, BarChart2, Globe, Laptop, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const qualities = [
    {
      icon: BarChart2,
      title: 'Data Analyst',
      description: 'Expertise in visualization tools like Tableau, Power BI, and Excel.'
    },
    {
      icon: Code,
      title: 'Programmer',
      description: 'Proficient in Python, Java, C++, R, SQL, and web technologies.'
    },
    {
      icon: Globe,
      title: 'Project Leader',
      description: 'Experience as technical analyst and organizing team collaborations.'
    },
    {
      icon: Sparkles,
      title: 'Problem Solver',
      description: 'Creative approaches to tackle complex technical challenges.'
    }
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
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-cosmic-blue/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cosmic-purple/5 blur-3xl"></div>
      
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            About <span className="text-cosmic-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8 rounded-full"></div>
        </motion.div>

        {/* Improved layout with better balance */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Profile picture with enhanced styling - positioned better */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 flex justify-center relative"
          >
            <div className="relative z-10">
              <div className="w-64 h-64 md:w-72 md:h-72 relative mx-auto">
                {/* Profile image with decorative frames */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cosmic-blue to-cosmic-purple opacity-20 blur-md"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-cosmic-blue/50 shadow-lg shadow-cosmic-blue/20">
                  <img 
                    src="/profile.jpg" 
                    alt="Anupriya Singh" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-cosmic-purple/20 animate-spin-slow"></div>
                <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-cosmic-blue/10 backdrop-blur-sm border border-cosmic-blue/20"></div>
                <div className="absolute -left-6 top-12 w-16 h-16 rounded-full bg-cosmic-purple/10 backdrop-blur-sm border border-cosmic-purple/20"></div>
              </div>
              
              {/* Contact links */}
              
            </div>
          </motion.div>
          
          {/* Text content - expanded width for better reading */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3 space-y-8"
          >
            <div className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-display font-bold text-cyan-300"
              >
                Hello, I'm Aditya Arya
              </motion.h3>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <p className="text-gray-300 leading-relaxed text-lg">
                Hi ! I'm Aditya Arya, a curious and driven individual passionate about technology, data, and making a meaningful impact through innovation. Currently pursuing my B.Tech at Lovely Professional University.

                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                I have a strong interest in data science, investment advisory, and AI-driven solutions. With hands-on experience in portfolio management and advisory services, I’ve managed portfolios worth ₹10 crore and completed various industry-relevant certifications and simulations.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                Apart from academics and work, I enjoy working on projects that combine creativity with problem-solving—like developing crop disease detection systems, working with datasets in R, and building Java-based applications. I’m also an active team player, having coordinated events like Coke Studio and represented my department in public relations.

                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                Always eager to learn, grow, and contribute, I’m on a journey to bridge the gap between data and decision-making—one project at a time.

                </p>
              </motion.div>
            </div>

            {/* Skills cards with improved styling */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="pt-4"
            >
              <h4 className="text-xl font-medium text-cyan-300 mb-6">What I bring to the table:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualities.map((quality, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className="bg-space-darker/80 backdrop-blur-sm border-cosmic-blue/10 hover:border-cosmic-blue/30 transition-all duration-300 h-full rounded-lg">
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="p-2 rounded-full bg-cosmic-blue/10 text-cyan-300 mt-1">
                          <quality.icon size={20} />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1 text-white">{quality.title}</h5>
                          <p className="text-gray-400 text-sm">{quality.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;