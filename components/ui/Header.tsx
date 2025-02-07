"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain, Cpu, MessageCircle, Eye, Users, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface NavItem {
    name: string;
    href: string;
    icon?: React.ComponentType;
    description?: string;
}

interface NavSection {
    title: string;
    items: NavItem[];
}

function isNavSection(item: NavItem | NavSection): item is NavSection {
    return 'items' in item;
}

function isNavItem(item: NavItem | NavSection): item is NavItem {
    return 'href' in item;
}

const navigationItems: (NavItem | NavSection)[] = [
    {
        title: "Solutions",
        items: [
            {
                name: "AI Consulting",
                href: "#services",
                description: "Expert guidance for AI integration",
                icon: Brain,
            },
            {
                name: "Machine Learning",
                href: "#services",
                description: "Custom ML model development",
                icon: Cpu,
            },
            {
                name: "NLP Solutions",
                href: "#services",
                description: "Advanced text processing",
                icon: MessageCircle,
            },
            {
                name: "Computer Vision",
                href: "#services",
                description: "Intelligent visual analysis",
                icon: Eye,
            },
        ],
    },
    {
        title: "AI Agents",
        items: [
            {
                name: "Aidr",
                href: "#agent-showcase",
                description: "The Intelligent Automation Powerhouse for business operations",
                icon: Brain,
            },
            {
                name: "Aidy",
                href: "#agent-showcase",
                description: "Your AI-Powered Dispatch and Customer Service Agent",
                icon: MessageCircle,
            },
            {
                name: "Aido",
                href: "#agent-showcase",
                description: "The Smart and Affordable Internal Business Assistant",
                icon: Cpu,
            },
        ],
    },
    {
        title: "Company",
        items: [
            {
                name: "About Us",
                href: "#about-us",
                description: "Learn about our mission",
                icon: Users,
            },
            {
                name: "Contact",
                href: "#contact",
                description: "Get in touch with us",
                icon: Phone,
            },
        ],
    },
];

export default function Header() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 });

        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isItemActive = (item: NavItem | NavSection) => {
        if (isNavItem(item)) {
            return activeSection === item.href.slice(1);
        }
        if (isNavSection(item)) {
            return item.items.some(subItem => activeSection === subItem.href.slice(1));
        }
        return false;
    };

    return (
        <header className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/75 backdrop-blur-lg py-4">
            <div className="container mx-auto px-4 lg:px-8">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-1">
                        <Link 
                            href="#home" 
                            className="text-lg font-light tracking-wider text-white hover:text-white/90 transition-colors" 
                            onClick={closeMenu}
                        >
                            SYNTAI
                        </Link>
                    </div>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden md:flex flex-1 items-center justify-center">
                        <NavigationMenu>
                            <NavigationMenuList className="flex gap-x-2">
                                {navigationItems.map((item, index) => {
                                    const isActive = isItemActive(item);
                                    
                                    if (isNavSection(item)) {
                                        return (
                                            <NavigationMenuItem key={index}>
                                                <NavigationMenuTrigger className="text-zinc-300 hover:text-white">
                                                    {item.title}
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                        {item.items.map((subItem) => (
                                                            <li key={subItem.name}>
                                                                <NavigationMenuLink asChild>
                                                                    <Link
                                                                        href={subItem.href}
                                                                        onClick={closeMenu}
                                                                        className={cn(
                                                                            "flex select-none items-start gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800 hover:text-zinc-100",
                                                                            activeSection === subItem.href.slice(1) ? 'text-white bg-zinc-800' : 'text-zinc-400'
                                                                        )}
                                                                    >
                                                                        {subItem.icon && <subItem.icon className="h-6 w-6 text-zinc-400" />}
                                                                        <div>
                                                                            <div className="text-sm font-semibold text-zinc-100">
                                                                                {subItem.name}
                                                                            </div>
                                                                            {subItem.description && (
                                                                                <p className="text-sm leading-snug text-zinc-400">
                                                                                    {subItem.description}
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                        );
                                    }
                                    return null;
                                })}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Right Side - Contact Button & Mobile Menu */}
                    <div className="flex-1 flex items-center justify-end gap-x-4">
                        <Button
                            asChild
                            variant="outline"
                            className="hidden md:inline-flex border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900 hover:text-zinc-100"
                        >
                            <Link href="#contact">
                                Contact Us
                            </Link>
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-zinc-400 hover:text-zinc-100 bg-zinc-800 hover:bg-zinc-700 transition-all duration-200"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetContent className="bg-black text-white overflow-y-auto pt-16 pr-0" side="right">
                        <SheetHeader className="mb-4 absolute top-4 right-4">
                            <SheetTitle>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="md:hidden text-zinc-400 hover:text-zinc-100 bg-zinc-800 hover:bg-zinc-700 transition-all duration-200 z-50"
                                    onClick={() => setIsMenuOpen(false)}
                                    aria-label="Close Menu"
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </SheetTitle>
                        </SheetHeader>

                        <div className="my-6 flex flex-col gap-6">
                            {navigationItems.map((item, index) => {
                                const isActive = isItemActive(item);

                                if (isNavSection(item)) {
                                    return (
                                        <Accordion type="single" collapsible className="flex w-full flex-col gap-4" key={index}>
                                            <AccordionItem value={item.title} className="border-b-0">
                                                <AccordionTrigger className="py-0 font-semibold hover:no-underline text-zinc-100">
                                                    {item.title}
                                                </AccordionTrigger>
                                                <AccordionContent className="mt-2">
                                                    {item.items.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            onClick={closeMenu}
                                                            className={cn(
                                                                "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-zinc-800 hover:text-zinc-100",
                                                                activeSection === subItem.href.slice(1) ? "text-white bg-zinc-800" : "text-zinc-400"
                                                            )}
                                                        >
                                                            {subItem.icon && <subItem.icon className="h-5 w-5 shrink-0" />}
                                                            <div>
                                                                <div className="text-sm font-semibold">{subItem.name}</div>
                                                                {subItem.description && (
                                                                    <p className="text-sm leading-snug text-zinc-400">
                                                                        {subItem.description}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    );
                                }

                                if (isNavItem(item)) {
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={closeMenu}
                                            className={cn(
                                                "block w-full px-4 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors duration-200 rounded-md",
                                                isActive ? "text-white bg-zinc-800" : ""
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                }

                                return null;
                            })}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}