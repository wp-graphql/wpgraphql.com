import { MailchimpSignup } from "@/components/mailchimp-signup"; // You'll need to create this

export function Footer() {
  return (
    <footer className="w-full border-t py-[75px] mt-5 mb-[200px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://twitter.com/yourusername" className="hover:underline">Twitter</a></li>
              <li><a href="https://github.com/yourusername" className="hover:underline">GitHub</a></li>
              {/* Add more social links */}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <MailchimpSignup />
          </div>
        </div>
      </div>
    </footer>
  );
}