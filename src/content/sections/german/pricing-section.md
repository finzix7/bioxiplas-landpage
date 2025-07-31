---
enable: true # Controla la visibilidad de esta sección en todas las páginas donde se utilice
title: Precios Que **Tienen Sentido**

plans:
  enable: true
  list:
    - selected: true
      label: Mensual
    - selected: false
      label: Anual

list:
  # Plan Basic
  - enable: true
    featured: false
    badge:
      enable: false
      label: ""
    name: Basic
    description: Plan básico para empezar con ARIA a un precio accesible.

    price:
      - type: Mensual
        prepend_value: $
        value: 20000
        append_value:
      - type: Anual
        prepend_value: $
        value: 200000
        append_value:

    features:
      - Menú digital básico con actualizaciones en tiempo real
      - Almacenamiento limitado para imágenes y documentos
      - Soporte por correo electrónico básico

    usages:
      - type: Mensual
        list:
          - label: Mesas conectadas
            value: 3
          - label: Clientes fidelizados
            value: 20
      - type: Anual
        list:
          - label: Mesas conectadas
            value: 36
          - label: Clientes fidelizados
            value: 240

    cta_btn:
      enable: true
      label: Comenzar
      url: /contact/
      rel:
      target:

  # Plan Starter
  - enable: true
    featured: false
    badge:
      enable: false
      label: ""
    name: Starter
    description: Ideal para digitalizar tu menú con ARIA y probar las funciones esenciales.

    price:
      - type: Mensual
        prepend_value: $
        value: 45000
        append_value:
      - type: Anual
        prepend_value: $
        value: 450000
        append_value:

    features:
      - Menú digital interactivo con actualizaciones en tiempo real
      - Boosters de productos destacados para maximizar ventas
      - Diseño personalizado básico (colores y tipografía)
      - Almacenamiento ilimitado para imágenes y documentos
      - Módulo de Loyalty de prueba (hasta 50 usuarios registrados por 3 meses)

    usages:
      - type: Mensual
        list:
          - label: Mesas conectadas
            value: 5
          - label: Clientes fidelizados
            value: 50
      - type: Anual
        list:
          - label: Mesas conectadas
            value: 60
          - label: Clientes fidelizados
            value: 600

    cta_btn:
      enable: true
      label: Comenzar
      url: /contact/
      rel:
      target:

  # Plan Medio
  - enable: true
    featured: true
    badge:
      enable: true
      label: Más Popular
    name: Advance
    description: Perfecto para negocios que buscan mejorar la experiencia del cliente y optimizar operaciones con análisis de datos y mayor visibilidad.

    price:
      - type: Mensual
        prepend_value: $
        value: 70000
        append_value:
      - type: Anual
        prepend_value: $
        value: 700000
        append_value:

    features:
      - Todas las funcionalidades del Plan Starter
      - Carta multi-idioma
      - Análisis de datos
      - Loyalty ilimitado

    usages:
      - type: Mensual
        list:
          - label: Mesas conectadas
            value: 20
          - label: Clientes fidelizados
            value: Ilimitado
      - type: Anual
        list:
          - label: Mesas conectadas
            value: 240
          - label: Clientes fidelizados
            value: Ilimitado

    cta_btn:
      enable: true
      label: Comenzar
      url: /contact/
      rel:
      target:

  # Plan Pro
  - enable: true
    featured: false
    badge:
      enable: false
      label: ""
    name: Pro
    description: Para negocios medianos y grandes que desean maximizar la retención de clientes y optimizar sus operaciones con funcionalidades avanzadas y automatización.

    price:
      - type: Mensual
        prepend_value: $
        value: 100000
        append_value:
      - type: Anual
        prepend_value: $
        value: 1000000
        append_value:

    features:
      - Todas las funcionalidades del Plan Advance
      - Módulos en preparación gratis en su lanzamiento
      - Análisis de datos avanzados
      - Insights detallados del cliente

    usages:
      - type: Mensual
        list:
          - label: Mesas conectadas
            value: 50
          - label: Clientes fidelizados
            value: Ilimitado
      - type: Anual
        list:
          - label: Mesas conectadas
            value: 600
          - label: Clientes fidelizados
            value: Ilimitado

    cta_btn:
      enable: true
      label: Comenzar
      url: /contact/
      rel:
      target:

  # Plan Loyalty
  - enable: true
    featured: false
    badge:
      enable: false
      label: ""
    name: Loyalty
    description: Incluye únicamente las funcionalidades del programa de fidelización.

    price:
      - type: Mensual
        prepend_value: $
        value: 20000
        append_value:
      - type: Anual
        prepend_value: $
        value: 200000
        append_value:

    features:
      - Loyalty ilimitado

    usages:
      - type: Mensual
        list:
          - label: Mesas conectadas
            value: 0
          - label: Clientes fidelizados
            value: Ilimitado
      - type: Anual
        list:
          - label: Mesas conectadas
            value: 0
          - label: Clientes fidelizados
            value: Ilimitado

    cta_btn:
      enable: true
      label: Comenzar
      url: /contact/
      rel:
      target:

  # Plan Exclusive
  - enable: true
    featured: false
    badge:
      enable: false
      label: ""
    name: Exclusive
    description: Para negocios full personalizados con funcionalidades a medida y soporte premium.

    # Pricing personalizado: no se especifica valor fijo. Contactar para cotización.
    features:
      - Todas las funcionalidades del Plan Pro
      - Desarrollo e integración a medida
      - Consultoría personalizada
      - Soporte dedicado y prioridad en incorporación

    usages:
      - type: Mensual
        list:
          - label: Mesas conectadas
            value: Ilimitado
          - label: Clientes fidelizados
            value: Ilimitado
      - type: Anual
        list:
          - label: Mesas conectadas
            value: Ilimitado
          - label: Clientes fidelizados
            value: Ilimitado

    cta_btn:
      enable: true
      label: Comenzar
      url: /contact/
      rel:
      target:

