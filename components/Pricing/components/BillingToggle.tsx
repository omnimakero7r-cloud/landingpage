import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface BillingToggleProps {
  isMonthly: boolean;
  onToggle: (checked: boolean) => void;
  switchRef: React.RefObject<HTMLButtonElement | null>; // Aceitar null
}

export const BillingToggle = ({ isMonthly, onToggle, switchRef }: BillingToggleProps) => (
  <div className="flex justify-center mb-10">
    <span className="mr-2 font-normal">
      Mensal
    </span>
    <label className="relative inline-flex items-center cursor-pointer">
      <Label aria-label="Switch">
        <Switch
          ref={switchRef as any}
          checked={!isMonthly}
          onCheckedChange={onToggle}
          className="relative"
        />
      </Label>
    </label>
    <span className="ml-2 font-bold md:text-lg text-dark dark:text-white">
      Anual <span className=" text-lime-600 dark:text-lime-300">(Economia de 20%)</span>
    </span>
  </div>
);
