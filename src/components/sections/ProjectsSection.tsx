import { ExternalLink, Github, Smartphone, Shield } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Crisis Call App",
      description: "A comprehensive multi-role authentication application designed for emergency response systems. Features secure user management, real-time communication, and role-based access control.",
      icon: Smartphone,
      githubUrl: "https://github.com/MADEYE42/multi-role-auth-app",
      technologies: ["React", "Node.js", "Firebase", "Authentication", "Real-time"],
      features: [
        "Multi-role user authentication system",
        "Real-time emergency communication",
        "Secure data encryption and storage",
        "Responsive mobile-first design"
      ],
      status: "Production Ready"
    },
    {
      title: "Disaster Management System",
      description: "An intelligent disaster management platform that helps coordinate emergency response efforts, track resources, and provide real-time updates during crisis situations.",
      icon: Shield,
      githubUrl: "https://github.com/MADEYE42/disaster-management",
      technologies: ["Next.js", "Firebase", "Machine Learning", "Maps API", "Real-time"],
      features: [
        "Real-time disaster tracking and alerts",
        "Resource management and allocation",
        "Emergency response coordination",
        "Predictive analytics for risk assessment"
      ],
      status: "In Development"
    }
  ];

  const techLogos = {
    "React": "⚛️",
    "Next.js": "▲",
    "Node.js": "🟢",
    "Firebase": "🔥",
    "Machine Learning": "🤖",
    "Authentication": "🔐",
    "Real-time": "⚡",
    "Maps API": "🗺️"
  };

  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading text-gradient mb-6">Featured Projects</h2>
          <div className="w-16 h-1 bg-black mx-auto rounded-full mb-8"></div>
          <p className="text-body-large text-secondary max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies, 
            focusing on real-world problems and user-centric design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="surface-elevated rounded-2xl p-8 hover-lift group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-200">
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">
                      {project.title}
                    </h3>
                    <span className={`text-sm px-2 py-1 rounded-full font-medium ${
                      project.status === 'Production Ready' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                {/* GitHub Link */}
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all duration-200 group/link"
                >
                  <Github className="w-5 h-5 text-gray-700 group-hover/link:scale-110 transition-transform" />
                </a>
              </div>

              {/* Description */}
              <p className="text-body text-muted leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body text-muted">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-caption text-muted mb-3 font-medium">Technologies Used</p>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="flex items-center space-x-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-sm">{techLogos[tech] || "⚡"}</span>
                      <span className="text-sm font-medium text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Project Link */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-black font-medium hover:text-gray-700 transition-colors group/view"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover/view:translate-x-1 group-hover/view:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;