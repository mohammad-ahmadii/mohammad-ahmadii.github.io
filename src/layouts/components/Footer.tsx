import { profile } from "@/constants/resumeData";

export default function Footer() {
  return (
    <footer className="py-24">
      <div className="max-w-6xl mx-auto  px-6">
        <div className="mt-16 pt-8 border-t border-line flex flex-wrap justify-between gap-4 font-mono text-[11px] text-inkMuted">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
