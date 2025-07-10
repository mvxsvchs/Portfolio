export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-[#082C38] text-[#FCD8B4] scroll-smooth">
            {/* Header */}
            <header className="flex justify-between items-center p-6 bg-[#082C38] sticky top-0 z-50">
                <h1 className="text-3xl font-bold text-[#C19976]">Mein Portfolio</h1>
                <nav className="space-x-6">
                    <a href="#home" className="hover:underline">Home</a>
                    <a href="#about" className="hover:underline">Über mich</a>
                    <a href="#projects" className="hover:underline">Projekte</a>
                    <a href="#contact" className="hover:underline">Kontakt</a>
                </nav>
            </header>

            <main className="flex-grow">
                {/* Hero */}
                <section
                    id="home"
                    className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
                >
                    <h2
                        className="text-5xl font-bold mb-4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        Willkommen!
                    </h2>
                    <p
                        className="max-w-xl mb-8"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        Ich baue moderne Webseiten mit React, TypeScript & Tailwind CSS.
                    </p>
                </section>

                {/* Über mich */}
                <section
                    id="about"
                    className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
                >
                    <h3
                        className="text-4xl font-bold mb-4 text-[#C19976]"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        Über mich
                    </h3>
                    <div
                        className="space-y-2"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <p>💻 <strong>Azubi zum Fachinformatiker AE</strong> (3. Lehrjahr)</p>
                        <p>⚛️ Aktuell arbeite ich mit <strong>React & TypeScript</strong></p>
                        <p>🎮 Leidenschaftlicher Gamer & Entwickler eigener Projekte</p>
                        <p>🧠 Ich liebe es, coole Webtools zu bauen</p>
                        <p>📚 Derzeit vertiefe ich mein Wissen in <strong>Webentwicklung & Backend-Design</strong></p>
                    </div>
                </section>

                {/* Projekte */}
                <section
                    id="projects"
                    className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
                >
                    <h3
                        className="text-4xl font-bold mb-4 text-[#C19976]"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        Projekte
                    </h3>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        Zeige deine besten Projekte hier!
                    </p>
                </section>

                {/* Kontakt */}
                <section
                    id="contact"
                    className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
                >
                    <h3
                        className="text-4xl font-bold mb-4 text-[#C19976]"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        Kontakt
                    </h3>
                    <p
                        className="mb-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        Du möchtest mit mir zusammenarbeiten oder hast Fragen?
                    </p>
                    <a
                        href="mailto:dein.email@example.com"
                        className="inline-block bg-[#C19976] text-[#082C38] px-6 py-3 rounded-full font-semibold hover:bg-[#FCD8B4] transition-colors"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        E-Mail schreiben
                    </a>
                </section>
            </main>

            {/* Footer */}
            <footer className="p-4 text-center text-[#C19976] text-sm">
                © {new Date().getFullYear()} Dein Name. Alle Rechte vorbehalten.
            </footer>
        </div>
    );
}
