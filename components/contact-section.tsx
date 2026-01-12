"use client";

import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I change my team after registering on Devpost?",
    answer:
      "No, teams cannot be reformed or changed once your Devpost registration has been submitted. Please ensure your team composition is final before submitting the registration on Devpost.",
  },
  {
    question: "Can one student participate in multiple teams?",
    answer:
      "No, one student cannot participate from two different teams. Each participant can only be part of one team for the entire hackathon.",
  },
  {
    question: "How many submissions can one team make?",
    answer:
      "There can be only one submission per team. Make sure to submit your final and complete solution before the deadline.",
  },
  {
    question: "What is the team size limit?",
    answer:
      "Teams must consist of 2 to 5 members. You need to form a team with at least one other member and may include up to four additional members. Cross Institute team participation is allowed.",},
  {
    question: "Who can participate in the IndiaAI Impact Hackathon?",
    answer:
      "The hackathon is open to students from recognized institutions, working professionals, entrepreneurs, and innovators. All Indian citizens and residents are welcome to participate.",
  },
  {
    question: "Is there any registration fee?",
    answer:
      "No, participation in the IndiaAI Impact Hackathon is completely free. There are no registration fees or hidden charges.",
  }
];

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-16 md:py-24 bg-secondary/10"
    >
      <div className="container mx-auto px-4">
        <h2
          id="contact-title"
          className="text-3xl md:text-4xl font-semibold text-pretty mb-8 text-center"
        >
          Contact & FAQ
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            
            <Card className="p-6 border-blue-200 bg-blue-50">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-blue-800">Email</div>
                  <div className="text-sm text-blue-700">
                    coe_dsai@thapar.edu
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-blue-200 bg-blue-50">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-blue-800">SPOC Contact</div>
                  <div className="text-sm text-blue-700">
                    +91 97807-08482
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-blue-200 bg-blue-50">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-blue-800">Location</div>
                  <div className="text-sm text-blue-700">
                    Thapar Institute of Engineering and Technology, Patiala
                  </div>
                  <div className="text-xs text-blue-600 mt-1">
                    Onsite Event (Offline Mode)
                  </div>
                </div>
              </div>
            </Card>

            {/* Important Team Rules */}
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">
                ⚠️ Important Team Rules
              </h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>No team changes:</strong> Teams cannot be reformed or changed once your Devpost registration is submitted</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>One team per student:</strong> Each participant can only be part of one team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>One submission per team:</strong> Each team can make only one final submission</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - FAQ */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-blue-200 rounded-lg px-6 bg-white shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:text-blue-600 py-6">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
