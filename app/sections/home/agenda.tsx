import Container from "@/components/container";
import { RemixImage } from "@/components/remix-image";
import SectionHeading from "@/components/section-heading";

const events = [
  {
    title: "Opening Keynote",
    venue: "Main stage",
    time: "9am - 10am",
  },
  {
    title: "Breakout Sessions",
    venue: "Rooms 301 - 330",
    time: "10 am - 12 pm",
  },
  {
    title: "Lunch",
    venue: "Main hall",
    time: "1 pm - 2 pm",
  },
  {
    title: "Meet and Connect",
    venue: "Main hall",
    time: "3 pm - 5 pm",
  },
];

export default function Agenda() {
  return (
    <section className="flex flex-col gap-10 py-32">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          subTitlte="ProgramMe Overview"
          title="Our Agenda"
          description="Here is how the day will unfold. Explore and join the sessions that matter to you. Learn from experts and business professionals"
        />

        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-1 flex flex-col gap-5">
            <CurrentEvent />
            {events.map((event) => (
              <Event
                key={event.title}
                title={event.title}
                venue={event.venue}
                time={event.time}
              />
            ))}
          </div>
          <div className="col-span-2">
            <div className="h-full w-full overflow-hidden">
              <RemixImage
                src={"/smiling.jpg"}
                layout="fullWidth"
                className="overflow-clip-margin h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CurrentEvent() {
  return (
    <div>
      <span className="bg-primary/20 inline-block rounded-sm px-2 py-1 text-xs font-semibold text-green-800">
        7:00 am - 8:00 am
      </span>

      <div className="border-primary/30 mt-3 rounded-xl border p-4">
        <h4 className="text-xl font-bold text-gray-900">
          Event Opening and Guest Arrivals
        </h4>
      </div>

      <p className="text-default-500 mt-2 text-xs">
        Getting ready to kick off the event with guests arriving on the venue
      </p>
    </div>
  );
}

function Event({
  title,
  venue,
  time,
}: {
  title: string;
  venue: string;
  time: string;
}) {
  return (
    <div className="border-primary-100 rounded-xl border bg-green-50/50 px-5 py-4">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-bold text-gray-900">{title}</h4>
        <span className="text-sm font-semibold text-green-800">{time}</span>
      </div>
      <p className="mt-1 text-sm text-gray-500">{venue}</p>
    </div>
  );
}
