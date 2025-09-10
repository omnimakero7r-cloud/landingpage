interface PricingHeaderProps {
    title: string;
    description: string;
  }
  
  export const PricingHeader = ({ title, description }: PricingHeaderProps) => (
    <div className="text-center space-y-4 mb-12">
      <div className="flex justify-center">
        <div className="border py-1 px-4 rounded-full text-sm font-bold text-black bg-lime-300 border-primary/10">
          Preços
        </div>
      </div>
      <h2 className="text-2xl text-black dark:text-white font-bold tracking-tight md:text-3xl lg:text-4xl xl:text-5xl">
        {title}
      </h2>
      <p className="text-muted-foreground text-lg whitespace-pre-line">
        {description}
      </p>
    </div>
  );