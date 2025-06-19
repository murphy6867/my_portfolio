import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, FileText, Trello } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "TaytThreads",
      subtitle: "Secondhand Fashion E-Commerce Platform",
      description:
        "Microservices architecture platform for sustainable fashion with Spring Boot & Go backend, ReactJS frontend, and comprehensive AWS cloud stack including Amplify, Cognito, RDS, and S3.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Spring Boot", "Go", "React.js", "PostgreSQL", "AWS", "Microservices"],
      status: "Ongoing",
      features: [
        "Secure user authentication and item listing",
        "Independent scaling and faster development",
        "CI/CD pipelines via GitHub Actions",
        "Agile development tracked in Jira",
      ],
      links: {
        website: "#",
        github: "#",
        jira: "#",
        notion: "#",
      },
    },
    {
      title: "EirCare",
      subtitle: "Patient Management System",
      description:
        "Java Spring Boot microservices architecture for scalable patient record handling, secure authentication, and medical data processing, streamlining healthcare management workflows.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Java", "Spring Boot", "Microservices", "Healthcare"],
      status: "Completed",
      features: [
        "Scalable patient record handling",
        "Secure authentication system",
        "Medical data processing",
        "Healthcare workflow optimization",
      ],
      links: {
        github: "#",
      },
    },
    {
      title: "Chirps",
      subtitle: "Backend Chat Board",
      description:
        "Backend chat board built using pure Go standard library, optimizing real-time message handling, concurrency, and low latency for seamless user communication.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Go", "Real-time", "Concurrency", "Low Latency"],
      status: "Completed",
      features: [
        "Pure Go implementation",
        "Real-time message handling",
        "Optimized concurrency",
        "Low latency communication",
      ],
      links: {
        github: "#",
        api: "#",
      },
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Professional Projects</h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>{project.status}</Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-gray-900">{project.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">
                        {project.subtitle}
                      </CardDescription>
                      <p className="text-gray-700 mt-2">{project.description}</p>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-gray-900">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.links.github && (
                          <Button size="sm" variant="outline">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </Button>
                        )}
                        {project.links.website && (
                          <Button size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        {project.links.api && (
                          <Button size="sm" variant="outline">
                            <FileText className="w-4 h-4 mr-2" />
                            API Docs
                          </Button>
                        )}
                        {project.links.jira && (
                          <Button size="sm" variant="outline">
                            <Trello className="w-4 h-4 mr-2" />
                            Jira Board
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
