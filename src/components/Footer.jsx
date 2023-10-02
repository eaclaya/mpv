import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { NavLink } from '../components/NavLink';
import WhatsappLogo from '../images/logos/whatsapp.png';

export function Footer() {
    return (
        <footer className="bg-slate-50">
            <Container>
                <div className="py-16">
                    <Logo className="w-auto h-10 mx-auto" />
                    <nav className="mt-10 text-sm" aria-label="quick links">
                        <div className="flex justify-center -my-1 gap-x-6">
                            <NavLink href="#features">Catacteristicas</NavLink>
                            <NavLink href="#pricing">Precios</NavLink>
                        </div>
                    </nav>
                </div>
                <div className="flex flex-col items-center py-10 border-t border-slate-400/10 sm:flex-row-reverse sm:justify-between">
                    <div className="flex gap-x-6">
                        <a href="https://wa.me/50489233670" className="bg-blue-600 rounded-full group" aria-label="Whatsapp" target="_blank">
                            <img src={WhatsappLogo} alt="Whatsapp" unoptimized width={40} height={40} />
                        </a>
                    </div>
                    <p className="mt-6 text-sm text-slate-500 sm:mt-0">Copyright &copy; {new Date().getFullYear()} MPV. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
