import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Automobile & Truck Shipping",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: "/images/svgs/truck.svg",
  },
  {
    name: "Air Freight",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: "/images/svgs/plane.svg",
  },
  {
    name: "Shipping",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: "/images/svgs/ship.svg",
  },
  {
    name: "Railroad Transportation",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: "/images/svgs/train.svg",
  },
];

export default function ServicesSection() {
  return (
    <section className="container mx-auto">
      <div className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-600">
              OUR SERVICES
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to deliver your goods
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative rounded border-gray-400 py-6 transition-shadow hover:shadow-lg sm:px-20"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="bg absolute left-[-60px] top-[25px] flex h-12 w-12 items-center justify-center rounded-lg bg-orange-300 p-2 sm:left-2 sm:top-4">
                      <Image
                        src={feature.icon}
                        width={120}
                        height={120}
                        alt="truck"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mb-2 mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                  <Link
                    href={"/"}
                    className="underline-offset-6 mr-2 font-medium text-orange-600 underline-offset-8 transition-all hover:space-x-2 hover:text-orange-400"
                  >
                    <span> More information</span>{" "}
                    <span className="transition-all">&#8594;</span>
                  </Link>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
