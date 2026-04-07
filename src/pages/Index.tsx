import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, ArrowLeft, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-door.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectSchool from "@/assets/project-school.jpg";
import projectMedical from "@/assets/project-medical.jpg";
import projectHotelInterior from "@/assets/project-hotel-interior.jpg";
import projectSchoolInterior from "@/assets/project-school-interior.jpg";
import projectMedicalInterior from "@/assets/project-medical-interior.jpg";
import { useRef, useState } from "react";

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
    interiorImage: projectSchoolInterior,
  },
  {
    title: "Avid / Holiday Inn Dual Hotel",
    location: "Tennessee",
    scope: "350+ doors, frames & hardware across 168 rooms",
    image: projectHotel,
    interiorImage: projectHotelInterior,
  },
  {
    title: "Meharry Medical Live Learn Center",
    location: "Nashville, TN",
    scope: "1,200+ doors installed — pre-hung, solid core & hollow metal",
    image: projectMedical,
    interiorImage: projectMedicalInterior,
  },
];

const doorTypes = [
  "Commercial Doors", "Pre-Hung Doors", "Barn Doors", "Eliason Doors",
  "Bi-Fold Doors", "All Required Hardware", "Service Doors",
];

const Bubble = ({ name, delay }: { name: string; delay: number }) => (
  <motion.div
    className="group cursor-default"
    initial={{ opacity: 0, scale: 0.7 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{
      scale: 1.12,
      y: -4,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    }}
  >
    <div className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-border/50 bg-card/70 backdrop-blur-sm group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-sm group-hover:shadow-[0_12px_36px_-6px_hsl(var(--primary)/0.4)]">
      <p className="font-heading text-sm md:text-base text-foreground/70 group-hover:text-primary-foreground transition-colors whitespace-nowrap">
        {name}
      </p>
    </div>
  </motion.div>
);

const Index = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth / 2;
    el.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center justify-between px-6 md:px-10 py-4">
          <span className="font-heading text-2xl tracking-tight">Haven Door</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button size="sm" variant="outline" asChild className="rounded-full">
            <a href="#contact">Contact us</a>
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Professional commercial door installation"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-primary-foreground tracking-tight">
              Haven Door
            </h1>
            <p className="mt-4 text-primary-foreground/50 text-sm md:text-base tracking-[0.3em] uppercase">
              Commercial Door Installation
            </p>
          </motion.div>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button size="lg" asChild className="rounded-full gap-2 px-8">
              <a href="#contact">
                Contact us <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-primary-foreground/40" />
        </motion.div>
      </section>

      {/* ABOUT */}
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
              Committed to excellence
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
              Haven Door Installation is a leading and reputable subcontracting company serving the Nashville area and beyond. Having launched into the industry in 2018, Haven Door Installation has completed schools, medical facilities, office buildings, hotels, and more with many different General Contractors from Tennessee, to South Carolina, to Florida.
            </p>
            <p>
              We prioritize clear communication, excellence, and integrity in every job whether it is ten doors or one thousand doors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE INSTALL */}
      <section className="px-6 md:px-10 py-24 lg:py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
              What we install
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl">
              Every door, done right
            </h2>
          </motion.div>
          {/* Bubbles */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {doorTypes.map((name, i) => (
              <Bubble key={name} name={name} delay={i * 0.04} />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS CAROUSEL */}
      <section id="projects" className="surface-dark py-24 lg:py-32">
        <div className="px-6 md:px-10 flex items-end justify-between mb-12">
          <motion.div
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
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-3 rounded-full border border-surface-dark-foreground/20 text-surface-dark-foreground/60 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-3 rounded-full border border-surface-dark-foreground/20 text-surface-dark-foreground/60 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-10 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="snap-start shrink-0 w-[85%] md:w-[calc(50%-12px)] group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
            >
              <div className="relative rounded-2xl overflow-hidden cursor-pointer">
                {/* Exterior (default) */}
                <img
                  src={project.image}
                  alt={`${project.title} — exterior`}
                  loading="lazy"
                  width={960}
                  height={640}
                  className="w-full aspect-[3/2] object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Interior (revealed on hover) */}
                <img
                  src={project.interiorImage}
                  alt={`${project.title} — interior`}
                  loading="lazy"
                  width={960}
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 text-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  Interior view
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/50 text-xs uppercase tracking-widest mb-1">
                    {project.location}
                  </p>
                  <p className="text-primary-foreground/70 text-sm md:text-base">
                    {project.scope}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" asChild className="rounded-full gap-2 border-surface-dark-foreground/20 text-surface-dark-foreground hover:border-primary hover:text-primary">
            <a href="#contact">
              See more projects <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* TESTIMONIAL */}
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

      {/* CONTACT */}
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
