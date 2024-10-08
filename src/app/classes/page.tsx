import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

interface classItem {
  class: string;
  instructor: string;
  time: string;
}

const classes: classItem[] = [
  {
    class: "Spin & Burn",
    instructor: "Jason Lee",
    time: "6:00 AM - 7:00 AM",
  },
  {
    class: "Pilates Core",
    instructor: "Anna Green",
    time: "7:00 AM - 8:00 AM",
  },
  {
    class: "Yoga for Beginners",
    instructor: "Sarah Jones",
    time: "9:00 AM - 10:00 AM",
  },
  {
    class: "Body Pump",
    instructor: "Mark Reynolds",
    time: "10:00 AM - 11:00 AM",
  },
  {
    class: "Boxing Basics",
    instructor: "David Kim",
    time: "11:00 AM - 12:00 PM",
  },
  {
    class: "Zumba Dance Party",
    instructor: "Lina Rodriguez",
    time: "5:30 PM - 6:30 PM",
  },
  {
    class: "HIIT Power Hour",
    instructor: "Mike Carter",
    time: "6:00 PM - 7:00 PM",
  },
];

export default function Classes() {
  return (
    <div className="max-w-screen-xl mx-auto p-6 py-12">
      <h1
        id="membership"
        className="text-center scroll-m-28 text-4xl font-extrabold tracking-tight lg:text-5xl "
      >
        Our
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-rose-800">
          &nbsp;Classes.
        </span>
      </h1>
      <p className="md:px-6 text-center mx-auto text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
        We host the following classes in our gyms, every day. Pick your favorite
        and let&apos;s go!
      </p>

      {/* <hr className="my-6 max-w-screen-lg mx-auto" /> */}

      <div className="mt-6 sm:mt-12 max-w-screen-lg mx-auto">
        <Table className="overflow-hidden">
          {/* <TableCaption className="pb-4">Class Timetable</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead>Instructor</TableHead>
              <TableHead>Class</TableHead>
              <TableHead className="text-right w-[100px] sm:w-[200px]">
                Time
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classes.map((item) => (
              <TableRow key={item.class} className="max-sm:text-xs">
                <TableCell>{item.instructor}</TableCell>
                <TableCell className="font-medium">{item.class}</TableCell>
                <TableCell className="text-right">{item.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      </div>

      <hr className="my-6 max-w-screen-lg mx-auto" />

      <div className="relative min-h-[300px] max-w-screen-lg mx-auto rounded-lg border">
        <Image
          src={"/classimg.jpg"}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          priority
          alt="hero image"
          className="object-cover rounded-lg"
        />
        <div className="absolute z-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
          <h2 className="text-6xl sm:text-8xl text-center scroll-m-20 font-extrabold drop-shadow-2xl tracking-tight">
            Let&apos;s get &nbsp;
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-rose-800">
              started.
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
