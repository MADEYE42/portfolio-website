import { Code, Database, Brain, Globe, Server, Palette } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python" },
        { name: "JavaScript" },
        { name: "C++" },
        { name: "Java" },
        { name: "TypeScript" }
      ]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "HTML/CSS" },
        { name: "Tailwind CSS" },
        { name: "JavaScript ES6+" }
      ]
    },
    {
      title: "Backend & Databases",
      icon: Database,
      skills: [
        { name: "Node.js" },
        { name: "Firebase" },
        { name: "MongoDB" },
        { name: "SQL" },
        { name: "REST APIs" }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: [
        { name: "TensorFlow" },
        { name: "Machine Learning" },
        { name: "Data Analysis" },
        { name: "Python Libraries" },
        { name: "Computer Vision" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Server,
      skills: [
        { name: "Git & GitHub" },
        { name: "Docker" },
        { name: "AWS" },
        { name: "Linux" },
        { name: "VS Code" }
      ]
    },
    {
      title: "Design & Others",
      icon: Palette,
      skills: [
        { name: "UI/UX Design" },
        { name: "Figma" },
        { name: "Project Management" },
        { name: "Problem Solving" },
        { name: "Team Leadership" }
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
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200 animate-fade-in"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-semibold text-gray-600">
                        {skill.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-body font-medium text-primary">
                      {skill.name}
                    </span>
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