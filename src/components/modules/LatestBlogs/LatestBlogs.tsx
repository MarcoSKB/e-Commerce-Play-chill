import Link from "next/link";
import Skeleton from "react-loading-skeleton";

import { Section } from "@/src/components/modules";

const LatestBlogs = () => {
  return (
    <Section title="The latest in the blog">
      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-col gap-5">
          <Skeleton width={407} height={266} />
          <div className="flex flex-col gap-[10px]">
            <Skeleton height={26} />
            <Skeleton height={18} count={2} />
          </div>
          <Skeleton width={150} height={18} />
        </div>
        <div className="flex flex-col gap-5">
          <Skeleton width={407} height={266} />
          <div className="flex flex-col gap-[10px]">
            <Skeleton height={26} />
            <Skeleton height={18} count={2} />
          </div>
          <Skeleton width={150} height={18} />
        </div>
        <div className="flex flex-col gap-5">
          <Skeleton width={407} height={266} />
          <div className="flex flex-col gap-[10px]">
            <Skeleton height={26} />
            <Skeleton height={18} count={2} />
          </div>
          <Skeleton width={150} height={18} />
        </div>
      </div>
      <Link
        href="/blogs"
        className="flex justify-center w-full py-6 text-lg mt-10 text-blue font-semibold rounded-2xl border-solid border-[2px] border-white border-opacity-10 transition-colors hover:text-white"
      >
        All publications
      </Link>
    </Section>
  );
};

export default LatestBlogs;
