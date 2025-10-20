import React from "react";
import EventMetaHeader from "./event-meta-header";
import EventSectionContent from "./event-section-content";
import EventSectionReward from "./event-section-reward";
import EventSectionNote from "./event-section-note";

interface EventRendererProps {
  eventData: any;
}

export const EventRenderer: React.FC<EventRendererProps> = ({ eventData }) => {
  console.log("Rendering Event with data:", eventData);
  const meta = eventData.meta;
  const sections = eventData.sections || {};

  return (
    <article className="rounded-2xl p-8 shadow-lg bg-white relative overflow-hidden">
      {/* Banner động gradient nếu có */}
      {meta?.animation && (
        <div
          className={`absolute inset-0 opacity-10 pointer-events-none ${meta.animation}`}
          style={{
            backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
          }}
        ></div>
      )}

      {/* Meta Header */}
      <EventMetaHeader meta={meta} />

      {/* Nội dung sections */}
      <div className="prose prose-lg max-w-none relative z-10">
        {sections.content && <EventSectionContent data={sections.content} />}
        {sections.reward && <EventSectionReward data={sections.reward} />}
        {sections.note && <EventSectionNote data={sections.note} />}
      </div>
    </article>
  );
};

export default EventRenderer;
