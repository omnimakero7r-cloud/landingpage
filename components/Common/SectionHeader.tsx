import { MotionDiv } from "@/components/ui/MotionComponents";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <MotionDiv
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto text-center"
      >
        <div className="mb-4 inline-block rounded-full bg-lime-300 px-4 py-1 dark:border dark:border-strokedark">
          <span className="text-sectiontitle font-bold text-black">
            {title}
          </span>
        </div>
        <h2 className="mx-auto mb-4 text-2xl font-bold text-black dark:text-white md:w-4/5 xl:w-2/3 md:text-3xl lg:text-4xl xl:text-5xl">
          {subtitle}
        </h2>
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">{description}</p>
      </MotionDiv>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;
