"use client";
import GitHubButton from "react-github-btn";

export const GitHubFork = () => {
  return (
    <GitHubButton
      href='https://github.com/sayande2002/referrer/fork'
      data-color-scheme='no-preference: light; light: light; dark: dark;'
      data-icon='octicon-repo-forked'
      data-size='large'
      data-show-count='true'
      aria-label='Fork sayande2002/referrer on GitHub'>
      Fork
    </GitHubButton>
  );
};
