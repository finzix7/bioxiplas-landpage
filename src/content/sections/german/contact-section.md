---
enable: true # Steuert die Sichtbarkeit dieses Abschnitts auf allen Seiten, auf denen er verwendet wird
title: "Kontaktieren Sie uns für weitere **Informationen**"
description: "Ganz gleich, ob Sie fachkundige Unterstützung benötigen – unser Team ist bereit, Sie bei jedem Schritt zu unterstützen."
subtitle: "Kontakt"

contact_list:
  enable: true
  list:
    - icon: "/images/icons/svg/phone.svg"
      label: "Rufen Sie uns jetzt an"
      value: "+569 37287950 / +569 53096945"
    - icon: "/images/icons/svg/email.svg"
      label: "Senden Sie uns eine E-Mail"
      value: "contacto@arialabs.cl"
    - icon: "/images/icons/svg/whatsapp.svg"
      label: "Chatten Sie mit uns"
      value: "@example"

social:
  enable: true
  title: "Folgen Sie uns in den sozialen Medien"
  # list: (optional, kommentieren/entkommentieren, wenn Überschreibung erforderlich ist)

form:
  email_subject: "Neues Formular vom Upstart-Webseite eingereicht"
  submit_button:
    label: "Senden"
  # note: |
  #   Ihre Daten sind bei uns sicher. Wir respektieren Ihre Privatsphäre und geben Ihre Informationen niemals weiter. <br /> Lesen Sie unsere [Datenschutzerklärung](/privacy-policy/).
  inputs:
    - label: ""
      placeholder: "Vollständiger Name"
      name: "Vollständiger Name"
      required: true
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "E-Mail"
      name: "E-Mail"
      required: true
      type: "email"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Telefonnummer"
      name: "Telefonnummer"
      required: true
      type: "text"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Unternehmen"
      name: "Unternehmen"
      required: true
      type: "text"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Betreff"
      name: "Betreff"
      required: true
      half_width: true
      dropdown:
        type: ""
        search:
          placeholder: ""
        items:
          - label: "Beispiel 01"
            value: "Beispiel 01"
          - label: "Beispiel 02"
            value: "Beispiel 02"
          - label: "Beispiel 03"
            value: "Beispiel 03"
    - label: ""
      placeholder: "Suchbarer Betreff"
      name: "Suchbarer Betreff"
      required: true
      half_width: true
      dropdown:
        type: "search"
        search:
          placeholder: "Suchbarer Betreff"
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
      placeholder: "Schreiben Sie hier Ihre Nachricht."
      name: "Nachricht"
      required: true
      half_width: false
    - label: "Google-Suche"
      checked: false
      name: "Nutzerquelle"
      required: true
      group_label: "Wie haben Sie uns gefunden?"
      group: "source"
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Soziale Medien"
      name: "Nutzerquelle"
      required: true
      group_label: ""
      group: "source"
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Empfehlung"
      name: "Nutzerquelle"
      required: true
      group_label: ""
      group: "source"
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Sonstiges"
      name: "Nutzerquelle"
      required: true
      group_label: ""
      group: "source"
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Ich akzeptiere die Allgemeinen Geschäftsbedingungen und die [Datenschutzerklärung](/contact/)."
      name: "Datenschutz akzeptiert"
      value: "Akzeptiert"
      checked: false
      required: true
      type: "checkbox"
      half_width: false
      default_value: ""
    - note: success
      parent_class: "hidden message success"
      content: Wir haben Ihre Nachricht erhalten! Wir werden uns so schnell wie möglich bei Ihnen melden.
    - note: warning
      parent_class: "hidden message error"
      content: Etwas ist schiefgelaufen! Bitte senden Sie eine E-Mail an [upstart-astro-theme@gmail.com](mailto:upstart-astro-theme@gmail.com), um ein Ticket zu erstellen.
---
