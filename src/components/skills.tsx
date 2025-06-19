import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Go", "Python", "JavaScript", "TypeScript", "C"],
      icon: "💻",
    },
    {
      title: "Backend & Frameworks",
      skills: [
        "Spring Boot",
        "Spring",
        "Hibernate & JPA",
        "GIN",
        "GORM",
        "RESTful APIs",
        "gRPC",
        "JUnit",
      ],
      icon: "⚙️",
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS",
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "Microservices",
        "Linux",
      ],
      icon: "☁️",
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Database Design", "Query Optimization"],
      icon: "🗄️",
    },
    {
      title: "Frontend & Tools",
      skills: ["React.js", "Git", "Shell", "SDLC", "Agile"],
      icon: "🛠️",
    },
    {
      title: "Architecture & Concepts",
      skills: [
        "Microservices Architecture",
        "OOP",
        "Data Structures",
        "Algorithms",
        "System Design",
      ],
      icon: "🏗️",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">{category.icon}</span>
                    <p className="text-gray-400">{category.title}</p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm text-gray-900"
                      >
                        {skill}
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
