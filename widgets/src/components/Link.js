import React from "react";

const onClick = (evt) => {
  //opens the link on new tab when click with ctrl or meta key
  if (evt.metaKey || evt.ctrlKey) {
    return;
  }
  evt.preventDefault();
  //updates to the correct URL
  window.history.pushState({}, "", evt.target.href);
  // communicates to route components that the URL has just changed
  const navEvent = new PopStateEvent("popstate");
  window.dispatchEvent(navEvent);
};

const Link = ({ href, className, children }) => {
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
