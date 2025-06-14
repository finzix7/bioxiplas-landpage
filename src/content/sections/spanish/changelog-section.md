---
enable: true # Controla la visibilidad de esta sección en todas las páginas donde se utilice
title: Registro de cambios - **Novedades**

list:
  - title: Prioridad para proyectos
    version: 0.12.5
    date: 02 Feb, 2024
    content: |
      Siempre libre, sentarse con un estilo semiadaptado. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
    video:
      src: /videos/test-video.mp4
      type: mp3
      provider: html5
      poster: /images/video-thumbnail.jpg
      autoplay: true
      id: test-changelog-video
    types:
      - icon: /images/icons/svg/feature.svg
        label: Nueva Funcionalidad
      - icon: /images/icons/svg/improvement.svg
        label: Mejora
      - icon: /images/icons/svg/check-rounded.svg
        label: Corrección
      - icon: /images/icons/svg/security.svg
        label: Seguridad
      - icon: /images/icons/svg/deprecated.svg
        label: Obsoleto
      - icon: /images/icons/svg/timeframe.svg
        label: Cambio Crítico
    changes:
      - active: true
        title: Correcciones
        list:
          - label: Ciclos
            color: emerald
            content: |
              La numeración automática de ciclos que terminan en número ahora funciona en más casos
          - label: Archivado
            color: indigo
            content: |
              Las relaciones de jerarquía entre issues se conservan al restaurar proyectos del archivo
          - label: Tablero
            color: slate
            content: |
              Se corrigieron errores con encabezados de columnas del tablero que no se truncaban correctamente
          - label: Slack
            color: crimson
            content: |
              Ahora solo se expanden menciones de identificadores de issues en Slack si el autor del mensaje es usuario en el espacio de trabajo de Linear
          - label: Plantillas
            color: amber
            content: |
              Corregido el enlace para crear plantillas de proyectos, que no funcionaba tras retirar el roadmap
      - active: false
        title: Mejora
        list:
          # (Igual al bloque anterior, puedes mantener o eliminar si es redundante)
          - label: Ciclos
            color: emerald
            content: |
              La numeración automática de ciclos que terminan en número ahora funciona en más casos
          - label: Archivado
            color: indigo
            content: |
              Las relaciones de jerarquía entre issues se conservan al restaurar proyectos del archivo
          - label: Tablero
            color: slate
            content: |
              Se corrigieron errores con encabezados de columnas del tablero que no se truncaban correctamente
          - label: Slack
            color: crimson
            content: |
              Ahora solo se expanden menciones de identificadores de issues en Slack si el autor del mensaje es usuario en el espacio de trabajo de Linear
          - label: Plantillas
            color: amber
            content: |
              Corregido el enlace para crear plantillas de proyectos, que no funcionaba tras retirar el roadmap

# Puedes continuar con la misma lógica para las otras entradas ("A new home..." y "Passkeys...") si deseas que también traduzca esas.
---
