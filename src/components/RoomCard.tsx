import { Users, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface Room {
  id: string;
  name: string;
  building: string;
  capacity: number;
  status: "available" | "occupied" | "maintenance";
  type: string;
  currentBooking?: string;
  nextAvailable?: string;
}

const statusConfig = {
  available: { label: "Tersedia", className: "bg-success text-success-foreground" },
  occupied: { label: "Digunakan", className: "bg-destructive text-destructive-foreground" },
  maintenance: { label: "Maintenance", className: "bg-warning text-warning-foreground" },
};

const RoomCard = ({ room }: { room: Room }) => {
  const status = statusConfig[room.status];

  return (
    <div className="group rounded-xl border bg-card p-5 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-lg text-card-foreground">{room.name}</h3>
          <p className="text-sm text-muted-foreground">{room.type}</p>
        </div>
        <Badge className={status.className}>{status.label}</Badge>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{room.building}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>Kapasitas {room.capacity} orang</span>
        </div>
        {room.status === "occupied" && room.currentBooking && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{room.currentBooking}</span>
          </div>
        )}
      </div>

      <Link to={`/booking?room=${room.id}`}>
        <Button
          className="w-full"
          disabled={room.status !== "available"}
          variant={room.status === "available" ? "default" : "secondary"}
        >
          {room.status === "available" ? "Booking Sekarang" : "Tidak Tersedia"}
        </Button>
      </Link>
    </div>
  );
};

export default RoomCard;
