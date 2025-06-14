---
enable: true # Controla la visibilidad de esta sección en todas las páginas donde se utilice
title: "Contáctanos para Más **Información**"
description: "Ya sea que necesites asistencia experta, nuestro equipo está preparado para apoyarte en cada paso del camino."
subtitle: "Contacto"

contact_list:
  enable: true
  list:
    - icon: "/images/icons/svg/phone.svg"
      label: "Llámanos ahora"
      value: "+569 37287950 / +569 53096945"
    - icon: "/images/icons/svg/email.svg"
      label: "Envíanos un correo"
      value: "contacto@arialabs.cl"
    - icon: "/images/icons/svg/whatsapp.svg"
      label: "Chatea con nosotros"
      value: "@example"

social:
  enable: true
  title: "Síguenos en redes sociales"
  # list: (opcional, comentar/descomentar si se requiere sobrescribir)

form:
  email_subject: "Nuevo envío de formulario desde el sitio web de Upstart"
  submit_button:
    label: "Enviar"
  # note: |
  #   Tus datos están seguros con nosotros. Respetamos tu privacidad y nunca compartimos tu información. <br /> Lee nuestra [Política de Privacidad](/privacy-policy/).
  inputs:
    - label: ""
      placeholder: "Nombre completo"
      name: "Nombre completo"
      required: true
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Correo electrónico"
      name: "Correo electrónico"
      required: true
      type: "email"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Número de teléfono"
      name: "Número de teléfono"
      required: true
      type: "text"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Empresa"
      name: "Empresa"
      required: true
      type: "text"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Asunto"
      name: "Asunto"
      required: true
      half_width: true
      dropdown:
        type: ""
        search:
          placeholder: ""
        items:
          - label: "Ejemplo 01"
            value: "Ejemplo 01"
          - label: "Ejemplo 02"
            value: "Ejemplo 02"
          - label: "Ejemplo 03"
            value: "Ejemplo 03"
    - label: ""
      placeholder: "Asunto con búsqueda"
      name: "Asunto con búsqueda"
      required: true
      half_width: true
      dropdown:
        type: "search"
        search:
          placeholder: "Asunto con búsqueda"
        items:
          - label: "Lowni Saiki"
            value: "Lowni Saiki"
          - label: "Sikow Pow"
            value: "Sikow Pow"
          - label: "Kenbi Shaktun"
            value: "Kenbi Shaktun"
          - label: "Aruyyo Kawn"
            value: "Aruyyo Kawn"
          - label: "Marong Lowbbi"
            value: "Marong Lowbbi"
    - label: ""
      tag: "textarea"
      default_value: ""
      rows: "4"
      placeholder: "Escribe tu mensaje aquí."
      name: "Mensaje"
      required: true
      half_width: false
    - label: "Búsqueda en Google"
      checked: false
      name: "Origen del usuario"
      required: true
      group_label: "¿Cómo nos encontraste?"
      group: "source"
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Redes sociales"
      name: "Origen del usuario"
      required: true
      group_label: ""
      group: "source"
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Recomendación"
      name: "Origen del usuario"
      required: true
      group_label: ""
      group: "source"
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Otro"
      name: "Origen del usuario"
      required: true
      group_label: ""
      group: "source"
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Acepto los términos y condiciones y la [política de privacidad](/contact/)."
      name: "Política Aceptada"
      value: "Aceptado"
      checked: false
      required: true
      type: "checkbox"
      half_width: false
      default_value: ""
    - note: success
      parent_class: "hidden message success"
      content: ¡Hemos recibido tu mensaje! Te responderemos lo antes posible.
    - note: warning
      parent_class: "hidden message error"
      content: ¡Algo salió mal! Por favor, envía un correo a [upstart-astro-theme@gmail.com](mailto:upstart-astro-theme@gmail.com) para enviar un ticket.
---
