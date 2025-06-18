import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const projects = [
    {
      id: 1,
      title: "Futuristic AI-Powered Telegram mini app Interface Design",
      description: "Crafted a visually immersive mobile UI for an AI-based service platform, featuring sci-fi aesthetics, neon highlights, and intuitive navigation for user engagement.",
      image: "/ai.png", // Make sure this path is correct
      techStack: ["React", "Python", "TensorFlow", "PostgreSQL"],
      date: "2024-01"
    },
    {
      id: 2,
      title: "Landing Page for Industrial Service Platform",
      description: "Designed and built a professional landing page for a field services SaaS platform, highlighting business value, with responsive design and strong visual storytelling.",
      image: "/service.png", // Add appropriate image
      techStack: ["Solidity", "Node.js", "Web3", "MongoDB"],
      date: "2024-02"
    },
    {
      id: 3,
      title: "Interactive Sales Dashboard with Real-Time Analytics",
      description: "Developed a modern dark-themed dashboard visualizing sales trends, transaction history, and performance metrics using interactive charts and clean UI elements.",
      image: "/crm.png", // Add appropriate image
      techStack: ["Vue.js", "Django", "MySql", "Docker"],
      date: "2024-03"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Bahodirov M",
      role: "Backend  developer",
      bio: "Passionate about creating scalable applications and mentoring the next generation of developers.",
      image: "/sarah.png", // Add team member images
      social: {
        linkedin: "https://www.linkedin.com/in/muhammadyahyo-bahodirov",
        github: "https://github.com/bahodirov07uz/"
      }
    },
    {
      id: 2,
      name: "Odiljohn",
      role: "Lead Full-Stack Developer",
      bio: "Passionate about creating scalable applications and mentoring the next generation of developers.",
      image: "/marcus.png", // Add team member images
      social: {
        linkedin: "#",
        github: "https://github.com/odiljonDev2007"
      }
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl animate-float delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold neon-glow">AlgorSoft</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-neon-blue transition-colors">Home</a>
              <a href="#projects" className="hover:text-neon-blue transition-colors">Projects</a>
              <a href="#team" className="hover:text-neon-blue transition-colors">Team</a>
              <a href="#contact" className="hover:text-neon-blue transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-glow">
              Algor<span className="text-neon-blue">Soft</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of technology with cutting-edge solutions,
              innovative AI systems, and transformative digital experiences.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 animate-glow-pulse text-lg px-8 py-4"
            >
              Explore Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 neon-glow">Our Projects</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing innovative solutions that push the boundaries of technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="glass-card hover:scale-105 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-neon-blue/20 text-neon-blue text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-400">{project.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 neon-glow">Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the brilliant minds behind AlgorSoft's innovations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.id}
                className="glass-card hover:scale-105 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-blue/30">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-neon-blue transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-neon-purple font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-neon-blue transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={member.social.github}
                      className="text-gray-400 hover:text-neon-blue transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 neon-glow">Get In Touch</h2>
            <p className="text-xl text-gray-300">
              Ready to transform your ideas into reality? Let's discuss your next project.
            </p>
          </div>

          <Card className="glass-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-black/50 border-neon-blue/30 focus:border-neon-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-black/50 border-neon-blue/30 focus:border-neon-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="bg-black/50 border-neon-blue/30 focus:border-neon-blue min-h-32"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold neon-glow mb-4">Algorsoft</div>
          <p className="text-gray-400 mb-4">
            Pioneering the future of technology, one innovation at a time.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>© 2024 Algorsoft All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;