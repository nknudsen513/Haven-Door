import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-door.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectSchool from "@/assets/project-school.jpg";
import projectMedical from "@/assets/project-medical.jpg";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
          <span className="font-heading text-2xl tracking-tight">
            Haven Door
          </span>
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

      {/* HERO */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-primary text-sm font-medium tracking-wide uppercase mb-6"
            initial="hidden"
            animate="visible"
            variants={fade}
          >
            Commercial door installation
          </motion.p>
          <motion.h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl"
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
            className="mt-8 text-muted-foreground max-w-md text-lg leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={2}
          >
            Schools, hotels, medical centers — if it needs a door, we've probably installed a thousand of them.
          </motion.p>
          <motion.div
            className="mt-10"
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
      </section>

      {/* HERO IMAGE */}
      <section className="px-6">
        <motion.div
          className="max-w-6xl mx-auto rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={heroImg}
            alt="Professional commercial door installation"
            className="w-full h-[50vh] md:h-[65vh] object-cover"
            width={1920}
            height={1080}
          />
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "6+", label: "Years in business" },
            { num: "1,200+", label: "Doors in one project" },
            { num: "3", label: "States served" },
            { num: "350+", label: "Hotel room doors" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={i}
            >
              <span className="font-heading text-4xl md:text-5xl text-primary">
                {stat.num}
              </span>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="section-padding surface-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
              Selected work
            </p>
            <h2 className="font-heading text-4xl md:text-5xl">
              Projects we're proud of
            </h2>
          </motion.div>
          <div className="space-y-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="grid md:grid-cols-2 gap-6 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fade}
                custom={i}
              >
                <div className={`rounded-xl overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={960}
                    height={640}
                    className="w-full aspect-[3/2] object-cover hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <div className={`py-4 ${i % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                  <h3 className="font-heading text-2xl md:text-3xl mb-3">
                    {project.title}
                  </h3>
                  <p className="text-surface-dark-foreground/60 text-sm uppercase tracking-wider mb-2">
                    {project.location}
                  </p>
                  <p className="text-surface-dark-foreground/75 leading-relaxed">
                    {project.scope}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
              About us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl leading-tight">
              Straightforward people doing honest work
            </h2>
          </motion.div>
          <motion.div
            className="space-y-5 text-muted-foreground leading-relaxed"
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
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 pb-20 lg:pb-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-card rounded-2xl p-10 md:p-14 border border-border"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <h3 className="font-heading text-2xl md:text-3xl mb-8">What we install</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
              {[
                "Commercial Doors",
                "Pre-Hung Doors",
                "Barn Doors",
                "Eliason Doors",
                "Bi-Fold Doors",
                "All Required Hardware",
              ].map((s) => (
                <div key={s} className="flex items-center gap-3 py-3 border-b border-border last:border-0">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm font-medium">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-padding surface-dark">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
        >
          <blockquote className="font-heading text-2xl md:text-3xl leading-snug italic text-surface-dark-foreground/90">
            "Working with Jake and his crew has been a great experience. They are responsive, quality driven and value their customer. I would definitely use Haven again."
          </blockquote>
          <p className="mt-8 text-sm font-medium text-primary">Heather</p>
          <p className="text-sm text-surface-dark-foreground/50">
            Project Manager, Nationwide General Contractor
          </p>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <div>
              <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
                Get in touch
              </p>
              <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-6">
                Got a project? Let's talk.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need ten doors or a thousand, we'd love to hear about your project.
              </p>
            </div>
            <div className="space-y-6">
              <a
                href="tel:6158783056"
                className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-primary/40 transition-colors group"
              >
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="font-medium">615-878-3056</p>
                </div>
              </a>
              <a
                href="mailto:jake@havendoorinstallation.com"
                className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-primary/40 transition-colors group"
              >
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="font-medium">jake@havendoorinstallation.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-5 rounded-xl border border-border">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="font-medium">323 N Margin St, Franklin, TN 37064</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="surface-dark px-6 py-8 text-center text-sm text-surface-dark-foreground/40">
        <p>© {new Date().getFullYear()} Haven Door Installation</p>
      </footer>
    </div>
  );
};

export default Index;
