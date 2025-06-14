---
enable: true  # Controls the visibility of this section on all pages where it's used
title: Pricing That **Makes Sense**

plans:
  enable: true
  list:
    - selected: true
      label: Monthly
    - selected: false
      label: Yearly

list:
  # Basic Plan
  - enable: true
    featured: false
    badge:
      enable: false
      label: ""
    name: Basic
    description: Basic plan to get started with ARIA at an affordable price.

    price:
      - type: Monthly
        prepend_value: $
        value: 20000
        append_value: 
      - type: Yearly
        prepend_value: $
        value: 200000
        append_value: 

    features:
      - Basic digital menu with real-time updates
      - Limited storage for images and documents
      - Basic email support

    usages:
      - type: Monthly
        list:
          - label: Connected tables
            value: 3
          - label: Loyal customers
            value: 20
      - type: Yearly
        list:
          - label: Connected tables
            value: 36
          - label: Loyal customers
            value: 240

    cta_btn:
      enable: true
      label: Get Started
      url: /contact/
      rel: 
      target: 

  # Starter Plan
  - enable: true
    featured: false
    badge:
      enable: false
      label: ""
    name: Starter
    description: Ideal for digitizing your menu with ARIA and trying out essential features.

    price:
      - type: Monthly
        prepend_value: $
        value: 45000
        append_value: 
      - type: Yearly
        prepend_value: $
        value: 450000
        append_value: 

    features:
      - Interactive digital menu with real-time updates
      - Featured product boosters to maximize sales
      - Basic custom design (colors and fonts)
      - Unlimited storage for images and documents
      - Trial Loyalty module (up to 50 registered users for 3 months)

    usages:
      - type: Monthly
        list:
          - label: Connected tables
            value: 5
          - label: Loyal customers
            value: 50
      - type: Yearly
        list:
          - label: Connected tables
            value: 60
          - label: Loyal customers
            value: 600

    cta_btn:
      enable: true
      label: Get Started
      url: /contact/
      rel: 
      target: 

  # Advance Plan
  - enable: true
    featured: true
    badge:
      enable: true
      label: Most Popular
    name: Advance
    description: Perfect for businesses looking to enhance customer experience and optimize operations through data analysis and greater visibility.

    price:
      - type: Monthly
        prepend_value: $
        value: 70000
        append_value: 
      - type: Yearly
        prepend_value: $
        value: 700000
        append_value: 

    features:
      - All features from the Starter Plan
      - Multi-language menu
      - Data analytics
      - Unlimited Loyalty

    usages:
      - type: Monthly
        list:
          - label: Connected tables
            value: 20
          - label: Loyal customers
            value: Unlimited
      - type: Yearly
        list:
          - label: Connected tables
            value: 240
          - label: Loyal customers
            value: Unlimited

    cta_btn:
      enable: true
      label: Get Started
      url: /contact/
      rel: 
      target: 

  # Pro Plan
  - enable: true
    featured: false
    badge:
      enable: false
      label: ""
    name: Pro
    description: For medium and large businesses seeking to maximize customer retention and optimize operations with advanced features and automation.

    price:
      - type: Monthly
        prepend_value: $
        value: 100000
        append_value: 
      - type: Yearly
        prepend_value: $
        value: 1000000
        append_value: 

    features:
      - All features from the Advance Plan
      - Upcoming modules included at launch
      - Advanced data analytics
      - Detailed customer insights

    usages:
      - type: Monthly
        list:
          - label: Connected tables
            value: 50
          - label: Loyal customers
            value: Unlimited
      - type: Yearly
        list:
          - label: Connected tables
            value: 600
          - label: Loyal customers
            value: Unlimited

    cta_btn:
      enable: true
      label: Get Started
      url: /contact/
      rel: 
      target: 

  # Loyalty Plan
  - enable: true
    featured: false
    badge:
      enable: false
      label: ""
    name: Loyalty
    description: Includes only the features of the loyalty program.

    price:
      - type: Monthly
        prepend_value: $
        value: 20000
        append_value: 
      - type: Yearly
        prepend_value: $
        value: 200000
        append_value: 

    features:
      - Unlimited Loyalty

    usages:
      - type: Monthly
        list:
          - label: Connected tables
            value: 0
          - label: Loyal customers
            value: Unlimited
      - type: Yearly
        list:
          - label: Connected tables
            value: 0
          - label: Loyal customers
            value: Unlimited

    cta_btn:
      enable: true
      label: Get Started
      url: /contact/
      rel: 
      target: 

  # Exclusive Plan
  - enable: true
    featured: false
    badge:
      enable: false
      label: ""
    name: Exclusive
    description: For fully customized businesses with tailored features and premium support.

    features:
      - All features from the Pro Plan
      - Custom development and integrations
      - Personalized consulting
      - Dedicated support and onboarding priority

    usages:
      - type: Monthly
        list:
          - label: Connected tables
            value: Unlimited
          - label: Loyal customers
            value: Unlimited
      - type: Yearly
        list:
          - label: Connected tables
            value: Unlimited
          - label: Loyal customers
            value: Unlimited

    cta_btn:
      enable: true
      label: Get Started
      url: /contact/
      rel: 
      target: 

# Price Comparison
comparison:
  - label: Features
    list:
      - value: Integrations
        included:
          - true
          - true
          - true
          - true
          - false
          - true
      - value: Shared links
        included:
          - true
          - true
          - true
          - true
          - false
          - true
      - value: Import & export
        included:
          - true
          - true
          - true
          - true
          - false
          - true
      - value: Team members
        included:
          - false
          - false
          - Up to 20 users
          - Up to 50 users
          - 0 users
          - Unlimited

  - label: Reports
    list:
      - value: Advanced analytics
        included:
          - false
          - true
          - true
          - true
          - false
          - true
      - value: Basic reports
        included:
          - false
          - false
          - true
          - true
          - false
          - true
      - value: Professional reports
        included:
          - false
          - false
          - false
          - true
          - false
          - true
      - value: Custom report builder
        included:
          - false
          - false
          - false
          - true
          - false
          - true

  - label: Support
    list:
      - value: 24/7 online support
        included:
          - false
          - true
          - false
          - false
          - false
          - true
      - value: Quarterly product workshops
        included:
          - false
          - false
          - false
          - true
          - false
          - true
      - value: Priority phone support
        included:
          - false
          - false
          - false
          - true
          - false
          - true
      - value: 1:1 onboarding tour
        included:
          - false
          - false
          - false
          - true
          - false
          - true
---