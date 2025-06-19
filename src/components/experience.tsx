import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Software Developer",
      company: "ONIFY TECH",
      period: "Dec 2023 – Apr 2025",
      type: "Full-time",
      achievements: [
        "Built a multilingual e-commerce backend integrated with Odoo ERP, enabling real-time inventory tracking and streamlined order processing for 100+ items",
        "Developed backend APIs for a two-sided booking platform using Supabase (PostgreSQL), enabling real-time bookings, notifications, and availability tracking",
        "Re-architected a monolithic budgeting system into containerized microservices on AWS ECS, adding RBAC and audit logging, improving scalability and system modularity",
      ],
      technologies: [
        "Go",
        "Java",
        "PostgreSQL",
        "AWS ECS",
        "Supabase",
        "Microservices",
      ],
    },
    {
      title: "APAC Solutions Architecture Virtual Experience",
      company: "AWS",
      period: "May 2025",
      type: "Program",
      achievements: [
        "Designed scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth and slow response times",
        "Described proposed architecture in plain language ensuring client understood functionality and cost calculations",
      ],
      technologies: ["AWS", "Elastic Beanstalk", "Architecture Design"],
    },
    {
      title: "Alumni & MERN Stack Mentor",
      company: "Generation Thailand",
      period: "Dec 2023 - Feb 2024",
      type: "Volunteer",
      achievements: [
        "Provided mentorship and guidance to learners on the MERN Stack (MongoDB, Express.js, React.js, Node.js)",
        "Shared technical insights, answered questions, and offered practical assistance for complex concepts",
        "Empowered learners to develop MERN Stack skills through ongoing support and encouragement",
      ],
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Mentoring",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Work Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-gray-600 mt-1">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                        <Badge variant="outline" className="ml-2 text-blue-600">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs text-amber-500"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
