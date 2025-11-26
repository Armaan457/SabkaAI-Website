"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Users, Calendar, Trophy } from "lucide-react";

import { HACKATHON_CONFIG } from "@/lib/config";

export function RegistrationForm() {
  const handleRegistration = () => {
    if (HACKATHON_CONFIG.GOOGLE_FORM_URL) {
      window.open(HACKATHON_CONFIG.GOOGLE_FORM_URL, "_blank");
    } else {
      alert(
        "Registration will open soon! Please check back later for the Devpost link."
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Registration Info */}
        <Card className="border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">
              Ready to Innovate?
            </CardTitle>
            <CardDescription className="text-lg">
              Join India's premier AI hackathon and create solutions that matter
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-blue-500" />
              <span>Teams of 2-5 members</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-blue-500" />
              <span>24+ hour intensive hackathon</span>
            </div>
            <div className="flex items-center gap-3">
              <Trophy className="h-5 w-5 text-blue-500" />
              <span>₹1.75L total prize pool</span>
            </div>

            <Button
              onClick={handleRegistration}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 text-lg py-6"
            >
              Register via Devpost
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Eligibility & Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>Eligibility & Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Who Can Participate?</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Students from any recognized institution from India</li>
                <li>
                  • Students from University of Queensland, Brisbane,Australia
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Evaluation Criteria</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Innovation and creativity</li>
                <li>• Technical implementation</li>
                <li>• Social impact potential</li>
                <li>• Scalability and sustainability</li>
                <li>• Relevance with Problem Statement</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
