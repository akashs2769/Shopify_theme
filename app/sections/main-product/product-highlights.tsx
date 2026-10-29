import {
  createSchema,
  type HydrogenComponentProps,
  type InspectorGroup,
} from "@weaverse/hydrogen";
import { cn } from "~/utils/cn";

type ProductHighlightsLayout = "list" | "grid";

interface ProductHighlightsProps extends HydrogenComponentProps {
  layout: ProductHighlightsLayout;
}

export default function ProductHighlights(props: ProductHighlightsProps) {
  let { layout, children, ...rest } = props;

  return (
    <div {...rest}>
      <div
        className={cn(
          "gap-3",
          layout === "grid" ? "grid grid-cols-2" : "flex flex-col",
        )}
      >
        {children}
      </div>
    </div>
  );
}

let layoutGroup: InspectorGroup = {
  group: "Layout",
  inputs: [
    {
      type: "toggle-group",
      name: "layout",
      label: "Layout",
      configs: {
        options: [
          { value: "list", label: "List" },
          { value: "grid", label: "Grid" },
        ],
      },
      defaultValue: "list",
    },
  ],
};

export let schema = createSchema({
  type: "mp--highlights",
  title: "Product highlights",
  settings: [layoutGroup],
  childTypes: ["mp--highlight-item"],
  enabledOn: {
    pages: ["PRODUCT"],
  },
  presets: {
    children: [
      {
        type: "mp--highlight-item",
        icon: "package",
        text: "COD Available Across India",
      },
      {
        type: "mp--highlight-item",
        icon: "shield-check",
        text: "Easy Returns",
      },
      {
        type: "mp--highlight-item",
        icon: "clock",
        text: "Quality Assured",
      },
      {
        type: "mp--highlight-item",
        icon: "leaf",
        text: "Trusted Shopping",
      },
    ],
  },
});
