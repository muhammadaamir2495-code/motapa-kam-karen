import StaticPage from "@/components/StaticPage";

export const metadata = {
  title: "Contact Us — MeraSehat",
  description: "MeraSehat team se rabta karne ka tarika.",
  alternates: { canonical: "/contact" },
};

const CONTACT_EMAIL = "contact@yourdomain.com";

export default function ContactPage() {
  return (
    <StaticPage title="Contact Us" subtitle="Sawal, suggestion ya feedback — humein zaroor batayen">
      <p>
        Agar aapke paas MeraSehat ke content, planner tool, ya kisi article ke baare mein koi
        sawal, correction ya suggestion hai, to neeche diye gaye email par humein likh sakte hain.
      </p>

      <div className="rounded-xl border border-line bg-white px-5 py-4">
        <p className="text-sm font-medium text-ink/80 mb-1">Email</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-display text-lg text-primary hover:text-primary-dark"
        >
          {CONTACT_EMAIL}
        </a>
      </div>

      <p className="text-sm text-muted">
        Dhyan rahe: yeh site medical advice provide nahi karti, is liye personal health se juda
        koi bhi masla apne doctor se hi discuss karen — hum us par reply nahi kar sakte.
      </p>
    </StaticPage>
  );
}
