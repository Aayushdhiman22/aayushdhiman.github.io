import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663791266275/AnjeBQZ3LfUhbTQ9kEBcPb/logo-mark-UJxExzXozgaG4xGJM9X9Lj.webp"
              alt="AD Logo"
              className="w-8 h-8"
            />
            <span className="heading-sm">Aayush Dhiman</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm text-accent hover:text-accent/80 transition-colors font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-40">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663791266275/AnjeBQZ3LfUhbTQ9kEBcPb/hero-background-S8cLCjQzo3SheDrqJwZV3f.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Business Operations · Delhi NCR</div>
            <h1 className="display-lg mb-6 leading-tight font-bold">
              I build systems that eliminate operational chaos
            </h1>
            <p className="body-lg text-muted-foreground mb-8 max-w-2xl">
              Assistant Manager at CURRYiT managing D2C and B2B fulfilment across 50+ warehouses. I combine process optimization with automation to create scalable operational infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                View My Work <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-border hover:bg-card">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2–3 hrs", label: "saved daily through automation" },
              { value: "80–90%", label: "reduction in operational errors" },
              { value: "50+", label: "warehouses managed" },
              { value: "500–600", label: "POs coordinated / month" },
            ].map((stat, i) => (
              <div
                key={i}
                data-reveal
                className={`scroll-reveal-item ${isVisible(`stat-${i}`) ? "in-view" : ""}`}
              >
                <div className="heading-md text-accent mb-2">{stat.value}</div>
                <div className="body-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <div
            data-reveal
            className={`scroll-reveal ${isVisible("about") ? "in-view" : ""}`}
          >
            <div className="label mb-4">01 · What I Do</div>
            <h2 className="display-md mb-8">Building operational excellence through automation</h2>
            <div className="space-y-6">
              <p className="body-lg text-muted-foreground">
                I'm an Assistant Manager – Business Operations at <span className="text-foreground font-semibold">CURRYiT</span>, where I manage end-to-end D2C order fulfilment and B2B logistics across platforms like Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon, and FirstClub.
              </p>
              <p className="body-lg text-muted-foreground">
                Day to day, that means dispatch planning, vendor and warehouse coordination, and tracking KPIs like OFD delays, RTO reasons, and missing GRNs. I also build the tools that make that process lighter — Google Apps Script automations, tracking sheets, and small dashboards — whenever a manual process becomes repetitive enough to fix properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container max-w-3xl">
          <div
            data-reveal
            className={`scroll-reveal ${isVisible("experience") ? "in-view" : ""}`}
          >
            <div className="label mb-4">02 · Experience</div>
            <h2 className="display-md mb-12">Where I've worked</h2>

            <div className="space-y-12">
              <div className="accent-bar pb-8 border-b border-border">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <h3 className="heading-md">Assistant Manager – Business Operations</h3>
                  <span className="label text-accent">Dec 2024 — Present</span>
                </div>
                <p className="body-md text-muted-foreground mb-2">CURRYiT</p>
                <ul className="space-y-3 mt-6">
                  {[
                    "Run D2C fulfilment (40–50 orders/day) and B2B logistics (500–600 POs/month, 20–25 daily dispatches)",
                    "Built Apps Script automations that cut manual work by 2–3 hrs/day and errors by 80–90%",
                    "Own MIS reporting, demand planning, and weekly dashboards for founders & leadership",
                    "Coordinate with logistics partners Shiprocket Cargo & Movin across 50+ warehouses",
                    "Identify operational gaps and deliver data-backed recommendations to improve efficiency",
                  ].map((bullet, i) => (
                    <li key={i} className="body-md text-muted-foreground flex gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <div
            data-reveal
            className={`scroll-reveal ${isVisible("projects") ? "in-view" : ""}`}
          >
            <div className="label mb-4">03 · Projects</div>
            <h2 className="display-md mb-12">Things I've built</h2>

            <div className="space-y-16">
              {[
                {
                  title: "CurryIT Attendance System",
                  year: "2025",
                  description:
                    "Live attendance app with geolocation check-in, leave workflows, and role-based access for employees, managers, and admins. Also built a self-contained version with JWT auth.",
                  impact: "Replaced manual attendance with one source of truth.",
                  image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663791266275/AnjeBQZ3LfUhbTQ9kEBcPb/project-showcase-1-Vyt4VW6yCRmTmVfGutws3M.webp",
                  tags: ["Firebase", "React", "TypeScript", "Supabase"],
                },
                {
                  title: "Dispatch Analytics Dashboard",
                  year: "2025",
                  description:
                    "Turns raw dispatch Excel exports into a single shareable dashboard: shipped-quantity trends, brand/warehouse breakdowns, status tracking across Blinkit, Swiggy, Zepto, BigBasket & FirstClub.",
                  impact: "One HTML file, zero installs — opens anywhere.",
                  image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663791266275/AnjeBQZ3LfUhbTQ9kEBcPb/project-showcase-2-8H687X36f9reuKSrux2tFK.webp",
                  tags: ["Chart.js", "Excel", "HTML"],
                },
                {
                  title: "Box Sticker Generator",
                  year: "2024",
                  description:
                    "Reads warehouse Excel sheets and auto-generates branded A5 box stickers as print-ready PDFs.",
                  impact: "Cuts manual sticker-making out of dispatch.",
                  tags: ["HTML/JS", "Excel parsing", "PDF gen"],
                },
                {
                  title: "D2C Packaging Sheet Automation",
                  year: "2024",
                  description:
                    "AI-assisted Google Apps Script tool that handles data formatting, duplicate removal, and multi-sheet generation for packaging references.",
                  impact: "2–3 hrs/day saved, 80–90% fewer errors.",
                  tags: ["Apps Script", "Google Sheets"],
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className={`scroll-reveal-item ${isVisible(`project-${i}`) ? "in-view" : ""}`}
                >
                  <div className="accent-bar pb-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <h3 className="heading-md">{project.title}</h3>
                      <span className="label text-accent">{project.year}</span>
                    </div>
                    <p className="body-md text-muted-foreground mb-3">{project.description}</p>
                    <p className="body-md text-accent mb-6">→ {project.impact}</p>
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full rounded-lg mb-6 border border-border hover-scale"
                      />
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="label bg-card px-3 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container max-w-3xl">
          <div
            data-reveal
            className={`scroll-reveal ${isVisible("skills") ? "in-view" : ""}`}
          >
            <div className="label mb-4">04 · Skills & Tools</div>
            <h2 className="display-md mb-12">What I work with</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="heading-sm mb-6 text-accent">Operations</h3>
                <div className="space-y-3">
                  {[
                    "MIS Reporting & Dashboarding",
                    "Demand Planning",
                    "D2C & B2B Logistics",
                    "Supply Chain Coordination",
                    "KPI Tracking",
                    "Process Automation",
                    "Stakeholder Coordination",
                  ].map((skill, i) => (
                    <div key={i} className="body-md text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="heading-sm mb-6 text-accent">Tools & Tech</h3>
                <div className="space-y-3">
                  {[
                    "Advanced Excel",
                    "Google Sheets & Apps Script",
                    "Shiprocket Cargo",
                    "Amazon Seller Central",
                    "Firebase",
                    "React / TypeScript",
                    "AI Tools (ChatGPT, Gemini, Claude)",
                  ].map((tool, i) => (
                    <div key={i} className="body-md text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <div
            data-reveal
            className={`scroll-reveal ${isVisible("contact") ? "in-view" : ""}`}
          >
            <h2 className="display-md mb-4">Let's talk operations</h2>
            <p className="body-lg text-muted-foreground mb-12">
              Open to conversations on operations, automation, and supply chain. Based in Delhi NCR.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:aayushdhimanok@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-card/80 transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span className="body-md">aayushdhimanok@gmail.com</span>
              </a>
              <a
                href="tel:+919720814681"
                className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-card/80 transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span className="body-md">+91 97208 14681</span>
              </a>
            </div>

            <div className="flex justify-center gap-6 mt-12">
              <a
                href="https://linkedin.com/in/aayushdiman22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Aayushdhiman22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container text-center">
          <p className="body-sm text-muted-foreground">
            © 2026 Aayush Dhiman. Designed and built with precision.
          </p>
        </div>
      </footer>
    </div>
  );
}
