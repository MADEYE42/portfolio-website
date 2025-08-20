import { Trophy, Users, Star, Target } from "lucide-react";

const LeadershipSection = () => {
  const roles = [
    {
      title: "CEO",
      organization: "ISTE VESIT",
      duration: "2023 - 2024",
      icon: Target,
      description: "Led the student organization with 200+ members, organizing technical events, workshops, and industry interactions.",
      achievements: [
        "Increased membership by 150% during tenure",
        "Organized 15+ technical workshops and seminars",
        "Established partnerships with 5 industry leaders",
        "Mentored 50+ students in technical skills"
      ]
    },
    {
      title: "Executive Secretary",
      organization: "ISTE VESIT",
      duration: "2022 - 2023",
      icon: Users,
      description: "Managed organizational operations and coordinated between different departments to ensure smooth functioning.",
      achievements: [
        "Streamlined internal communication processes",
        "Coordinated major technical symposium",
        "Built strong industry connections",
        "Developed leadership skills in team management"
      ]
    }
  ];

  const achievements = [
    {
      title: "Winner - Ethos Hackathon",
      organization: "IIT Guwahati",
      icon: Trophy,
      type: "Hackathon Victory",
      description: "First place in prestigious national-level hackathon with innovative solution for social impact.",
      highlight: "1st Place",
      color: "text-yellow-600 bg-yellow-50"
    },
    {
      title: "Top 50 Finalist",
      organization: "IIIT Sricity Hackathon",
      icon: Star,
      type: "National Recognition",
      description: "Selected among top 50 teams nationwide in competitive programming and innovation challenge.",
      highlight: "Top 50",
      color: "text-blue-600 bg-blue-50"
    }
  ];

  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading text-gradient mb-6">Leadership & Achievements</h2>
          <div className="w-16 h-1 bg-black mx-auto rounded-full mb-8"></div>
          <p className="text-body-large text-secondary max-w-2xl mx-auto">
            Demonstrating leadership capabilities and competitive excellence through 
            organizational roles and recognition in national-level competitions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Leadership Roles */}
          <div className="mb-16">
            <h3 className="text-subheading text-primary text-center mb-12 animate-fade-in">
              Leadership Experience
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {roles.map((role, index) => (
                <div 
                  key={index}
                  className="surface-elevated rounded-2xl p-8 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center">
                      <role.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-primary mb-1">
                        {role.title}
                      </h4>
                      <p className="text-body font-medium text-secondary mb-1">
                        {role.organization}
                      </p>
                      <span className="text-caption text-muted font-medium">
                        {role.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-body text-muted leading-relaxed mb-6">
                    {role.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <p className="text-caption text-muted font-medium mb-3">Key Achievements</p>
                    {role.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-body text-muted">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-subheading text-primary text-center mb-12 animate-fade-in">
              Competitive Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="surface-elevated rounded-2xl p-8 hover-lift animate-scale-in group"
                  style={{ animationDelay: `${(index + 2) * 0.2}s` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-200">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className={`text-sm px-2 py-1 rounded-full font-medium ${achievement.color}`}>
                          {achievement.type}
                        </span>
                      </div>
                    </div>
                    <div className={`text-2xl font-bold ${achievement.color.split(' ')[0]} opacity-80`}>
                      {achievement.highlight}
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-body font-medium text-secondary mb-4">
                    {achievement.organization}
                  </p>
                  <p className="text-body text-muted leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Developed */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="surface-subtle rounded-2xl p-8 max-w-4xl mx-auto">
              <h4 className="text-subheading text-primary mb-6">
                Leadership Skills Developed
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { skill: "Team Management", icon: "👥" },
                  { skill: "Strategic Planning", icon: "🎯" },
                  { skill: "Public Speaking", icon: "🎤" },
                  { skill: "Event Coordination", icon: "📅" },
                  { skill: "Stakeholder Relations", icon: "🤝" },
                  { skill: "Problem Solving", icon: "🧩" },
                  { skill: "Mentoring", icon: "🌟" },
                  { skill: "Innovation", icon: "💡" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-body font-medium text-primary">{item.skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;