import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const VisionGoalsSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto p-6">
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-center text-yellow-700">
            Vision & Goals
          </h2>

          <Separator />

          <p className="text-base leading-relaxed text-gray-700">
            Our vision is to become the most trusted name in the Bangladeshi
            mango industry by revolutionizing the way mangos are grown, cared
            for, and delivered.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Ensure every mango is nurtured with care for peak quality and
              taste.
            </li>
            <li>Empower local farmers through seasonal partnerships.</li>
            <li>Promote sustainable and eco-friendly farming practices.</li>
            <li>
              Reach every corner of Bangladesh through a robust digital
              platform.
            </li>
            <li>Deliver exceptional customer satisfaction with each order.</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};
