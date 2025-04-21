import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, X, ZoomIn } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<null | {
    title: string;
    issuer: string;
    date: string;
    image: string;
  }>(null);

  const certificates = [
    {
      title: "Excel Skills Job Simulation",
      issuer: "JP Morgan Chase & Co.",
      date: "August 2024",
      link: "#",
      image: "/certificates/jpmorgan-certificate.png" // Save the JP Morgan certificate image
    },
    {
      title: "Data Science Internship",
      issuer: "Prodigy InfoTech",
      date: "August 2024",
      link: "#",
      image: "/certificates/prodigy-certificate.png" // Save the Prodigy InfoTech certificate image
    },
    {
      title: "Nari-Her right her pride",
      issuer: "LPU-NSS, Lovely Professional University",
      date: "April 2024",
      link: "#",
      image: "/certificates/lpu-nss-certificate1.png" // Save the LPU certificate image
    },
    {
      title: "6th VISTAAR Conference",
      issuer: "LPU-NSS, Lovely Professional University",
      date: "March 2023",
      link: "#",
      image: "/certificates/lpu-vistaar-certificate.png" // Save the LPU VISTAAR certificate image
    },
    {
      title: "Fundamentals of Management",
      issuer: "UCI Division of Continuing Education & Coursera",
      date: "March 2023",
      link: "#",
      image: "/certificates/uci-management-certificate.png" // Save the UCI certificate image
    },
    {
      title: "Understanding Cloud Fundamentals",
      issuer: "LinkedIn Learning",
      date: "February 2023",
      link: "#",
      image: "/certificates/linkedin-cloud-certificate.png" // Save the LinkedIn Learning certificate image
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleOpenCertificate = (cert: { title: string; issuer: string; date: string; image: string; link: string }) => {
    setSelectedCertificate(cert);
  };

  return (
    <>
      <section id="certificates" className="py-24 relative">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              <span className="text-cosmic-blue">Certificates</span> & Achievements
            </h2>
            <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Professional certifications and recognition highlighting my ongoing commitment
              to learning and excellence in data analysis and technology.
            </p>
          </motion.div>

          <div className="mb-16">
            <h3 className="text-2xl font-display font-bold text-cyan-300 mb-8">Certificates</h3>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {certificates.map((cert, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  className="group relative cursor-pointer"
                  onClick={() => handleOpenCertificate(cert)}
                >
                  {/* Certificate Card with Image Visible */}
                  <div className="rounded-lg overflow-hidden border-2 border-cosmic-blue/20 hover:border-cosmic-blue/50 shadow-lg transition-all duration-300 bg-space-light">
                    {/* Certificate Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={`${cert.title} Certificate`} 
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = '/certificate-placeholder.jpg';
                        }}
                      />
                      
                      {/* Overlay with zoom icon */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-cosmic-blue/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <ZoomIn className="text-white" size={24} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Certificate Info */}
                    <div className="p-4">
                      <h4 className="font-medium text-lg line-clamp-1 group-hover:text-cosmic-blue transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={14} />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-cyan-300 mb-8">Achievements</h3>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              <motion.div variants={item}>
                <Card className="bg-space-light border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-md hover:shadow-cosmic-blue/20">
                  <CardContent className="p-6">
                    <h4 className="font-medium text-lg mb-2">NSS Executive</h4>
                    <p className="text-gray-400 mb-2">Since September 2023</p>
                    <p className="text-gray-300">Spearheaded social initiatives like blood donation, plantation drives, and women's rights campaigns.</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={item}>
                <Card className="bg-space-light border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-md hover:shadow-cosmic-blue/20">
                  <CardContent className="p-6">
                    <h4 className="font-medium text-lg mb-2">HackOn with Amazon</h4>
                    <p className="text-gray-400 mb-2">May 2024</p>
                    <p className="text-gray-300">Competed in a hackathon focused on data structures and algorithms.</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={item}>
                <Card className="bg-space-light border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-md hover:shadow-cosmic-blue/20">
                  <CardContent className="p-6">
                    <h4 className="font-medium text-lg mb-2">Google Girl Hackathon</h4>
                    <p className="text-gray-400 mb-2">April 2024</p>
                    <p className="text-gray-300">Tackled advanced coding challenges, showcasing algorithmic skills and collaborative development.</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={item}>
                <Card className="bg-space-light border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-md hover:shadow-cosmic-blue/20">
                  <CardContent className="p-6">
                    <h4 className="font-medium text-lg mb-2">Event Management (Pentaomnia)</h4>
                    <p className="text-gray-400 mb-2">December 2023</p>
                    <p className="text-gray-300">Streamlined logistics and led teams to deliver a successful event.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-screen Certificate Modal */}
      <Dialog 
        open={selectedCertificate !== null} 
        onOpenChange={(open) => !open && setSelectedCertificate(null)}
      >
        <DialogContent className="bg-space-darker/95 border-cosmic-blue/30 max-w-7xl w-[95vw] h-[90vh] p-6 [&>button]:hidden">
          <div className="absolute top-4 right-4">
            <DialogClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-6 w-6 text-gray-400 hover:text-white" />
              </Button>
            </DialogClose>
          </div>
          
          <div className="mt-2 md:flex md:items-start md:gap-6 h-full overflow-hidden">
            {/* Large certificate view */}
            <div className="flex-1 h-full flex flex-col">
              {selectedCertificate?.image && (
                <div className="relative flex-1 overflow-auto rounded-lg border border-cosmic-blue/20 bg-black/20">
                  <img 
                    src={selectedCertificate.image} 
                    alt={`${selectedCertificate.title} Certificate`} 
                    className="w-full h-auto object-contain max-h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/certificate-placeholder.jpg';
                    }}
                  />
                </div>
              )}
            </div>
            
            {/* Certificate details sidebar - visible on larger screens */}
            <div className="md:w-72 mt-4 md:mt-0">
              <div className="bg-space-light p-4 rounded-lg border border-cosmic-blue/20">
                <h3 className="text-xl font-bold font-display text-cosmic-blue mb-2">
                  {selectedCertificate?.title}
                </h3>
                <p className="text-gray-300 mb-4">{selectedCertificate?.issuer}</p>
                
                <div className="flex items-center gap-2 text-gray-400 mb-6">
                  <Calendar size={16} />
                  <span>{selectedCertificate?.date}</span>
                </div>
                
                <p className="text-gray-400 text-sm mb-6">
                  This certificate validates my expertise and knowledge in {selectedCertificate?.title.toLowerCase()}.
                </p>
                
                <DialogClose asChild>
                  <Button className="w-full bg-cosmic-blue hover:bg-cosmic-blue/80 text-white">
                    Close
                  </Button>
                </DialogClose>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CertificatesSection;