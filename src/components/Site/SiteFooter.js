import socialLinks from "data/social"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-200/5 pt-10 pb-28">
      <div className="max-w-7xl mx-auto sm:flex justify-between text-slate-500">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-100"
              target={"_blank"}
              rel="noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1 prose dark:prose-invert">
          <p className="text-center text-base text-gray-600 dark:text-gray-300">
            &copy; 2021 WPGraphQL. All rights reserved. | Development sponsored
            by{" "}
            <a
              href="https://www.wpengine.com/atlas"
              target="_blank"
              rel="noreferrer"
            >
              WP Engine
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
