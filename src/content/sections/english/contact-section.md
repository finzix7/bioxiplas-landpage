---
enable: true # Controls the visibility of this section across all pages where it's used
title: "Contact Us for More **Information**"
description: "Whether you need expert assistance, our team is ready to support you every step of the way."
subtitle: "Contact"

contact_list:
  enable: true
  list:
    - icon: "/images/icons/svg/phone.svg"
      label: "Call us now"
      value: "+569 37287950 / +569 53096945"
    - icon: "/images/icons/svg/email.svg"
      label: "Send us an email"
      value: "contacto@arialabs.cl"
    - icon: "/images/icons/svg/whatsapp.svg"
      label: "Chat with us"
      value: "@example"

social:
  enable: true
  title: "Follow us on social media"
  # list: (optional, comment/uncomment if override is needed)

form:
  email_subject: "New form submission from the Upstart website"
  submit_button:
    label: "Send"
  # note: |
  #   Your data is safe with us. We respect your privacy and never share your information. <br /> Read our [Privacy Policy](/privacy-policy/).
  inputs:
    - label: ""
      placeholder: "Full name"
      name: "Full name"
      required: true
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Email"
      name: "Email"
      required: true
      type: "email"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Phone number"
      name: "Phone number"
      required: true
      type: "text"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Company"
      name: "Company"
      required: true
      type: "text"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Subject"
      name: "Subject"
      required: true
      half_width: true
      dropdown:
        type: ""
        search:
          placeholder: ""
        items:
          - label: "Example 01"
            value: "Example 01"
          - label: "Example 02"
            value: "Example 02"
          - label: "Example 03"
            value: "Example 03"
    - label: ""
      placeholder: "Searchable subject"
      name: "Searchable subject"
      required: true
      half_width: true
      dropdown:
        type: "search"
        search:
          placeholder: "Searchable subject"
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
      placeholder: "Write your message here."
      name: "Message"
      required: true
      half_width: false
    - label: "Google Search"
      checked: false
      name: "User Origin"
      required: true
      group_label: "How did you find us?"
      group: "source"
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Social media"
      name: "User Origin"
      required: true
      group_label: ""
      group: "source"
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Recommendation"
      name: "User Origin"
      required: true
      group_label: ""
      group: "source"
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Other"
      name: "User Origin"
      required: true
      group_label: ""
      group: "source"
      type: "radio"
      half_width: true
      default_value: ""
    - label: "I accept the terms and conditions and the [privacy policy](/contact/)."
      name: "Policy Accepted"
      value: "Accepted"
      checked: false
      required: true
      type: "checkbox"
      half_width: false
      default_value: ""
    - note: success
      parent_class: "hidden message success"
      content: We have received your message! We’ll get back to you as soon as possible.
    - note: warning
      parent_class: "hidden message error"
      content: Something went wrong! Please email [upstart-astro-theme@gmail.com](mailto:upstart-astro-theme@gmail.com) to submit a ticket.
---
