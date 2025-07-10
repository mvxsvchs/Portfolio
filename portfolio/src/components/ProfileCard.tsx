import React, { useEffect, useRef, useCallback, useMemo } from "react";
import "./ProfileCard.css";

interface ProfileCardProps {
    avatarUrl: string;
    miniAvatarUrl?: string;
    name?: string;
    title?: string;
    handle?: string;
    status?: string;
    contactText?: string;
    onContactClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
                                                     avatarUrl,
                                                     miniAvatarUrl,
                                                     name = "Maximilian Joppien",
                                                     title = "Web Developer",
                                                     handle = "deinhandle",
                                                     status = "Verfügbar",
                                                     contactText = "Kontakt",
                                                     onContactClick,
                                                 }) => {
    const wrapRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrap = wrapRef.current;
        const card = cardRef.current;
        if (!wrap || !card) return;

        const handleMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const px = Math.min(Math.max(x / rect.width, 0), 1);
            const py = Math.min(Math.max(y / rect.height, 0), 1);

            wrap.style.setProperty("--pointer-x", `${px * 100}%`);
            wrap.style.setProperty("--pointer-y", `${py * 100}%`);
            wrap.style.setProperty("--rotate-x", `${(px - 0.5) * 20}deg`);
            wrap.style.setProperty("--rotate-y", `${(0.5 - py) * 20}deg`);
            wrap.style.setProperty("--pointer-from-center", `${Math.hypot(px - 0.5, py - 0.5) * 2}`);
        };

        const handleLeave = () => {
            wrap.style.setProperty("--rotate-x", `0deg`);
            wrap.style.setProperty("--rotate-y", `0deg`);
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);

        return () => {
            card.removeEventListener("mousemove", handleMove);
            card.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    return (
        <div ref={wrapRef} className="pc-card-wrapper">
            <section ref={cardRef} className="pc-card">
                <div className="pc-inside">
                    <div className="pc-shine" />
                    <div className="pc-glare" />
                    <div className="pc-content pc-avatar-content">
                        <img
                            className="avatar"
                            src={avatarUrl}
                            alt="Avatar"
                            loading="lazy"
                        />
                        <div className="pc-user-info">
                            <div className="pc-user-details">
                                <div className="pc-mini-avatar">
                                    <img
                                        src={miniAvatarUrl || avatarUrl}
                                        alt="Mini Avatar"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="pc-user-text">
                                    <div className="pc-handle">@{handle}</div>
                                    <div className="pc-status">{status}</div>
                                </div>
                            </div>
                            <button
                                className="pc-contact-btn"
                                onClick={onContactClick}
                                type="button"
                            >
                                {contactText}
                            </button>
                        </div>
                    </div>
                    <div className="pc-content pc-details">
                        <h3>{name}</h3>
                        <p>{title}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProfileCard;
