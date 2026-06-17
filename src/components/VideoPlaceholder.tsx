import Card from "./Card";
import type { VideoItem } from "../data/surveyData";

/**
 * Video card. If `embedUrl` is set in surveyData, renders a YouTube iframe;
 * otherwise shows a large empty 16:9 placeholder box. Either way the title and
 * description are shown.
 */
export default function VideoPlaceholder({ video }: { video: VideoItem }) {
  const hasEmbed = video.embedUrl.trim().length > 0;

  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative aspect-video w-full bg-mist">
        {hasEmbed ? (
          <iframe
            src={video.embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
            <span
              aria-hidden="true"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface text-redDeep"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="font-display text-lg font-semibold text-ink">
              {video.title.split("—")[0].trim()} will be added later
            </span>
            <span className="font-mono text-caption text-muted">
              Embed YouTube link or upload video file later
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-h3 font-semibold">{video.title}</h3>
        <p className="text-sm leading-relaxed text-muted">
          {video.description}
        </p>
      </div>
    </Card>
  );
}
