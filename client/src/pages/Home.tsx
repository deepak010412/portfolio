import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Cloud, Server, Shield, Terminal, Database, GitBranch, 
  Cpu, Code2, Network, ExternalLink, ChevronRight, Download, Send, X
} from "lucide-react";
import { insertMessageSchema } from "@shared/schema";
import { useCreateMessage } from "@/hooks/use-messages";
import { useToast } from "@/hooks/use-toast";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { z } from "zod";

// --- Form Schema ---
const formSchema = insertMessageSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Home() {
  const { toast } = useToast();
  const createMessage = useCreateMessage();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" }
  });

  const onSubmit = (data: FormValues) => {
    createMessage.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent Successfully!",
          description: "I'll get back to you as soon as possible.",
          variant: "default",
        });
        form.reset();
      },
      onError: (err) => {
        toast({
          title: "Failed to send message",
          description: err.message,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="min-h-screen relative selection:bg-primary/30 selection:text-white scroll-smooth">
      <ParticlesBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-x-0 border-t-0 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="font-display font-bold text-xl flex items-center gap-2 glow-text text-foreground">
          <Cloud className="w-6 h-6 text-primary" />
          <span className="hidden sm:inline">DEEPAK VARMA | Cloud Engineer</span>
          <span className="sm:hidden">DEEPAK VARMA</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 text-primary mb-6 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Status: All Services Operational
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold font-display leading-tight mb-6">
            Architecting <span className="text-gradient glow-text">Scalable</span> Cloud Realities
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Cloud Engineer with 2.5 years of experience in Microsoft Azure and AWS. Skilled in infrastructure deployment, identity and access management, VPN setup, Azure Virtual Desktop (AVD), and cloud security. Experienced in monitoring and threat detection using Microsoft Sentinel, with a strong focus on secure, scalable, and cost-effective cloud solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,174,239,0.3)] hover:shadow-[0_0_30px_rgba(0,174,239,0.5)] transition-all">
              <span className="relative z-10 flex items-center gap-2">
                Contact Me <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <button className="px-8 py-4 glass-card text-foreground font-semibold rounded-xl hover:bg-white/5 transition-all flex items-center gap-2 border-white/10 hover:border-white/20">
              <Download className="w-4 h-4 text-muted-foreground" />
              Download Resume
            </button>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <SectionHeader title="Infrastructure Log" subtitle="Work Experience" />
        
        <div className="mt-16 max-w-3xl mx-auto relative border-l border-white/10 pl-8 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              {/* Node dot */}
              <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-card border-2 border-primary shadow-[0_0_10px_rgba(0,174,239,0.5)]" />
              
              <div className="glass-card glass-card-hover p-6 md:p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground font-display">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono bg-white/5 px-3 py-1 rounded-md">{exp.period}</span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills / Neural Network Grid */}
      <section id="skills" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <SectionHeader title="System Capabilities" subtitle="Technical Skills" />
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 group cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-4 rounded-xl bg-white/5 text-primary group-hover:text-accent transition-colors duration-300 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]">
                <skill.icon className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{skill.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 bg-black/20 rounded-3xl border border-white/5 my-12">
        <SectionHeader title="Deployed Clusters" subtitle="Featured Projects" />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full"
            >
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary mb-4 w-fit">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-2xl font-bold font-display mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications, Education & Languages */}
      <section id="credentials" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <SectionHeader title="System Credentials" subtitle="Qualifications" />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-display font-bold">Certifications</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {certifications.map(cert => (
                <span key={cert} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:border-primary/50 transition-colors">
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-display font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map(edu => (
                <div key={edu.degree} className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-bold text-lg">{edu.degree}</h4>
                  <p className="text-primary text-sm">{edu.institution}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-muted-foreground">{edu.period}</span>
                    <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-display font-bold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map(lang => (
                <span key={lang} className="px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-12 max-w-3xl mx-auto relative z-10">
        <SectionHeader title="Establish Connection" subtitle="Initiate Handshake" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden"
        >
          {/* Decorative network lines in background */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Network className="w-64 h-64 text-primary" />
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Entity Name</label>
                <input 
                  {...form.register("name")}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
                {form.formState.errors.name && (
                  <p className="text-xs text-destructive mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Return Address (Email)</label>
                <input 
                  {...form.register("email")}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@company.com"
                />
                {form.formState.errors.email && (
                  <p className="text-xs text-destructive mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Transmission Payload</label>
              <textarea 
                {...form.register("message")}
                rows={5}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Describe your infrastructure needs..."
              />
              {form.formState.errors.message && (
                <p className="text-xs text-destructive mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>

            <button 
              type="submit" 
              disabled={createMessage.isPending}
              className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50 shadow-[0_0_15px_rgba(0,174,239,0.3)] hover:shadow-[0_0_25px_rgba(0,174,239,0.5)]"
            >
              {createMessage.isPending ? (
                "Transmitting..."
              ) : (
                <>Transmit Data <Send className="w-4 h-4" /></>
              )}
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md py-8 text-center relative z-10 mt-12">
        <p className="text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-2">
          <Terminal className="w-4 h-4 text-primary" />
          <span>DEEPAK VARMA • Cloud Engineer</span>
          <span className="hidden sm:inline">•</span>
          <span>+91 7715094490</span>
          <span className="hidden sm:inline">•</span>
          <span><a href="mailto:deepak010412@gmail.com" className="hover:text-primary transition-colors">deepak010412@gmail.com</a></span>
          <span className="hidden sm:inline">•</span>
          <span><a href="https://linkedin.com/in/deepak-varma-5920b2248" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></span>
        </p>
      </footer>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-block"
      >
        <span className="text-accent font-mono text-sm uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20 mb-3 block w-fit mx-auto">
          {subtitle}
        </span>
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2"
      >
        {title}
      </motion.h2>
    </div>
  );
}

// --- Mock Data ---
const experiences = [
  {
    role: "Cloud Engineer",
    company: "LDS Infotech Pvt Ltd | Mumbai",
    period: "April 2024 - Present",
    description: "Managed Azure and AWS infrastructure including VMs, storage, load balancers, and networking. Administered Microsoft AD, Entra ID, Intune, RBAC. Performed subscription migrations and configured VPNs. Implemented Azure Backup and managed Azure Virtual Desktop (AVD).",
    tech: ["Azure", "AWS", "Entra ID", "AVD", "Terraform"]
  },
  {
    role: "Analyst",
    company: "eClerx Pvt. Ltd | Mumbai",
    period: "June 2023 – December 2023",
    description: "Gained hands-on exposure to healthcare marketing and sales enablement. Handled support tickets from U.S. clients and resolved networking, internet connectivity, and hardware issues.",
    tech: ["Support", "Networking", "Troubleshooting", "Customer Service"]
  }
];

const skills = [
  { name: "Compute & Infra", icon: Cloud, category: "Core" },
  { name: "Entra ID & AD", icon: Shield, category: "Identity" },
  { name: "Azure AVD & Arc", icon: Server, category: "Virtualization" },
  { name: "Networking", icon: Network, category: "Infrastructure" },
  { name: "Storage & Backup", icon: Database, category: "Data Management" },
  { name: "Security & Monitoring", icon: Shield, category: "Security" },
  { name: "App Services", icon: Code2, category: "Deployment" },
  { name: "Disaster Recovery", icon: GitBranch, category: "Reliability" },
];

const certifications = [
  "AZ-900", "SC-900", "AZ-104", "AZ-700", "AWS Cloud Practitioner", "Cisco – Basic Networking", "Appearing AZ-140"
];

const education = [
  { degree: "MSc.IT", period: "2021 – 2024", institution: "GN Khalsa College (Matunga), MU", grade: "7.8 CGPA" },
  { degree: "BSc", period: "2017 – 2022", institution: "SIWS College, MU", grade: "6.2 CGPA" }
];

const languages = [
  "English", "Hindi", "Marathi"
];

const projects = [
  {
    title: "Atumverse Solution Pvt Ltd",
    description: "Planned and assessed existing Azure infrastructure for migration. Executed end-to-end subscription-to-subscription migration with minimal downtime, covering VMs, Networking, and Storage.",
    link: "#",
    icon: Cloud,
    stack: ["Azure", "Migration", "Networking", "Storage"]
  },
  {
    title: "Symbiosis International University",
    description: "Implemented Azure Arc for 270+ on-premises servers. Designed Hybrid AD & Entra ID architecture with Azure-hosted PDC. Optimized identity management for 100K+ users.",
    link: "#",
    icon: Server,
    stack: ["Azure Arc", "Hybrid AD", "Entra ID"]
  },
  {
    title: "Compass Global Pvt Ltd",
    description: "Designed an Active-Passive Disaster Recovery solution. Performed in-place upgrades of Windows Server VMs and executed cloud-to-on-premises data migration.",
    link: "#",
    icon: Database,
    stack: ["Disaster Recovery", "Windows Server", "Data Migration"]
  }
];

// Helper icon
function ContainerIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  );
}
