import { profile } from "@/constants/resumeData";
import { ContactDetails } from "@/features/contact";
import ContactForm from "@/features/contact/components/ContactForm";
import { ROUTES } from "@/shared/config";
import PageHeader from "@/shared/ui/PageHeader";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div className="contact-page min-h-screen">
      <div className="max-w-6xl mx-auto pt-8 px-6">
        <PageHeader title="Contact" />
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
          <div>
            <p className="text-inkMuted leading-relaxed mb-8 max-w-md">
              The fastest way to reach me is email — I usually reply within a
              day. If you would rather look at the work first, the{" "}
              <Link
                to={ROUTES.projects}
                className="text-trace hover:text-signal transition-colors underline underline-offset-4"
              >
                projects page
              </Link>{" "}
              has the details.
            </p>

            <ContactDetails variant="list" />
          </div>

          <div className="border border-line bg-raised p-6 sm:p-8">
            <p className="font-mono text-xl  tracking-[0.15em] text-signal mb-6">
              SEND A MESSAGE
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
