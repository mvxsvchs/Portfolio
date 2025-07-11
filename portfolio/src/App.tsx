import { useEffect, useState } from "react";
import ScrollFloat from "@/components/common/ScrollFloat";
import { ArrowUp } from "lucide-react";

export default function App() {
    const [showButton, setShowButton] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);

            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#082C38] text-[#FCD8B4] scroll-smooth relative overflow-x-hidden">
            {/* Header */}
            <header className="flex justify-between items-center p-6 bg-[#082C38] sticky top-0 z-50">
                <h1 className="text-3xl font-bold text-[#C19976]">Maximilian Joppien</h1>
                <nav className="space-x-6">
                    <a href="#home" className="hover:underline">
                        Home
                    </a>
                    <a href="#about" className="hover:underline">
                        Über mich
                    </a>
                    <a href="#contact" className="hover:underline">
                        Kontakt
                    </a>
                </nav>
            </header>

            <main className="flex-grow">
                {/* Hero */}
                <section
                    id="home"
                    className="flex flex-col items-center justify-center min-h-screen text-center px-4"
                >
                    <ScrollFloat className="text-5xl font-bold mb-4">
                        Willkommen!
                    </ScrollFloat>

                    <ScrollFloat className="max-w-xl mb-8">
                        Ich baue moderne Webseiten mit React, TypeScript & Tailwind CSS.
                    </ScrollFloat>
                </section>

                {/* Über mich */}
                <section
                    id="about"
                    className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-[#0B3A47]"
                >
                    <ScrollFloat className="text-4xl font-bold mb-4 text-[#C19976]">
                        Über mich
                    </ScrollFloat>

                    <div className="space-y-2">
                        <ScrollFloat>
                            💻 <strong>Azubi zum Fachinformatiker AE</strong> (3. Lehrjahr)
                        </ScrollFloat>
                        <ScrollFloat>
                            ⚛️ Aktuell arbeite ich mit <strong>React & TypeScript</strong>
                        </ScrollFloat>
                        <ScrollFloat>
                            🎮 Leidenschaftlicher Gamer & Entwickler eigener Projekte
                        </ScrollFloat>
                        <ScrollFloat>
                            🧠 Ich liebe es, coole Webtools zu bauen
                        </ScrollFloat>
                        <ScrollFloat>
                            📚 Derzeit vertiefe ich mein Wissen in{" "}
                            <strong>Webentwicklung & Backend-Design</strong>
                        </ScrollFloat>
                    </div>
                </section>

                {/* Kontakt */}
                <section
                    id="contact"
                    className="flex flex-col items-center justify-center min-h-[80vh] py-12 text-center px-4 bg-[#082C38]"
                >
                    <ScrollFloat className="text-4xl font-bold mb-8 text-[#C19976]">
                        Kontakt
                    </ScrollFloat>

                    <ScrollFloat>
                        📧 Schreib mir eine Mail an{" "}
                        <a
                            href="mailto:maximilian@joppien.dev"
                            className="underline hover:text-[#C19976]"
                        >
                            maximilian@joppien.dev
                        </a>
                    </ScrollFloat>
                </section>
            </main>

            {/* Footer */}
            <footer className="p-4 text-center text-[#C19976] text-sm">
                © {new Date().getFullYear()} Maximilian Joppien. Alle Rechte vorbehalten.
            </footer>

            {/* Scroll Progressbar */}
            <div
                className="fixed bottom-0 left-0 h-1 bg-[#C19976] z-50 transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
            ></div>

            {/* Scroll To Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 bg-[#C19976] text-[#082C38] p-3 rounded-full shadow-lg transition-all duration-300 ${
                    showButton
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                } hover:bg-[#FCD8B4]`}
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </div>
    );
}
