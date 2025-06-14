---
enable: true # Controls the visibility of this section on all pages where it is used
title: Changelog - **What's New**

list:
  - title: Priority for projects
    version: 0.12.5
    date: Feb 02, 2024
    content: |
      Always free, sit with a semi-adapted style. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit.
    video:
      src: /videos/test-video.mp4
      type: mp3
      provider: html5
      poster: /images/video-thumbnail.jpg
      autoplay: true
      id: test-changelog-video
    types:
      - icon: /images/icons/svg/feature.svg
        label: New Feature
      - icon: /images/icons/svg/improvement.svg
        label: Improvement
      - icon: /images/icons/svg/check-rounded.svg
        label: Fix
      - icon: /images/icons/svg/security.svg
        label: Security
      - icon: /images/icons/svg/deprecated.svg
        label: Deprecated
      - icon: /images/icons/svg/timeframe.svg
        label: Critical Change
    changes:
      - active: true
        title: Fixes
        list:
          - label: Cycles
            color: emerald
            content: |
              Automatic numbering of cycles ending in a number now works in more cases
          - label: Archiving
            color: indigo
            content: |
              Hierarchical relationships between issues are preserved when restoring projects from the archive
          - label: Board
            color: slate
            content: |
              Fixed issues with board column headers not truncating properly
          - label: Slack
            color: crimson
            content: |
              Now mentions of issue IDs in Slack are only expanded if the message author is a user in the Linear workspace
          - label: Templates
            color: amber
            content: |
              Fixed the link to create project templates, which was not working after removing the roadmap
      - active: false
        title: Improvement
        list:
          - label: Cycles
            color: emerald
            content: |
              Automatic numbering of cycles ending in a number now works in more cases
          - label: Archiving
            color: indigo
            content: |
              Hierarchical relationships between issues are preserved when restoring projects from the archive
          - label: Board
            color: slate
            content: |
              Fixed issues with board column headers not truncating properly
          - label: Slack
            color: crimson
            content: |
              Now mentions of issue IDs in Slack are only expanded if the message author is a user in the Linear workspace
          - label: Templates
            color: amber
            content: |
              Fixed the link to create project templates, which was not working after removing the roadmap
---
