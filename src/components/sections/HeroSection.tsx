import { Phone, Mail, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const contactLinks = [
    { 
      icon: Phone, 
      href: "tel:+91XXXXXXXXXX", 
      label: "Phone",
      text: "+91 XXXX-XXX-XXX"
    },
    { 
      icon: Mail, 
      href: "mailto:gmadye13@gmail.com", 
      label: "Email",
      text: "gmadye13@gmail.com"
    },
    { 
      icon: Github, 
      href: "https://github.com/MADEYE42", 
      label: "GitHub",
      text: "MADEYE42"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/gouresh-madye", 
      label: "LinkedIn",
      text: "gouresh-madye"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-black/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-black/5 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-custom text-center relative z-10">
        {/* Profile Photo */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden mx-auto shadow-strong ring-4 ring-white">
              <img 
                src={profilePhoto} 
                alt="Gouresh Madye - Software Engineer"
                className="w-full h-full object-cover hover-lift"
              />
            </div>
            {/* Floating Ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-gray-200/50 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Name & Title */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-display text-gradient mb-4">
            Gouresh Madye
          </h1>
          <p className="text-subheading text-secondary max-w-2xl mx-auto">
            Software Engineer | AI/ML & Full-Stack Developer
          </p>
          <div className="w-24 h-1 bg-black mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: '0.4s' }}>
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="group surface-elevated rounded-xl p-6 hover-lift hover-glow transition-all duration-300"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-200">
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-primary">{link.label}</p>
                  <p className="text-xs text-muted mt-1">{link.text}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;