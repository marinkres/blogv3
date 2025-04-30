import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/consts'
import { Menu, X } from 'lucide-react'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleViewTransitionStart = () => setIsOpen(false)
    document.addEventListener('astro:before-swap', handleViewTransitionStart)
    return () => document.removeEventListener('astro:before-swap', handleViewTransitionStart)
  }, [])

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(e: MouseEvent) {
      // Only close if the click is outside BOTH the menu and the button
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !(buttonRef.current && buttonRef.current.contains(e.target as Node))
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <Button
        ref={buttonRef}
        variant="outline"
        size="icon"
        className="md:hidden"
        title={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((val) => !val)}
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute left-0 right-0 top-full w-full z-[100] bg-background border-b border-border flex flex-row justify-center md:hidden shadow-lg animate-fade-in"
          style={{ minHeight: '56px' }}
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex-1 text-base font-semibold capitalize flex items-center justify-center py-4 px-2 hover:bg-accent transition-colors whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}

export default MobileMenu
