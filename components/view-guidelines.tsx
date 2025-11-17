"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function ViewGuidelines() {
  return (
    <div className="w-full mx-auto px-7 mt-12">
      <Accordion type="multiple" className="w-full space-y-6">
        <AccordionItem value="participation">
          <AccordionTrigger className="text-lg md:text-xl font-bold">
            Participation
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-base md:text-lg font-semibold">
                Teams of 2-5 participants are allowed.
              </li>
              <li className="text-base md:text-lg font-semibold">
                Cross institutes team participation is allowed.
              </li>
              <li className="text-base md:text-lg font-semibold">
                All submissions must be original and created during the
                hackathon.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="inclusion">
          <AccordionTrigger className="text-lg md:text-xl font-bold">
            Inclusion & Accessibility
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-base md:text-lg font-semibold">
                Ensure your solution is inclusive, accessible, and culturally
                relevant.
              </li>
              <li className="text-base md:text-lg font-semibold">
                Design with diverse users in mind.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="ethics">
          <AccordionTrigger className="text-lg md:text-xl font-bold">
            Ethics & Privacy
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-base md:text-lg font-semibold">
                Respect privacy, data protection, and ethical AI principles.
              </li>
              <li className="text-base md:text-lg font-semibold">
                Do not use or share sensitive data without consent.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="submission">
          <AccordionTrigger className="text-lg md:text-xl font-bold">
            Submission Requirements
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-base md:text-lg font-semibold">
                Project repository link (GitHub, GitLab, etc.)
              </li>
              <li className="text-base md:text-lg font-semibold">
                Short video demo (max 3 minutes)
              </li>
              <li className="text-base md:text-lg font-semibold">
                Documentation outlining your approach and impact
              </li>
              <li className="text-base md:text-lg font-semibold">
                Provide a clear README and demo for your project.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="conduct">
          <AccordionTrigger className="text-lg md:text-xl font-bold">
            Code of Conduct
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-base md:text-lg font-semibold">
                Follow the code of conduct and maintain respectful
                communication.
              </li>
              <li className="text-base md:text-lg font-semibold">
                Organizers reserve the right to disqualify teams for misconduct.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
