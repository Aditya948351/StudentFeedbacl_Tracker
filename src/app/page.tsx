import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function page() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex justify-center flex-1">
        <div className="items-center flex flex-col sm:flex-row gap-20 justify-end mx-auto p-10 w-full sm:py-20 sm:w-[1000px]">
          <div>
            <Image src="/images/owl-landing.png" width={400} height={400} alt="math-Logo" />
          </div>
          <div className="text-center flex gap-6 flex-col">
            <h1 className="text-3xl font-bold text-orange-500 font-sans">
              Student FeedBack Tracker And Helper
            </h1>
            {/* Button Below Header */}
            <Button className="mx-auto bg-orange-500 text-white">
              Open Menu
            </Button>

            <h3 className="text-sm">Upload Pdf generate and Practice Tests.</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
