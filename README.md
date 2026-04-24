# Zwaj Islamy | زواج إسلامي 💍

> Arabic-first Islamic matchmaking platform for profile discovery, advanced filtering, and guided bride/groom form submission.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![RTL Arabic](https://img.shields.io/badge/Language-Arabic%20RTL-0f766e)

## ✨ Why This Project

Zwaj Islamy is built to make marriage profile browsing and submission easy, respectful, and accessible.
It is based on the initiative of Sheikh Abdel Kareem Mahmoud and focuses on practical, Islamic-first user journeys.

## 🚀 Highlights

- 🧭 Full RTL Arabic experience using Cairo font.
- 🔎 Advanced filtering and search for men and women profiles.
- ↕️ Sort by form code, age, and height.
- 🧾 Detailed profile pages with conditional contact reveal.
- 🧩 Multi-step form flows for both groom and bride submissions.
- 🎙️ Built-in voice recording support in submission steps.
- 🖼️ Downloadable confirmation image after successful submission.
- ▶️ Embedded educational/course videos.
- 📱 App Store and Google Play quick links.

## 🧱 Tech Stack

### Frontend

- React 18
- React Router DOM 6
- Vite 5

### UI and Styling

- Tailwind CSS 3
- Headless UI
- Heroicons
- @fontsource/cairo

### Media and Utilities

- Swiper
- react-media-recorder
- get-blob-duration
- react-hot-toast
- html2canvas

### Tooling

- ESLint 9 (React + Hooks)
- PostCSS + Autoprefixer
- Vercel SPA rewrites

## 📂 Project Structure

```text
src/
  components/    # shared UI, cards, filters, media, form step components
  pages/         # route-level pages
  lib/           # local static datasets (men/women forms)
  assets/        # images
  svgs/          # svg icons
```

## 🗺️ Routes

| Route                      | Description           |
| -------------------------- | --------------------- |
| `/`                        | Home                  |
| `/forms`                   | Forms entry page      |
| `/forms/men`               | Men profiles list     |
| `/forms/women`             | Women profiles list   |
| `/forms/men/:formNumber`   | Men profile details   |
| `/forms/women/:formNumber` | Women profile details |
| `/forms/men/new-form`      | New groom form        |
| `/forms/women/new-form`    | New bride form        |
| `/courses`                 | Courses page          |
| `/contact`                 | Contact page          |

## 📊 Current Data State

- menFormData: 20 local entries
- womenFormData: 20 local entries
- Data source type: static local files (no backend yet)

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install and Run

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## 🧭 Deployment

This project is ready for Vercel SPA deployment.

- `vercel.json` rewrites all routes to `index.html` so deep-link routing works correctly.

## ⚠️ Current Limitations

- Submission and profile data are not persisted to a backend.
- Contact form is currently UI-only.
- Pagination UI exists but is not wired to real page state.

## 🛣️ Suggested Next Steps

- Add backend API + persistent database.
- Add authentication and moderation dashboard.
- Move filtering/sorting to server-side for scalability.
- Add unit and integration tests for filters and form steps.
