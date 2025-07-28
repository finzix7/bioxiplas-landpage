---
enable: true # Steuert die Sichtbarkeit dieses Abschnitts auf allen Seiten, auf denen er verwendet wird
title: Änderungsprotokoll – **Was ist neu**

list:
  - title: Priorität für Projekte
    version: 0.12.5
    date: 02. Feb. 2024
    content: |
      Immer kostenlos, mit einem halb-individuellen Stil. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
    video:
      src: /videos/test-video.mp4
      type: mp3
      provider: html5
      poster: /images/video-thumbnail.jpg
      autoplay: true
      id: test-changelog-video
    types:
      - icon: /images/icons/svg/feature.svg
        label: Neue Funktion
      - icon: /images/icons/svg/improvement.svg
        label: Verbesserung
      - icon: /images/icons/svg/check-rounded.svg
        label: Fehlerbehebung
      - icon: /images/icons/svg/security.svg
        label: Sicherheit
      - icon: /images/icons/svg/deprecated.svg
        label: Veraltet
      - icon: /images/icons/svg/timeframe.svg
        label: Kritische Änderung
    changes:
      - active: true
        title: Fehlerbehebungen
        list:
          - label: Zyklen
            color: emerald
            content: |
              Die automatische Nummerierung von Zyklen, die mit einer Zahl enden, funktioniert jetzt in mehr Fällen
          - label: Archivierung
            color: indigo
            content: |
              Hierarchische Beziehungen zwischen Issues bleiben beim Wiederherstellen von Projekten aus dem Archiv erhalten
          - label: Board
            color: slate
            content: |
              Fehler mit nicht korrekt abgeschnittenen Spaltenüberschriften im Board wurden behoben
          - label: Slack
            color: crimson
            content: |
              Erwähnungen von Issue-IDs in Slack werden jetzt nur erweitert, wenn der Autor des Beitrags ein Benutzer im Linear-Arbeitsbereich ist
          - label: Vorlagen
            color: amber
            content: |
              Der Link zur Erstellung von Projektvorlagen funktioniert jetzt wieder, nachdem der Fahrplan entfernt wurde
      - active: false
        title: Verbesserung
        list:
          - label: Zyklen
            color: emerald
            content: |
              Die automatische Nummerierung von Zyklen, die mit einer Zahl enden, funktioniert jetzt in mehr Fällen
          - label: Archivierung
            color: indigo
            content: |
              Hierarchische Beziehungen zwischen Issues bleiben beim Wiederherstellen von Projekten aus dem Archiv erhalten
          - label: Board
            color: slate
            content: |
              Fehler mit nicht korrekt abgeschnittenen Spaltenüberschriften im Board wurden behoben
          - label: Slack
            color: crimson
            content: |
              Erwähnungen von Issue-IDs in Slack werden jetzt nur erweitert, wenn der Autor des Beitrags ein Benutzer im Linear-Arbeitsbereich ist
          - label: Vorlagen
            color: amber
            content: |
              Der Link zur Erstellung von Projektvorlagen funktioniert jetzt wieder, nachdem der Fahrplan entfernt wurde
---
