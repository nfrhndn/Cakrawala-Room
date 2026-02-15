import { useState } from "react";
import { Search, Filter, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data/rooms";

const filters = ["Semua", "Tersedia", "Digunakan", "Ruang Rapat", "Laboratorium", "Aula", "Ruang Diskusi"];

const Rooms = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filtered = rooms.filter((room) => {
    const matchSearch =
      room.name.toLowerCase().includes(search.toLowerCase()) ||
      room.building.toLowerCase().includes(search.toLowerCase());
    if (activeFilter === "Semua") return matchSearch;
    if (activeFilter === "Tersedia") return matchSearch && room.status === "available";
    if (activeFilter === "Digunakan") return matchSearch && room.status === "occupied";
    return matchSearch && room.type === activeFilter;
  });

  const availableCount = rooms.filter((r) => r.status === "available").length;

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Daftar Ruangan</h1>
          <p className="text-muted-foreground mt-1">
            {availableCount} ruangan tersedia dari {rooms.length} total
          </p>
        </div>
        <Button
          onClick={() => setActiveFilter("Tersedia")}
          className="bg-gradient-accent border-0"
        >
          <Zap className="mr-2 h-4 w-4" />
          Tersedia Sekarang ({availableCount})
        </Button>
      </div>

      {/* Search & filters */}
      <div className="space-y-4 mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari ruangan atau gedung..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Filter className="h-5 w-5 text-muted-foreground mt-0.5" />
          {filters.map((f) => (
            <Badge
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`cursor-pointer transition-colors ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f}
            </Badge>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((room, i) => (
            <div key={room.id} className="animate-fade-in" style={{ animationDelay: `${i * 50}ms` }}>
              <RoomCard room={room} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-muted-foreground">
          <Search className="h-12 w-12 mx-auto mb-4 opacity-40" />
          <p className="text-lg font-medium">Tidak ada ruangan ditemukan</p>
          <p className="text-sm">Coba ubah kata kunci atau filter pencarian</p>
        </div>
      )}
    </div>
  );
};

export default Rooms;
