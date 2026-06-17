import Card from "./Card";

/**
 * Compact card naming a competing product in the oligopoly market.
 */
export default function CompetitorCard({
  name,
  index,
}: {
  name: string;
  index: number;
}) {
  return (
    <Card className="flex items-center gap-4 p-5">
      <span className="font-mono text-lg font-semibold text-redDeep">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="text-sm font-medium leading-snug">{name}</span>
    </Card>
  );
}
