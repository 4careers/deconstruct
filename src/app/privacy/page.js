export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose dark:prose-invert">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to Deconstruct. We respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you as to how we look after your personal data when you visit our website 
          and tell you about your privacy rights.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. The Data We Collect</h2>
        <p className="mb-4">
          We do not actively collect, store, or process any personal data from our visitors. If you interact with 
          third-party integrations (like Pinterest or YouTube embedded content), they may collect data according 
          to their own privacy policies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Third-Party Links</h2>
        <p className="mb-4">
          This website may include links to third-party websites, plug-ins, and applications. Clicking on those links 
          or enabling those connections may allow third parties to collect or share data about you. We do not control 
          these third-party websites and are not responsible for their privacy statements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Pinterest API Usage</h2>
        <p className="mb-4">
          This application uses the Pinterest API to programmatically publish content to our own Pinterest boards. 
          We do not request, access, or store user data from other Pinterest users. The API is strictly used for 
          internal content syndication.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this privacy policy or our privacy practices, please contact us.
        </p>
      </div>
    </div>
  );
}
