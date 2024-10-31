import DefaultLayout from "@/layouts/default";
import Hero from "@/pages/home/hero";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Hero />
      </section>
    </DefaultLayout>
  );
}
