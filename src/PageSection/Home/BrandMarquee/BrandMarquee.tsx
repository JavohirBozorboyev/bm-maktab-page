import { cn } from "@/lib/util/utils";
import Marquee from "../../../Components/magicui/Marquee";
import BmLogo from "@/assets/BmLogo";
import { IconPoint } from "@tabler/icons-react";

const ReviewCard = () => {
  return (
    <figure className={cn("relative cursor-pointer overflow-hidden ")}>
      <div className="flex flex-row items-center gap-2">
        <div className="flex gap-2 items-center">
          <BmLogo class="w-8 h-8" />
          <p className=" flex items-center gap-1 text-slate-700 capitalize">
            <IconPoint />
            {`Boborahim Mashrab Maktabi  `}
            <IconPoint />
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function BrandMarquee({ type }: { type?: boolean }) {
  return (
    <div className="bg-slate-200/50 py-2 relative flex w-full flex-col items-center justify-center overflow-hidden  bg-background ">
      <Marquee reverse={type} className="[--duration:20s]">
        {Array.from([1, 2, 3]).map((_, i) => (
          <ReviewCard key={i} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
}
