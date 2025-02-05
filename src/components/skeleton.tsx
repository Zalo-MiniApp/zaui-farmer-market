import Tabs from "./tabs";
import Section from "./section";
import HorizontalDivider from "./horizontal-divider";
import Carousel from "./carousel";
import { ChevronDown } from "./vectors";
import { Button } from "zmp-ui";

export function PageSkeleton() {
  return (
    <div className="min-h-full bg-background">
      <div className="bg-section pt-2">
        <div className="px-4">
          <div className="w-full h-12 rounded-lg bg-skeleton animate-pulse" />
        </div>
        <Carousel
          slides={[1, 2, 3].map(() => (
            <div className="w-full aspect-[2/1] rounded-[18px] bg-skeleton animate-pulse" />
          ))}
          disabled
        />
      </div>
      <div className="bg-section space-y-2 mt-2">
        <Tabs
          items={[1, 2, 3, 4]}
          value={undefined}
          onChange={() => {}}
          renderLabel={(key) => (
            <div
              key={key}
              className="h-6 w-10 rounded-lg bg-skeleton animate-pulse"
            />
          )}
        />

        <Section
          title={
            <div className="h-[18px] w-36 rounded-lg bg-skeleton animate-pulse" />
          }
        >
          <div className="pt-2.5 pb-4 flex space-x-6 overflow-x-auto px-4">
            {[1, 2, 3, 4].map((key) => (
              <div
                key={key}
                className="flex flex-col items-center space-y-2 flex-none basis-[70px] overflow-hidden cursor-pointer"
              >
                <div className="w-[70px] h-[70px] object-cover rounded-full border-[0.5px] border-black/15 bg-skeleton animate-pulse" />
                <div className="w-full h-9">
                  <div className="w-full h-[18px] rounded-lg bg-skeleton animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
      <HorizontalDivider />
      <Section
        title={
          <div className="h-[18px] w-20 rounded-lg bg-skeleton animate-pulse" />
        }
      >
        <div className="grid grid-cols-2 px-4 py-2 gap-4">
          {[1, 2, 3, 4].map((key) => (
            <ProductItemSkeleton key={key} />
          ))}
        </div>
      </Section>
    </div>
  );
}

export function ProductItemSkeleton() {
  return (
    <div className="flex flex-col cursor-progress group bg-section rounded-xl p-2 shadow-[0_10px_24px_#0D0D0D17]">
      <div className="w-full aspect-square bg-skeleton animate-pulse rounded-lg" />
      <div className="pt-2 pb-3">
        <div className="text-xs pt-1 pb-0.5 bg-skeleton animate-pulse rounded-lg inline-block text-transparent">
          Lorem ipsum dolor sit
        </div>
        <div className="mt-0.5 text-sm font-bold bg-skeleton animate-pulse rounded-lg inline-block text-transparent">
          Lorem ipsum dolor sit
        </div>
        <div className="text-3xs space-x-0.5 bg-skeleton animate-pulse rounded-lg inline-block text-transparent">
          Lorem ipsum dolor sit
        </div>
      </div>
      <Button variant="secondary" size="small"></Button>
    </div>
  );
}

export function SelectSkeleton(props: { width: number }) {
  return (
    <div
      className="h-8 rounded-full bg-skeleton animate-pulse px-3 flex items-center justify-end"
      style={{ width: props.width }}
    >
      <ChevronDown />
    </div>
  );
}
