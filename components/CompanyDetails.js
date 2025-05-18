import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CompanyDetailsSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto p-6 space-y-10">
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-center text-green-700">
            About Our Company
          </h2>

          <Separator />

          <p className="text-base leading-relaxed text-gray-700">
            We specialize in purchasing mango farms during the harvest season.
            Our expert team takes meticulous care of the mango plants to ensure
            healthy growth and high-quality produce. Once the mangos are ripe
            and ready, we handle all aspects of distribution, ensuring that
            fresh, premium-grade mangos reach customers all over Bangladesh.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Our entire business is conducted online, from farm acquisition to
            final delivery. This streamlined digital approach helps us maintain
            transparency, reduce operational costs, and deliver directly to your
            door.
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="outline">Mango Farm Acquisition</Badge>
            <Badge variant="outline">Plant Care</Badge>
            <Badge variant="outline">Online Sales</Badge>
            <Badge variant="outline">Bangladesh Wide Delivery</Badge>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CompanyDetailsSection;
