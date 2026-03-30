import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-door.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectSchool from "@/assets/project-school.jpg";
import projectMedical from "@/assets/project-medical.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const services = [
  "Commercial Doors",
  "Pre-Hung Doors",
  "Barn Doors",
  "Eliason Doors",
  "Bi-Fold Doors",
  "All Required Hardware",
];

const projects = [
  {
    title: "Rocketship Dream Community Prep",
    date: "July 2022",
    description:
      "Joined last minute to help Whiting-Turner meet their deadline before school began. Installed all doors and hardware, and collaborated on a cost-effective temporary hardware solution.",
    image: projectSchool,
  },
  {
    title: "Avid / Holiday Inn Dual Hotel",
    date: "April 2022",
    description:
      "A 168-room dual hotel where we installed over 350 doors, frames, and hardware throughout the property.",
    image: projectHotel,
  },
  {
    title: "Meharry Medical Live Learn Center",
    date: "March 2023",
    description:
      "Over 1,200 doors and hardware installed for this 154-room student living center, including pre-hung, solid core, and hollow metal doors.",
    image: projectMedical,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-heading text-xl font-bold tracking-tight">
            HAVEN DOOR
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button asChild size="sm">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Professional commercial door installation"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 md:pb-28 lg:px-24">
          <motion.p
            className="text-primary font-heading font-bold text-sm tracking-widest uppercase mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Nashville &amp; Beyond
          </motion.p>
          <motion.h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-surface-dark-foreground max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Serving with
            <br />
            <span className="text-primary">Excellence</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-surface-dark-foreground/70 max-w-lg text-lg"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            Commercial door installation for schools, hotels, medical facilities, and more — since 2018.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
          >
            <Button size="lg" asChild>
              <a href="#contact">Request a Quote</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-surface-dark-foreground/30 text-surface-dark-foreground hover:bg-surface-dark-foreground/10">
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <p className="text-primary font-heading font-bold text-sm tracking-widest uppercase mb-3">
              Who We Are
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold leading-tight">
              Committed to
              <br />
              Excellence
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Haven Door Installation is a leading subcontracting company serving the Nashville area and beyond. Since 2018, we've completed schools, medical facilities, office buildings, hotels, and more with general contractors from Tennessee to South Carolina to Florida.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We prioritize clear communication, excellence, and integrity in every job — whether it's ten doors or one thousand.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={1}
          >
            {[
              { num: "6+", label: "Years Experience" },
              { num: "1200+", label: "Doors in One Project" },
              { num: "3", label: "States Served" },
              { num: "100%", label: "Commitment" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-lg p-6 text-center border border-border"
              >
                <span className="font-heading text-3xl font-extrabold text-primary">
                  {stat.num}
                </span>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-padding surface-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-primary font-heading font-bold text-sm tracking-widest uppercase mb-3">
              Professional Services
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold">
              What We Install
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service}
                className="border border-surface-dark-foreground/10 rounded-lg p-8 hover:border-primary/50 transition-colors"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center mb-4">
                  <div className="w-4 h-4 rounded-sm bg-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-primary font-heading font-bold text-sm tracking-widest uppercase mb-3">
              Featured Work
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold">
              Our Projects
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="group rounded-xl overflow-hidden border border-border bg-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="overflow-hidden aspect-[3/2]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={960}
                    height={640}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">
                    {project.date}
                  </p>
                  <h3 className="font-heading text-lg font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-padding surface-dark">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-primary font-heading font-bold text-sm tracking-widest uppercase mb-6">
            What Partners Say
          </p>
          <blockquote className="text-xl md:text-2xl leading-relaxed font-medium italic text-surface-dark-foreground/90">
            "Working with Jake and his crew has been a great experience. They are responsive, quality driven and value their customer. They work efficiently, don't require constant oversight, and are always a pleasure to work with. I would definitely use Haven again."
          </blockquote>
          <p className="mt-6 text-primary font-bold">Heather</p>
          <p className="text-sm text-surface-dark-foreground/60">
            Project Manager, Nationwide General Contractor
          </p>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-primary font-heading font-bold text-sm tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold">
              Let's Work Together
            </h2>
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <a
              href="tel:6158783056"
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <Phone className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">615-878-3056</span>
            </a>
            <a
              href="mailto:jake@havendoorinstallation.com"
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <Mail className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-center">jake@havendoor<wbr/>installation.com</span>
            </a>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-center">
                323 N Margin St
                <br />
                Franklin, TN 37064
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="surface-dark px-6 py-10 text-center text-sm text-surface-dark-foreground/50">
        <p>© {new Date().getFullYear()} Haven Door Installation. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
