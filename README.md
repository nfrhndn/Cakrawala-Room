# 🏛️ Cakrawala Room

Sistem reservasi ruangan kampus yang modern dan efisien, dibangun dengan React dan TypeScript.

## ✨ Fitur

- **Beranda** — Landing page dengan informasi ruangan kampus
- **Daftar Ruangan** — Jelajahi semua ruangan yang tersedia dengan filter & pencarian
- **Booking** — Form reservasi ruangan yang intuitif
- **Dashboard** — Monitoring status reservasi dan statistik

## 🛠️ Tech Stack

| Teknologi                                    | Deskripsi                   |
| -------------------------------------------- | --------------------------- |
| [React 18](https://react.dev)                | UI Library                  |
| [TypeScript](https://typescriptlang.org)     | Type-safe JavaScript        |
| [Vite](https://vitejs.dev)                   | Build tool & dev server     |
| [Tailwind CSS](https://tailwindcss.com)      | Utility-first CSS framework |
| [shadcn/ui](https://ui.shadcn.com)           | Komponen UI berbasis Radix  |
| [React Router](https://reactrouter.com)      | Client-side routing         |
| [TanStack Query](https://tanstack.com/query) | Server state management     |
| [Lucide Icons](https://lucide.dev)           | Icon library                |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18+)
- npm

### Installation

```bash
# Clone repository
git clone <repository-url>
cd cakrawala-room

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

### Scripts

| Script            | Deskripsi                |
| ----------------- | ------------------------ |
| `npm run dev`     | Jalankan dev server      |
| `npm run build`   | Build untuk production   |
| `npm run preview` | Preview production build |
| `npm run lint`    | Jalankan ESLint          |
| `npm run test`    | Jalankan unit tests      |

## 📁 Struktur Project

```
src/
├── assets/          # Gambar dan static assets
├── components/      # Reusable components
│   ├── ui/          # shadcn/ui base components
│   ├── Navbar.tsx   # Navigation bar
│   ├── Footer.tsx   # Footer
│   ├── NavLink.tsx  # Navigation link component
│   └── RoomCard.tsx # Card komponen ruangan
├── data/            # Static data & constants
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Route page components
│   ├── Index.tsx    # Halaman beranda
│   ├── Rooms.tsx    # Halaman daftar ruangan
│   ├── Booking.tsx  # Halaman reservasi
│   ├── Dashboard.tsx # Halaman dashboard
│   └── NotFound.tsx # Halaman 404
├── test/            # Test setup & test files
├── App.tsx          # Root component & routing
├── main.tsx         # Entry point
└── index.css        # Global styles & Tailwind config
```

## 📄 License

This project is for educational and portfolio purposes.
