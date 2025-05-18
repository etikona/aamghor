import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const OwnerDetailsSection = () => {
  const owners = [
    {
      name: "Md Ferdous Salam",
      location: "Jashore, Khulna",
      university: "Gopalganj Science & Technology University",
      degree: "BBA in Management Studies",
      initials: "FS",
    },
    {
      name: "Maria Sultana",
      location: "Satkhira, Khulna",
      university: "Gopalganj Science & Technology University",
      degree: "BBA in Management Studies",
      initials: "MS",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold tracking-tight text-center text-orange-700 mb-10">
        Meet the Owners
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {owners.map((owner, index) => (
          <Card
            key={index}
            className="rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-orange-100 bg-orange-50/50 backdrop-blur"
          >
            <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
              {/* <Avatar className="h-20 w-20 border-4 border-orange-300">
                <AvatarFallback>{owner.initials}</AvatarFallback>
              </Avatar> */}
              <div>
                <h3 className="text-xl font-semibold text-orange-900">
                  {owner.name}
                </h3>
                <p className="text-sm text-orange-600 font-medium">
                  {owner.degree}
                </p>
                <p className="text-sm text-orange-500">{owner.university}</p>
                <p className="text-xs text-orange-400 mt-1 italic">
                  {owner.location}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
