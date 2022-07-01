import React from "react";

const NewsAndEventsContent = ({ newsAndEvents }) => {
  const content = newsAndEvents.map(el => {
    const { id } = el;
    const { html } = el.childMarkdownRemark;
    const event = el.childMarkdownRemark.frontmatter;
    const date = new Date(event.start_date).toDateString();
    return (
      <div className="my-16" key={id}>
        <div className="flex justify-between my-2">
          <span className="event-name text-sm font-extrabold">
            {event.event_name}
          </span>
          <span className="event-date text-sm">{date}</span>
        </div>
        <p dangerouslySetInnerHTML={{__html: html}}></p>
        <hr />
      </div>
    );
  });
  return content;
};

export default NewsAndEventsContent;
