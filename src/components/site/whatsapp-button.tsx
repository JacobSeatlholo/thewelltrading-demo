import { whatsappLink } from "@/lib/site";

/**
 * Sticky WhatsApp chat button — visible on every page.
 * Links to wa.me with a friendly pre-filled message.
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with The Well Trading on WhatsApp"
      className="animate-pulse-ring group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.65)] transition-transform duration-300 hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-current"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.72 6.4L3.2 28.8l6.56-1.68a12.74 12.74 0 0 0 6.24 1.6h.004c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.72-12.8-12.72Zm0 23.352c-1.92 0-3.8-.52-5.44-1.5l-.4-.24-3.9 1 1.04-3.8-.26-.4a10.6 10.6 0 0 1-1.63-5.61c0-5.87 4.78-10.65 10.65-10.65 2.84 0 5.51 1.11 7.52 3.12a10.57 10.57 0 0 1 3.11 7.53c0 5.87-4.78 10.55-10.69 10.55Zm5.84-7.9c-.32-.16-1.98-.98-2.28-1.09-.31-.11-.53-.17-.75.16-.22.32-.86 1.09-1.06 1.31-.19.22-.39.24-.71.08-.32-.16-1.36-.5-2.58-1.6-.95-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.22-.32.32-.53.11-.22.05-.4-.03-.56-.08-.16-.72-1.82-.99-2.49-.26-.65-.52-.56-.72-.57h-.64c-.22 0-.58.08-.88.4-.3.32-1.15 1.12-1.15 2.74s1.18 3.18 1.34 3.4c.16.22 2.29 3.5 5.55 4.9.78.34 1.38.54 1.85.69.78.25 1.49.21 2.05.13.62-.09 1.98-.81 2.26-1.59.28-.78.28-1.45.19-1.59-.08-.14-.29-.22-.61-.38Z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-white/10 bg-ink px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
