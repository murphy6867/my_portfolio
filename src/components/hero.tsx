import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Sonsawan Ngamsom
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">Junior Backend Engineer</p>
          <div className="flex items-center justify-center gap-2 mb-8 text-gray-400">
            <MapPin className="w-5 h-5" />
            <span>Bangkok, Thailand</span>
          </div>
          <p className="text-lg mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Curious and enthusiastic Backend Engineer with hands-on experience in Go, Java, cloud technologies, and
            backend system design. Passionate about exploring new technologies, solving real-world challenges, and
            building scalable microservice architectures.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/murphy6867" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/sonsawann/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:sonsawan.n.th@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
