import { LayoutDashboard, Users, CalendarCheck, Building, TrendingUp, Clock, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { rooms } from "@/data/rooms";

const stats = [
  { label: "Total Ruangan", value: "9", icon: Building, change: "" },
  { label: "Tersedia", value: "5", icon: CheckCircle2, change: "+2 dari kemarin" },
  { label: "Booking Hari Ini", value: "12", icon: CalendarCheck, change: "+3 dari kemarin" },
  { label: "Pengguna Aktif", value: "47", icon: Users, change: "+8 minggu ini" },
];

const recentBookings = [
  { id: "CKR-001", user: "Andi (UKM Coding)", room: "Ruang Rapat A1", time: "09:00-11:00", status: "confirmed" },
  { id: "CKR-002", user: "Dinda (Mahasiswa)", room: "Ruang Diskusi B3", time: "10:00-12:00", status: "confirmed" },
  { id: "CKR-003", user: "BEM Fakultas", room: "Aula Utama", time: "13:00-16:00", status: "pending" },
  { id: "CKR-004", user: "Dosen Pak Budi", room: "Ruang Seminar 1", time: "14:00-15:30", status: "confirmed" },
  { id: "CKR-005", user: "UKM Basket", room: "Ruang Rapat B2", time: "16:00-17:00", status: "cancelled" },
];

const statusBadge = {
  confirmed: { label: "Dikonfirmasi", className: "bg-success text-success-foreground" },
  pending: { label: "Menunggu", className: "bg-warning text-warning-foreground" },
  cancelled: { label: "Dibatalkan", className: "bg-destructive text-destructive-foreground" },
};

const topFaculties = [
  { name: "Fakultas Ilmu Komputer", count: 45 },
  { name: "Fakultas Ekonomi", count: 32 },
  { name: "Fakultas Teknik", count: 28 },
  { name: "Fakultas Hukum", count: 15 },
];

const Dashboard = () => {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <LayoutDashboard className="h-8 w-8 text-primary" />
          Dashboard Admin
        </h1>
        <p className="text-muted-foreground mt-1">Pantau penggunaan ruangan kampus secara real-time</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <Card key={s.label} className="shadow-card animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">{s.label}</span>
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-3xl font-bold">{s.value}</p>
              {s.change && (
                <p className="text-xs text-success flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3" /> {s.change}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Room status */}
        <Card className="lg:col-span-2 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5 text-primary" />
              Status Ruangan Saat Ini
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {rooms.map((room) => {
                const statusColor = room.status === "available" ? "bg-success" : room.status === "occupied" ? "bg-destructive" : "bg-warning";
                return (
                  <div key={room.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <span className={`h-2.5 w-2.5 rounded-full ${statusColor} ${room.status === "available" ? "animate-pulse-dot" : ""}`} />
                      <div>
                        <p className="font-medium text-sm">{room.name}</p>
                        <p className="text-xs text-muted-foreground">{room.building}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {room.currentBooking ? (
                        <p className="text-xs text-muted-foreground">{room.currentBooking}</p>
                      ) : (
                        <Badge variant="outline" className="text-xs">
                          {room.status === "available" ? "Kosong" : "Maintenance"}
                        </Badge>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Top faculties */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
              Booking Terbanyak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topFaculties.map((f, i) => (
                <div key={f.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{f.name}</span>
                    <span className="text-muted-foreground">{f.count}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-hero transition-all duration-700"
                      style={{ width: `${(f.count / 45) * 100}%`, animationDelay: `${i * 100}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent bookings */}
      <Card className="mt-6 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <CalendarCheck className="h-5 w-5 text-primary" />
            Riwayat Booking Terbaru
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted-foreground border-b">
                  <th className="pb-3 font-medium">ID</th>
                  <th className="pb-3 font-medium">Pengguna</th>
                  <th className="pb-3 font-medium">Ruangan</th>
                  <th className="pb-3 font-medium">Waktu</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((b) => {
                  const badge = statusBadge[b.status as keyof typeof statusBadge];
                  return (
                    <tr key={b.id} className="border-b last:border-0">
                      <td className="py-3 font-mono text-xs">{b.id}</td>
                      <td className="py-3">{b.user}</td>
                      <td className="py-3">{b.room}</td>
                      <td className="py-3">{b.time}</td>
                      <td className="py-3">
                        <Badge className={badge.className}>{badge.label}</Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
