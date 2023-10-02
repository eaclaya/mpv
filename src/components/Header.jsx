'use client';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';

import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { NavLink } from '../components/NavLink';
import WhatsappLogo from '../images/logos/whatsapp.png';

function MobileNavLink({ href, children }) {
    return (
        <Popover.Button href={href} className="block w-full p-2">
            {children}
        </Popover.Button>
    );
}

function MobileNavIcon({ open }) {
    return (
        <svg aria-hidden="true" className="h-3.5 w-3.5 overflow-visible stroke-slate-700" fill="none" strokeWidth={2} strokeLinecap="round">
            <path d="M0 1H14M0 7H14M0 13H14" className={clsx('origin-center transition', open && 'scale-90 opacity-0')} />
            <path d="M2 2L12 12M12 2L2 12" className={clsx('origin-center transition', !open && 'scale-90 opacity-0')} />
        </svg>
    );
}

function MobileNavigation() {
    return (
        <Popover>
            <Popover.Button
                className="relative z-10 flex items-center justify-center w-8 h-8 ui-not-focus-visible:outline-none"
                aria-label="Toggle Navigation"
            >
                {({ open }) => <MobileNavIcon open={open} />}
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        as="div"
                        className="absolute inset-x-0 flex flex-col p-4 mt-4 text-lg tracking-tight origin-top bg-white shadow-xl top-full rounded-2xl text-slate-900 ring-1 ring-slate-900/5"
                    >
                        <MobileNavLink href="#features">Caracteristicas</MobileNavLink>
                        <MobileNavLink href="#pricing">Precios</MobileNavLink>
                        <hr className="m-2 border-slate-300/40" />
                        <MobileNavLink href="/login">Whatsapp</MobileNavLink>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    );
}

export function Header() {
    return (
        <header className="py-10">
            <Container>
                <nav className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12">
                        <a href="#" aria-label="Home">
                            <Logo className="w-auto h-10" />
                        </a>
                        <div className="hidden md:flex md:gap-x-6">
                            <NavLink href="#features">Caracteristicas</NavLink>
                            <NavLink href="#pricing">Precios</NavLink>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                        <Button href="https://wa.me/50489233670" color="blue" target="_blank">
                            <img src={WhatsappLogo} alt="Whatsapp" unoptimized width={40} height={40} />
                        </Button>
                        <div className="-mr-1 md:hidden">
                            <MobileNavigation />
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    );
}
