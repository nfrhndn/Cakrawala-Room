import { Link } from "react-router-dom";
import { Search, CalendarCheck, QrCode, LayoutDashboard, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCampus from "@/assets/hero-campus.jpg";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data/rooms";

const features = [
  {
    icon: Search,
    title: "Ketersediaan Real-Time",
    desc: "Lihat status ruangan kampus secara langsung tanpa perlu keliling mencari.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Online",
    desc: "Pesan ruangan kapan saja tanpa harus datang ke TU atau administrasi.",
  },
  {
    icon: QrCode,
    title: "QR Code Check-In",
    desc: "Validasi pemesanan dengan QR Code unik untuk mencegah penyalahgunaan.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Admin",
    desc: "Pantau seluruh penggunaan ruangan dengan statistik dan riwayat lengkap.",
  },
];

const Index = () => {
  const availableRooms = rooms.filter((r) => r.status === "available").slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCampus} alt="Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container relative z-10 py-24 md:py-36">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-4 py-1.5 text-sm text-primary-foreground">
              <Zap className="h-4 w-4" />
              Cakrawala University
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight">
              Reservasi Ruangan
              <br />
              <span className="opacity-80">Lebih Cepat & Mudah</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-lg">
              CakrawalaRoom memudahkan mahasiswa, dosen, dan organisasi kampus
              memesan ruangan secara real-time tanpa ribet.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/rooms">
                <Button size="lg" variant="secondary" className="font-semibold">
                  Cari Ruangan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/rooms?filter=available">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Tersedia Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Fitur Unggulan</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Semua yang kamu butuhkan untuk mengelola ruangan kampus secara efisien.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="rounded-xl border bg-card p-6 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Available Now */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-success animate-pulse-dot" />
                Tersedia Sekarang
              </h2>
              <p className="text-muted-foreground text-sm mt-1">Ruangan yang siap digunakan saat ini</p>
            </div>
            <Link to="/rooms?filter=available">
              <Button variant="outline" size="sm">
                Lihat Semua <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20 text-center">
        <div className="max-w-lg mx-auto space-y-4">
          <h2 className="text-3xl font-bold">Siap Memesan Ruangan?</h2>
          <p className="text-muted-foreground">
            Daftar sekarang dan nikmati kemudahan reservasi ruangan di Cakrawala University.
          </p>
          <div className="flex justify-center gap-3">
            <Button size="lg">Mulai Sekarang</Button>
            <Link to="/dashboard">
              <Button size="lg" variant="outline">Lihat Dashboard</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
