"use client";

import GitHubButton from "react-github-btn";

export const GitHubStar = () => {
  return (
    <GitHubButton
      href="https://github.com/sayandedotcom/refhired.com"
      data-color-scheme="no-preference: light; light: light; dark: dark;"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star sayandedotcom/refhired.com on GitHub">
      Star
    </GitHubButton>
  );
};
