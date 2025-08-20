import { Building2, FileText, Database, Search } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Essel Fabricators Pvt. Ltd",
      role: "Software Development Intern",
      duration: "June 2024 - August 2024",
      icon: FileText,
      description: "Developed an OCR-based document processing system with a comprehensive dashboard for data management and visualization.",
      technologies: ["Python", "OCR", "Dashboard Development", "Data Processing"],
      achievements: [
        "Built end-to-end OCR pipeline for document digitization",
        "Created interactive dashboard for data visualization",
        "Improved document processing efficiency by 60%"
      ]
    },
    {
      company: "Larsen & Toubro",
      role: "Data Analytics Intern",
      duration: "May 2024 - July 2024",
      icon: Database,
      description: "Focused on data automation and optimization projects, implementing efficient data processing workflows and analytical solutions.",
      technologies: ["Python", "Data Analytics", "Automation", "SQL"],
      achievements: [
        "Automated data processing workflows",
        "Optimized existing data pipelines",
        "Reduced manual processing time by 45%"
      ]
    },
    {
      company: "VESIT Research Lab",
      role: "Research Intern",
      duration: "January 2024 - May 2024",
      icon: Search,
      description: "Developed machine learning models for anomaly detection in large datasets, contributing to ongoing research projects.",
      technologies: ["Machine Learning", "Python", "TensorFlow", "Data Analysis"],
      achievements: [
        "Built anomaly detection pipeline using ML",
        "Published research findings in college journal",
        "Achieved 92% accuracy in anomaly classification"
      ]
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading text-gradient mb-6">Professional Experience</h2>
          <div className="w-16 h-1 bg-black mx-auto rounded-full mb-8"></div>
          <p className="text-body-large text-secondary max-w-2xl mx-auto">
            Practical experience gained through internships and research projects, 
            building real-world solutions and contributing to innovative projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="timeline-item animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="surface-elevated rounded-2xl p-8 hover-lift">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                      <exp.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-body font-medium text-secondary">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-caption text-muted font-medium mt-2 sm:mt-0">
                          {exp.duration}
                        </span>
                      </div>
                      
                      <p className="text-body text-muted mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-body text-muted">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;