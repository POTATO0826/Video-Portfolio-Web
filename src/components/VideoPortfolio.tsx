import Section from "./Section";
import VideoPlaceholder from "./VideoPlaceholder";
import { videos } from "../data/surveyData";

export default function VideoPortfolio() {
  return (
    <Section
      id="videos"
      index="06"
      kicker="Presentation"
      title="Video Portfolio"
    >
      <p className="mb-10 max-w-3xl text-base leading-relaxed text-ink/80">
        Each video reads its embed URL from a single config value in{" "}
        <code className="font-mono text-sm text-redDeep">surveyData.ts</code>.
        Paste a YouTube embed link there and the placeholder box is replaced by a
        live player automatically.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {videos.map((video) => (
          <VideoPlaceholder key={video.id} video={video} />
        ))}
      </div>
    </Section>
  );
}
