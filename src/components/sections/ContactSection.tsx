import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gmadye13@gmail.com",
      href: "mailto:gmadye13@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXX-XXX-XXX",
      href: "tel:+91XXXXXXXXXX"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "MADEYE42",
      href: "https://github.com/MADEYE42"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "gouresh-madye",
      href: "https://www.linkedin.com/in/gouresh-madye"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would integrate with EmailJS or a backend service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading text-gradient mb-6">Get In Touch</h2>
          <div className="w-16 h-1 bg-black mx-auto rounded-full mb-8"></div>
          <p className="text-body-large text-secondary max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can 
            work together to bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="surface-elevated rounded-2xl p-8">
                <h3 className="text-subheading text-primary mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-body font-medium text-primary mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-body font-medium text-primary mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-body font-medium text-primary mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-subheading text-primary mb-6">Let's Connect</h3>
                  <p className="text-body text-muted leading-relaxed mb-8">
                    I'm always interested in hearing about new opportunities, 
                    collaborations, or just having a conversation about technology 
                    and innovation. Feel free to reach out through any of these channels.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="block surface-subtle rounded-xl p-6 hover-lift hover-glow transition-all duration-300 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-200">
                          <contact.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-body font-medium text-primary">
                            {contact.label}
                          </p>
                          <p className="text-body text-muted">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Availability Status */}
                <div className="surface-elevated rounded-xl p-6 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                    <div>
                      <h4 className="text-body font-semibold text-primary mb-2">
                        Currently Available
                      </h4>
                      <p className="text-body text-muted leading-relaxed">
                        Open to new opportunities, freelance projects, and collaborations. 
                        Typically respond within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-body text-muted mb-4">
            © 2024 Gouresh Madye. Built with React, TypeScript & Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-6">
            {contactInfo.filter(contact => contact.href.startsWith('http')).map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
              >
                <contact.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;