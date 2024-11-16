import DefaultLayout from "@/layouts/default";
import Hero from "@/pages/home/hero";
import H5Hero from "@/pages/home/hero-h5";
import useWidthMonitor from "@/layouts/web-monitor";
import React from "react";

export default function IndexPage() {
  const isWeb = useWidthMonitor();

  return (
    <DefaultLayout>
      {!isWeb ? (
        <section className="flex flex-col items-center justify-center gap-4 py-8">
          {/* h5 */}
          <H5Hero />
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          {/* pc*/}
          <Hero />
        </section>
      )}
    </DefaultLayout>
  );
}
