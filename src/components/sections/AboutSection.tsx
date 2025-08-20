import { GraduationCap, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-heading text-gradient mb-6">About Me</h2>
            <div className="w-16 h-1 bg-black mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Introduction */}
            <div className="animate-slide-in-left">
              <h3 className="text-subheading text-primary mb-6">
                Passionate Software Engineer
              </h3>
              <p className="text-body-large text-secondary leading-relaxed mb-6">
                I'm a dedicated Software Engineer specializing in AI/ML and Full-Stack Development. 
                With a strong foundation in computer science and hands-on experience in cutting-edge 
                technologies, I'm passionate about creating innovative solutions that make a real impact.
              </p>
              <p className="text-body text-muted leading-relaxed">
                My journey combines academic excellence with practical industry experience, allowing 
                me to bridge the gap between theoretical knowledge and real-world applications. I thrive 
                on solving complex problems and continuously learning new technologies.
              </p>
            </div>

            {/* Education Card */}
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="surface-elevated rounded-2xl p-8 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Bachelor of Engineering
                    </h4>
                    <p className="text-body font-medium text-secondary mb-2">
                      Vivekanand Education Society's Institute of Technology (VESIT)
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-muted" />
                        <span className="text-sm font-medium text-primary">CGPA: 8.6/10</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-caption text-muted">
                        Specialized in Computer Engineering with focus on AI/ML, Data Structures, 
                        Algorithms, and Software Development practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;