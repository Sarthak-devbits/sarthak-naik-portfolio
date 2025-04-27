import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-semibold text-xl text-primary">SN</div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="#contact">Contact</a>
            </Button>
            <Button size="sm" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-12 space-y-24">
        {/* Hero Section */}
        <section
          id="about"
          className="flex flex-col md:flex-row items-center gap-8 py-12"
        >
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Sarthak Naik
              </h1>
              <p className="text-xl text-muted-foreground">Software Engineer</p>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Detail-oriented and entrepreneurial software engineer with a
              proven track record of delivering impactful solutions that enhance
              scalability, security, and user experience.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <a href="#contact">Get in touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/in/sarthak-naik-927342203"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Sarthak-devbits"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:sarthak.devbits@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/10 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-6xl font-bold text-primary/80">SN</span>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            <Badge variant="outline" className="text-sm">
              {new Date().getFullYear() - 2022}+ Years
            </Badge>
          </div>
          <Tabs defaultValue="ciklum" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2">
              <TabsTrigger value="ciklum">Ciklum</TabsTrigger>
              <TabsTrigger value="anklytix">AnklyticX</TabsTrigger>
            </TabsList>
            <TabsContent value="ciklum" className="space-y-4 mt-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Software Engineer I</h3>
                  <p className="text-muted-foreground">Ciklum</p>
                </div>
                <Badge>August 2023 - Present</Badge>
              </div>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  Led development of dynamic, role-based admin dashboards used
                  by large-scale public institutions, implementing server-side
                  rendering, real-time data streams, and secure encrypted
                  client-server communication using custom cryptography.
                </li>
                <li>
                  Engineered scalable frontend components for multi-role
                  analytics platforms with advanced filtering, reporting, and
                  data visualization, significantly enhancing product usability
                  and business insights.
                </li>
                <li>
                  Built and optimized CMS capabilities for enterprise content
                  platforms, integrating PostgreSQL, Prisma, AWS Lambda, SQS,
                  React, and CI/CD pipelines to streamline content workflows and
                  improve deployment velocity.
                </li>
                <li>
                  Conducted code reviews and participated in pair programming
                  sessions to maintain high code quality and share knowledge.
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="anklytix" className="space-y-4 mt-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">
                    Backend Engineer Intern
                  </h3>
                  <p className="text-muted-foreground">AnklyticX</p>
                </div>
                <Badge>August 2022 - March 2023</Badge>
              </div>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  Designed and implemented scalable backend architecture for a
                  state-wide car rental platform, enabling real-time booking,
                  dynamic pricing, and secure authentication, contributing to a
                  25% rise in customer acquisition.
                </li>
                <li>
                  Delivered backend infrastructure for a healthcare appointment
                  system supporting role-based access, encrypted data handling,
                  and real-time scheduling—cutting admin overhead by 60% and
                  improving user engagement by 25%.
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">
                        Ohaalo – AI-Powered Project Collaboration Platform
                      </h3>
                      <Badge>Jan 2025</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">LangChain</Badge>
                      <Badge variant="secondary">RAG</Badge>
                      <Badge variant="secondary">OpenAI</Badge>
                      <Badge variant="secondary">WebSockets</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                    </div>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>
                        Built a Trello-style project management tool with
                        real-time collaboration powered by WebSockets and a
                        responsive drag-and-drop interface.
                      </li>
                      <li>
                        Integrated LangChain and RAG to generate intelligent
                        task breakdowns, auto-prioritize backlog items, and
                        provide project summaries.
                      </li>
                      <li>
                        Designed clean, scalable backend services with Node.js
                        and OpenAI; implemented OAuth for secure, third-party
                        authentication.
                      </li>
                      <li>
                        Delivered a polished UI using React and shadcn/ui, with
                        support for tagging, due dates, task assignment, and
                        comment threads.
                      </li>
                    </ul>
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1"
                        asChild
                      >
                        <a href="#" className="inline-flex items-center">
                          View Project <ArrowUpRight className="h-4 w-4 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="w-full md:w-72 h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-semibold text-primary/70">
                      Ohaalo
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">C++</Badge>
                  <Badge variant="outline">SQL</Badge>
                  <Badge variant="outline">HTML/CSS</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Web Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React.js</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Express.js</Badge>
                  <Badge variant="outline">GraphQL</Badge>
                  <Badge variant="outline">Redux</Badge>
                  <Badge variant="outline">React Query</Badge>
                  <Badge variant="outline">Hono</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Database & Messaging
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">Redis</Badge>
                  <Badge variant="outline">Kafka</Badge>
                  <Badge variant="outline">RabbitMQ</Badge>
                  <Badge variant="outline">WebSockets</Badge>
                  <Badge variant="outline">Webhooks</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Tools & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Git</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Kubernetes</Badge>
                  <Badge variant="outline">Jenkins</Badge>
                  <Badge variant="outline">GitHub Actions</Badge>
                  <Badge variant="outline">Jira</Badge>
                  <Badge variant="outline">Prometheus</Badge>
                  <Badge variant="outline">Grafana</Badge>
                  <Badge variant="outline">Terraform</Badge>
                  <Badge variant="outline">Nginx</Badge>
                  <Badge variant="outline">Cloudflare</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">AWS EC2</Badge>
                  <Badge variant="outline">AWS S3</Badge>
                  <Badge variant="outline">AWS Lambda</Badge>
                  <Badge variant="outline">AWS API Gateway</Badge>
                  <Badge variant="outline">AWS SQS</Badge>
                  <Badge variant="outline">AWS SNS</Badge>
                  <Badge variant="outline">Firebase</Badge>
                  <Badge variant="outline">Cloudflare Workers</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  AI & Other Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">LangChain</Badge>
                  <Badge variant="outline">RAG</Badge>
                  <Badge variant="outline">OpenAPI (Swagger)</Badge>
                  <Badge variant="outline">gRPC</Badge>
                  <Badge variant="outline">OWASP Top 10</Badge>
                  <Badge variant="outline">Jest</Badge>
                  <Badge variant="outline">Mocha</Badge>
                  <Badge variant="outline">Vitest</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">
                    Bachelors of Engineering, Information Technology
                  </h3>
                  <p className="text-muted-foreground">
                    Goa College of Engineering, Goa
                  </p>
                </div>
                <div className="text-right">
                  <Badge>Aug 2019 - June 2023</Badge>
                  <p className="text-sm text-muted-foreground mt-1">
                    CGPA: 8.77
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recognition Section */}
        <section id="recognition" className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Recognition & Awards
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">Star Award</h3>
                  <p className="text-muted-foreground">Ciklum</p>
                </div>
                <Badge variant="outline">Outstanding Performance</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Get in Touch</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out for opportunities or just to say hello!
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:sarthak.devbits@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      sarthak.devbits@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://linkedin.com/in/sarthak-naik-927342203"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/sarthak-naik-927342203
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/Sarthak-devbits"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      github.com/Sarthak-devbits
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Contact Form</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sarthak Naik. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/sarthak-naik-927342203"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Sarthak-devbits"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="mailto:sarthak.devbits@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
