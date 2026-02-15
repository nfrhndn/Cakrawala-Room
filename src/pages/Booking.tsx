import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CalendarCheck, QrCode, CheckCircle2, Clock, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { rooms } from "@/data/rooms";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const preselectedRoom = searchParams.get("room") || "";
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedRoom, setSelectedRoom] = useState(preselectedRoom);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    date: "",
    startTime: "",
    endTime: "",
    purpose: "",
    participants: "",
  });

  const availableRooms = rooms.filter((r) => r.status === "available");
  const selectedRoomData = rooms.find((r) => r.id === selectedRoom);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    // Simulate processing
    setTimeout(() => setStep(3), 1500);
  };

  if (step === 3) {
    return (
      <div className="container max-w-lg py-16 text-center animate-fade-in">
        <div className="rounded-2xl border bg-card p-8 shadow-card">
          <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-success" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Booking Berhasil!</h2>
          <p className="text-muted-foreground mb-6">
            {selectedRoomData?.name} telah berhasil dipesan.
          </p>

          {/* Fake QR Code */}
          <div className="bg-muted rounded-xl p-6 mb-6">
            <QrCode className="h-32 w-32 mx-auto text-foreground mb-3" />
            <p className="text-sm font-medium">Kode Booking: CKR-2025-{Math.random().toString(36).substring(2, 8).toUpperCase()}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Tunjukkan QR Code ini saat check-in di ruangan
            </p>
          </div>

          <div className="text-left space-y-2 text-sm border-t pt-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Ruangan</span>
              <span className="font-medium">{selectedRoomData?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tanggal</span>
              <span className="font-medium">{formData.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Waktu</span>
              <span className="font-medium">{formData.startTime} - {formData.endTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Keperluan</span>
              <span className="font-medium">{formData.purpose}</span>
            </div>
          </div>

          <Button className="w-full mt-6" onClick={() => { setStep(1); setFormData({ name: "", email: "", organization: "", date: "", startTime: "", endTime: "", purpose: "", participants: "" }); }}>
            Booking Lagi
          </Button>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="container max-w-lg py-16 text-center animate-fade-in">
        <div className="rounded-2xl border bg-card p-8 shadow-card">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 animate-pulse">
            <CalendarCheck className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl font-bold mb-2">Memproses Booking...</h2>
          <p className="text-muted-foreground">Mengecek ketersediaan dan membuat QR Code</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <CalendarCheck className="h-8 w-8 text-primary" />
          Booking Ruangan
        </h1>
        <p className="text-muted-foreground mt-1">Isi formulir untuk memesan ruangan kampus</p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border bg-card p-6 md:p-8 shadow-card space-y-6">
        {/* Room selection */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2"><FileText className="h-4 w-4" /> Pilih Ruangan</Label>
          <Select value={selectedRoom} onValueChange={setSelectedRoom} required>
            <SelectTrigger>
              <SelectValue placeholder="Pilih ruangan yang tersedia" />
            </SelectTrigger>
            <SelectContent>
              {availableRooms.map((r) => (
                <SelectItem key={r.id} value={r.id}>
                  {r.name} — {r.building} (Kap. {r.capacity})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Nama Lengkap</Label>
            <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Nama pemohon" />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="email@cakrawala.ac.id" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Organisasi / Prodi</Label>
            <Input value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} placeholder="Contoh: BEM, UKM Coding" />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-2"><Users className="h-4 w-4" /> Jumlah Peserta</Label>
            <Input type="number" value={formData.participants} onChange={(e) => setFormData({ ...formData, participants: e.target.value })} placeholder="10" />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Tanggal</Label>
            <Input required type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-2"><Clock className="h-4 w-4" /> Mulai</Label>
            <Input required type="time" value={formData.startTime} onChange={(e) => setFormData({ ...formData, startTime: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Selesai</Label>
            <Input required type="time" value={formData.endTime} onChange={(e) => setFormData({ ...formData, endTime: e.target.value })} />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Keperluan</Label>
          <Textarea required value={formData.purpose} onChange={(e) => setFormData({ ...formData, purpose: e.target.value })} placeholder="Jelaskan tujuan penggunaan ruangan..." rows={3} />
        </div>

        <Button type="submit" size="lg" className="w-full font-semibold">
          <CalendarCheck className="mr-2 h-5 w-5" />
          Ajukan Booking
        </Button>
      </form>
    </div>
  );
};

export default Booking;
