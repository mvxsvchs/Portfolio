import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard"; // ✅ Korrekt für deinen Ordner!

export default function App() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#082C38] text-[#FCD8B4] scroll-smooth relative">
            {/* Header */}
            <header className="flex justify-between items-center p-6 bg-[#082C38] sticky top-0 z-50">
                <h1 className="text-3xl font-bold text-[#C19976]">Mein Portfolio</h1>
                <nav className="space-x-6">
                    <a href="#home" className="hover:underline">Home</a>
                    <a href="#about" className="hover:underline">Über mich</a>
                    <a href="#contact" className="hover:underline">Kontakt</a>
                </nav>
            </header>

            <main className="flex-grow">
                {/* Hero */}
                <section
                    id="home"
                    className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 bg-fixed bg-center bg-cover"
                    style={{
                        backgroundImage: `url('/your-parallax.jpg')`, // Dein Bild in /public/
                    }}
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
                    className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 bg-[#0B3A47]"
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

                {/* Kontakt */}
                <section
                    id="contact"
                    className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 bg-[#082C38]"
                >
                    <h3
                        className="text-4xl font-bold mb-8 text-[#C19976]"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        Kontakt
                    </h3>

                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <ProfileCard
                            avatarUrl="/your-avatar.jpg"
                            miniAvatarUrl="/your-avatar.jpg"
                            name="Maximilian Joppien"
                            handle="mvxsvchs"
                            status="Online"
                            contactText="Kontakt"
                            onContactClick={() => window.location.href = "mailto:maximilian@joppien.dev"}
                        />
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="p-4 text-center text-[#C19976] text-sm">
                © {new Date().getFullYear()} Dein Name. Alle Rechte vorbehalten.
            </footer>

            {/* Scroll To Top Button */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-[#C19976] text-[#082C38] p-3 rounded-full shadow-lg hover:bg-[#FCD8B4] transition-colors"
                >
                    ↑
                </button>
            )}
        </div>
    );
}
