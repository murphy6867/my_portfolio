import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Globe, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-teal-600 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-white rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-800">SN</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hello! I&#39;m Sonsawan, a passionate Backend Engineer based in
                Bangkok, Thailand. I specialize in building scalable
                microservice architectures using Go, Java, and cloud
                technologies.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Currently working at ONIFY TECH, I&#39;ve gained hands-on
                experience in developing e-commerce backends, booking platforms,
                and re-architecting monolithic systems into containerized
                microservices on AWS.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                I&#39;m excited about fintech and enterprise environments,
                always eager to learn rapidly and implement innovative solutions
                that enhance software reliability and performance.
              </p>

              <div className="grid grid-cols-1 gap-4 mt-8">
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-semibold">
                        Computer Science Student
                      </div>
                      <div className="text-sm text-gray-600">
                        Expected graduation: Jan 2026
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Globe className="w-6 h-6 text-teal-600" />
                    <div>
                      <div className="font-semibold">Multilingual</div>
                      <div className="text-sm text-gray-600">
                        Thai (Fluent), English (Intermediate), German (Basic)
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Heart className="w-6 h-6 text-red-600" />
                    <div>
                      <div className="font-semibold">Research Interest</div>
                      <div className="text-sm text-gray-600">
                        Explainable-AI with Health Care
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
