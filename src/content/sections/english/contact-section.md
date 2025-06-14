---
enable: true # Controls the visibility of this section on all pages where it is used
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

form:
  email_subject: "New form submission from Upstart website"
  submit_button:
    label: "Send"
  inputs:
    - label: ""
      placeholder: "Full Name"
      name: "Full Name"
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
      placeholder: "Phone Number"
      name: "Phone Number"
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
      placeholder: "Subject with search"
      name: "Subject with search"
      required: true
      half_width: true
      dropdown:
        type: "search"
        search:
          placeholder: "Subject with search"
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
    - label: "Google search"
      checked: false
      name: "User Origin"
      required: true
      group_label: "How did you find us?"
      group: "source"
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Social Media"
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
      content: We have received your message! We will respond as soon as possible.
    - note: warning
      parent_class: "hidden message error"
      content: Something went wrong! Please send an email to [upstart-astro-theme@gmail.com](mailto:upstart-astro-theme@gmail.com) to submit a ticket.
---
