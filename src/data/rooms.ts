import type { Room } from "@/components/RoomCard";

export const rooms: Room[] = [
  { id: "r1", name: "Ruang Rapat A1", building: "Gedung A - Lt. 1", capacity: 20, status: "available", type: "Ruang Rapat" },
  { id: "r2", name: "Lab Komputer 1", building: "Gedung B - Lt. 2", capacity: 40, status: "occupied", type: "Laboratorium", currentBooking: "Kelas Algo - 08:00-10:00" },
  { id: "r3", name: "Aula Utama", building: "Gedung C - Lt. 1", capacity: 200, status: "available", type: "Aula" },
  { id: "r4", name: "Ruang Diskusi B3", building: "Gedung B - Lt. 3", capacity: 10, status: "available", type: "Ruang Diskusi" },
  { id: "r5", name: "Ruang Seminar 1", building: "Gedung A - Lt. 3", capacity: 80, status: "occupied", type: "Ruang Seminar", currentBooking: "Workshop UI/UX - 13:00-16:00" },
  { id: "r6", name: "Ruang Kelas C2.01", building: "Gedung C - Lt. 2", capacity: 45, status: "maintenance", type: "Ruang Kelas" },
  { id: "r7", name: "Ruang Rapat B2", building: "Gedung B - Lt. 2", capacity: 15, status: "available", type: "Ruang Rapat" },
  { id: "r8", name: "Ruang Diskusi A2", building: "Gedung A - Lt. 2", capacity: 8, status: "available", type: "Ruang Diskusi" },
  { id: "r9", name: "Lab Multimedia", building: "Gedung D - Lt. 1", capacity: 30, status: "occupied", type: "Laboratorium", currentBooking: "Kelas Desain - 10:00-12:00" },
];
