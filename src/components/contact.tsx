"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Let&#39;s Connect
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Ready for new opportunities
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I&#39;m always interested in exciting backend engineering
                opportunities, especially in fintech and enterprise
                environments. Whether you want to discuss a project,
                collaboration, or just say hi, feel free to reach out!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>sonsawan.n.th@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>(+66) 62-608-1634</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span>Bangkok, Thailand</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/sonsawann/"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/murphy6867"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-300">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        required
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-300">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            lastName: e.target.value,
                          })
                        }
                        required
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-gray-300">
                      Company (Optional)
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company: e.target.value,
                        })
                      }
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