# Comparativa de Precios
comparison:
  - label: Funcionalidades
    list:
      - value: Integraciones
        included:
          - true # Basic
          - true # Starter
          - true # Advance
          - true # Pro
          - false # Loyalty
          - true # Exclusive
      - value: Enlaces compartidos
        included:
          - true
          - true
          - true
          - true
          - false
          - true
      - value: Importación y exportación
        included:
          - true
          - true
          - true
          - true
          - false
          - true
      - value: Miembros del equipo
        included:
          - false # Basic
          - false # Starter
          - Hasta 20 usuarios # Advance
          - Hasta 50 usuarios # Pro
          - 0 usuarios # Loyalty
          - Ilimitados # Exclusive

  - label: Reportes
    list:
      - value: Analíticas avanzadas
        included:
          - false # Basic
          - true # Starter
          - true # Advance
          - true # Pro
          - false # Loyalty
          - true # Exclusive
      - value: Reportes básicos
        included:
          - false # Basic
          - false # Starter
          - true # Advance
          - true # Pro
          - false # Loyalty
          - true # Exclusive
      - value: Reportes profesionales
        included:
          - false # Basic
          - false # Starter
          - false # Advance
          - true # Pro
          - false # Loyalty
          - true # Exclusive
      - value: Generador de reportes personalizados
        included:
          - false
          - false
          - false
          - true
          - false
          - true

  - label: Soporte
    list:
      - value: Soporte en línea 24/7
        included:
          - false # Basic
          - true # Starter
          - false # Advance
          - false # Pro
          - false # Loyalty
          - true # Exclusive
      - value: Talleres trimestrales del producto
        included:
          - false
          - false
          - false
          - true
          - false
          - true
      - value: Soporte telefónico prioritario
        included:
          - false
          - false
          - false
          - true
          - false
          - true
      - value: Tour de incorporación 1:1
        included:
          - false
          - false
          - false
          - true
          - false
          - true
---
