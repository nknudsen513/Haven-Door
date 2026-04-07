import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-door.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectSchool from "@/assets/project-school.jpg";
import projectMedical from "@/assets/project-medical.jpg";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const projects = [
  {
    title: "Rocketship Dream Community Prep",
    location: "Nashville, TN",
    scope: "All doors & hardware — last-minute timeline save",
    image: projectSchool,
  },
  {
    title: "Avid / Holiday Inn Dual Hotel",
    location: "Tennessee",
    scope: "350+ doors, frames & hardware across 168 rooms",
    image: projectHotel,
  },
  {
    title: "Meharry Medical Live Learn Center",
    location: "Nashville, TN",
    scope: "1,200+ doors installed — pre-hung, solid core & hollow metal",
    image: projectMedical,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center justify-between px-6 md:px-10 py-4">
          <span className="font-heading text-2xl tracking-tight">Haven Door</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button size="sm" variant="outline" asChild className="rounded-full">
            <a href="#contact">Get a quote</a>
          </Button>
        </div>
      </nav>

      {/* HERO — full bleed image with overlay */}
      <section className="relative h-screen min-h-[600px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Professional commercial door installation"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 pb-16 md:pb-24">
          <motion.p
            className="text-primary-foreground/70 text-sm font-medium tracking-widest uppercase mb-4"
            initial="hidden"
            animate="visible"
            variants={fade}
          >
            Commercial door installation
          </motion.p>
          <motion.h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-primary-foreground max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={1}
          >
            We hang doors.
            <br />
            <span className="italic text-primary">Really well.</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-primary-foreground/60 max-w-md text-lg leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={2}
          >
            Schools, hotels, medical centers — if it needs a door, we've probably installed a thousand of them.
          </motion.p>
          <motion.div
            className="mt-8 flex items-center gap-4"
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={3}
          >
            <Button size="lg" asChild className="rounded-full gap-2 px-8">
              <a href="#contact">
                Let's talk <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-primary-foreground/40" />
        </motion.div>
      </section>

      {/* STATS — full width dark bar */}
      <section className="surface-dark">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { num: "6+", label: "Years in business" },
            { num: "1,200+", label: "Doors in one project" },
            { num: "3", label: "States served" },
            { num: "350+", label: "Hotel room doors" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center py-12 md:py-16 border-r border-surface-dark-foreground/10 last:border-r-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={i}
            >
              <span className="font-heading text-4xl md:text-5xl text-primary">
                {stat.num}
              </span>
              <p className="mt-2 text-sm text-surface-dark-foreground/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT — wide two-column with big text */}
      <section id="about" className="px-6 md:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              About us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight">
              Straightforward people doing honest work
            </h2>
          </motion.div>
          <motion.div
            className="lg:col-span-3 space-y-6 text-muted-foreground leading-relaxed text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={1}
          >
            <p>
              Haven Door Installation has been serving Nashville and beyond since 2018. We work with general contractors on schools, medical facilities, office buildings, and hotels across Tennessee, South Carolina, and Florida.
            </p>
            <p>
              We're not the biggest crew out there — but we show up on time, communicate clearly, and do excellent work. Whether it's ten doors or twelve hundred, we treat every project the same.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {[
                "Commercial Doors",
                "Pre-Hung Doors",
                "Barn Doors",
                "Eliason Doors",
                "Bi-Fold Doors",
                "All Hardware",
              ].map((s) => (
                <div key={s} className="flex items-center gap-3 py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS — full-bleed stacked images */}
      <section id="work">
        <motion.div
          className="px-6 md:px-10 pt-20 pb-12 surface-dark"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Selected work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-surface-dark-foreground">
            Projects we're proud of
          </h2>
        </motion.div>

        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fade}
            custom={i}
          >
            <div className="relative h-[70vh] min-h-[400px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={1920}
                height={1080}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-10 md:pb-14">
              <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-primary-foreground/50 text-sm uppercase tracking-widest mb-1">
                {project.location}
              </p>
              <p className="text-primary-foreground/70 text-lg max-w-lg">
                {project.scope}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* TESTIMONIAL — full width, minimal */}
      <section className="px-6 md:px-10 py-24 lg:py-32">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
        >
          <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl leading-snug italic">
            "Working with Jake and his crew has been a great experience. They are responsive, quality driven and value their customer."
          </blockquote>
          <div className="mt-8">
            <p className="text-sm font-medium text-primary">Heather</p>
            <p className="text-sm text-muted-foreground">
              Project Manager, Nationwide General Contractor
            </p>
          </div>
        </motion.div>
      </section>

      {/* CONTACT — full width dark */}
      <section id="contact" className="surface-dark">
        <div className="px-6 md:px-10 py-24 lg:py-32">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 lg:gap-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <div>
              <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
                Get in touch
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-surface-dark-foreground mb-6">
                Got a project?
                <br />
                Let's talk.
              </h2>
              <p className="text-surface-dark-foreground/60 text-lg leading-relaxed max-w-md">
                Whether you need ten doors or a thousand, we'd love to hear about your project.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="tel:6158783056"
                className="flex items-center gap-5 p-6 rounded-xl border border-surface-dark-foreground/10 hover:border-primary/40 transition-colors"
              >
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-surface-dark-foreground/40 uppercase tracking-widest">Phone</p>
                  <p className="font-medium text-surface-dark-foreground">615-878-3056</p>
                </div>
              </a>
              <a
                href="mailto:jake@havendoorinstallation.com"
                className="flex items-center gap-5 p-6 rounded-xl border border-surface-dark-foreground/10 hover:border-primary/40 transition-colors"
              >
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-surface-dark-foreground/40 uppercase tracking-widest">Email</p>
                  <p className="font-medium text-surface-dark-foreground">jake@havendoorinstallation.com</p>
                </div>
              </a>
              <div className="flex items-center gap-5 p-6 rounded-xl border border-surface-dark-foreground/10">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-surface-dark-foreground/40 uppercase tracking-widest">Location</p>
                  <p className="font-medium text-surface-dark-foreground">323 N Margin St, Franklin, TN 37064</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background px-6 md:px-10 py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Haven Door Installation</p>
      </footer>
    </div>
  );
};

export default Index;
