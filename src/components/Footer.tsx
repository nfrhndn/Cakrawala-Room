import { Building2 } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-card mt-auto">
    <div className="container py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Building2 className="h-5 w-5 text-primary" />
          <span className="text-gradient-primary">CakrawalaRoom</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2025 Cakrawala University. Sistem Reservasi Ruangan Kampus.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
