export const metadata = {
  title: "Privacy Policy — RealtorAIGrowth",
  description: "Privacy Policy for Realtor AI Growth",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Realtor AI Growth – Privacy Policy</h1>
        <p className="mt-2 text-sm text-white/60">Last updated: 10/28/2025</p>

        <p className="mt-8 text-white/80">
          At Realtor AI Growth, your privacy is important to us. This Privacy Policy explains how we collect,
          use, and protect your personal information when you interact with our website, ads, and services.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p className="mt-3 text-white/80">We may collect:</p>
          <ul className="mt-3 list-disc list-inside space-y-2 text-white/80">
            <li>Name, email, and phone number you provide through forms or advertisements.</li>
            <li>Business or market location if you choose to share it.</li>
            <li>Analytics data (like page views or ad interactions) to improve our marketing.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <p className="mt-3 text-white/80">We use your information to:</p>
          <ul className="mt-3 list-disc list-inside space-y-2 text-white/80">
            <li>Contact you about the demo, service, or product you requested.</li>
            <li>Send you updates about your request or related offers.</li>
            <li>Improve our advertising and client experience.</li>
          </ul>
          <p className="mt-3 text-white/80">
            We do not sell or share your information with third parties for unrelated purposes.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">3. Data Protection</h2>
          <p className="mt-3 text-white/80">
            We use secure servers and modern encryption practices to protect your data. Only authorized team
            members or service providers (like CRM or automation tools) can access your information for the
            purpose of fulfilling your request.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">4. Your Choices</h2>
          <p className="mt-3 text-white/80">You may:</p>
          <ul className="mt-3 list-disc list-inside space-y-2 text-white/80">
            <li>Request access, correction, or deletion of your information.</li>
            <li>Unsubscribe from communications at any time using the link in our emails or by replying “STOP” to texts.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">5. Contact Us</h2>
          <p className="mt-3 text-white/80">
            If you have any questions about this Privacy Policy or how we handle your data, contact us at:
          </p>
          <p className="mt-2 text-white/80">📧 <a href="mailto:support@realtoraigrowth.com" className="underline hover:text-white">support@realtoraigrowth.com</a></p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">6. Updates</h2>
          <p className="mt-3 text-white/80">
            We may occasionally update this Privacy Policy. Any changes will be posted on this page with an
            updated date.
          </p>
        </section>
      </main>
    </div>
  );
}
