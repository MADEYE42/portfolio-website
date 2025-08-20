import { Code, Database, Brain, Globe, Server, Palette } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "Java", level: 75 },
        { name: "TypeScript", level: 80 }
      ]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React", level: 88 },
        { name: "Next.js", level: 82 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "JavaScript ES6+", level: 87 }
      ]
    },
    {
      title: "Backend & Databases",
      icon: Database,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 78 },
        { name: "REST APIs", level: 82 }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 78 },
        { name: "Machine Learning", level: 80 },
        { name: "Data Analysis", level: 82 },
        { name: "Python Libraries", level: 85 },
        { name: "Computer Vision", level: 72 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Server,
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Linux", level: 75 },
        { name: "VS Code", level: 90 }
      ]
    },
    {
      title: "Design & Others",
      icon: Palette,
      skills: [
        { name: "UI/UX Design", level: 75 },
        { name: "Figma", level: 70 },
        { name: "Project Management", level: 80 },
        { name: "Problem Solving", level: 92 },
        { name: "Team Leadership", level: 85 }
      ]
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading text-gradient mb-6">Technical Skills</h2>
          <div className="w-16 h-1 bg-black mx-auto rounded-full mb-8"></div>
          <p className="text-body-large text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, AI/ML, 
            and modern technologies to build scalable and innovative solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="surface-elevated rounded-2xl p-8 hover-lift animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="animate-slide-in-left"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-body font-medium text-primary">
                        {skill.name}
                      </span>
                      <span className="text-caption text-muted font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Footer */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="surface-subtle rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-subheading text-primary mb-4">
              Additional Expertise
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Agile Development", "DevOps", "Testing", "Code Review", 
                "Documentation", "Mentoring", "Public Speaking", "Research"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-body text-muted font-medium hover:bg-gray-50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;