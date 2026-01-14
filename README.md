# React Native Pokémon Code Challenge

## Overview

This challenge is designed to evaluate your ability to work with an existing React Native codebase, extend functionality, and implement UI based on provided designs. The initial project setup is intentionally simple and incomplete.

You are expected to focus on **code quality**, **clarity of thought**, and **practical decision‑making** rather than over‑engineering.

---

## Project Setup

### Prerequisites

* Node.js (LTS recommended)
* Yarn or npm
* React Native development environment set up for iOS and/or Android

### Getting Started

1. Clone the repository
2. Install dependencies

   ```bash
   yarn install
   # or
   npm install
   ```
3. Run the app

   ```bash
   yarn start
   yarn ios | yarn android
   # or
   npm run start
   npm run ios | npm run android
   ```

The app currently:

* Fetches a list of Pokémon from the PokéAPI
* Displays a basic Pokémon list
* Navigates to a basic Pokémon detail screen

---

## Your Tasks

### 1. Add Pagination to the Pokémon List

**Goal:** Improve performance and UX by loading Pokémon incrementally.

Requirements:

* Implement pagination using the PokéAPI  - [https://pokeapi.co/](https://pokeapi.co/)
* Load more Pokémon as the user scrolls (infinite scroll)
* Handle loading and error states gracefully

---

### 2. Style the Pokémon Detail Screen

**Goal:** Match the provided Figma designs as closely as is practical.

Requirements:

* Apply layout, spacing, typography, and colors sensibly, doesn't have to match 100%.
* Ensure the screen works on different device sizes
* Maintain readable and maintainable styles

Notes:

* Pixel‑perfect accuracy is not required, but visual intent should be clear
* Use sensible abstractions for styles where appropriate

---

### 3. Add Favoriting Functionality

**Goal:** Allow users to favorite Pokémon and view them separately.

Requirements:

* Users can mark/unmark a Pokémon as a favorite
* Favorites persist during the app session (bonus: persistence across restarts)
* Add a dedicated Favorites screen
* Favorited Pokémon should be clearly indicated in the UI

Considerations:

* State management choice is up to you
* Handle edge cases (e.g. un/favoriting from different screens)

---

### 4. Stretch Goal - Add Filtering by Type Functionality

**Goal:** Allow users to filter the Pokémon list by their type

Requirements:

* Users can access a filter from the Pokémon list screen, all types are available from the PokeAPI
* When a type filter is selected fetch the relevant Pokemon from the response e.g. [https://pokeapi.co/api/v2/type/2](https://pokeapi.co/api/v2/type/2)
* Display the filtered list, pagination no longer required as the type endpoint behaves differently than the more general [https://pokeapi.co/api/v2/pokemon](https://pokeapi.co/api/v2/pokemon) endpoint
* User should be able to clear or change the filter and see results reflected

---

## Designs

### List View
<img width="665" height="595" alt="Screenshot 2026-01-14 at 10 01 27" src="https://github.com/user-attachments/assets/927da643-a019-4912-be01-3cb2de31b88a" />

### Detail View
<img width="665" height="595" alt="Screenshot 2026-01-14 at 10 01 40" src="https://github.com/user-attachments/assets/e52fd213-1cfc-4689-a807-ffdd80860742" />

### Favorites View
<img width="664" height="548" alt="Screenshot 2026-01-14 at 10 01 53" src="https://github.com/user-attachments/assets/99c35c00-0c2a-41c8-ae05-1afdac7841c0" />




---

## Technical Expectations

* Use modern React patterns (hooks, functional components)
* Keep components focused and reusable
* Write clear, self‑explanatory code
* Reasonable error handling is expected

You do **not** need to:

* Add tests (unless you want to)
* Over‑optimize or introduce heavy libraries
* Perfectly match every pixel of the design

---

## Evaluation Criteria

You will be evaluated on:

* Correctness and completeness of features
* Code structure and readability
* Practical decision‑making
* Ability to work within an existing codebase
* UI implementation quality

---

## Submission

Please provide:

* A link to your completed repository
* Any brief notes or trade‑offs you feel are worth calling out

