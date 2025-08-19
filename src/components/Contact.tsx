import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "tirapat.saetiao@gmail.com",
      href: "mailto:tirapat.saetiao@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "098-9155073",
      href: "tel:+66989155073"
    },
    
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#1a2236] dark:bg-[#1a2236] transition-colors flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your project and bring your ideas to life
          </p>
        </div>
        <div className="flex items-center justify-center min-h-[500px]">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 flex flex-col justify-center mx-auto w-full max-w-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in hearing about new opportunities and interesting projects. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-smooth">
                    <CardContent className="p-6">
                      <a 
                        href={info.href}
                        className="flex items-center space-x-4 group"
                      >
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                          <info.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-primary transition-smooth">{info.title}</h4>
                          <p className="text-muted-foreground group-hover:text-primary transition-smooth">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;