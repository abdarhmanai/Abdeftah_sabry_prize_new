import { useState, useEffect } from "react";

const awardLogo ="/awardLogo.jpg";




type Page = "home" | "about" | "register" | "editions" | "contact";

const HERO_IMG =
  "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1800&h=900&fit=crop&auto=format";
const LIBRARY_IMG =
  "https://images.unsplash.com/photo-1771647287015-f30dbb239646?w=1200&h=800&fit=crop&auto=format";
const PATTERN_IMG =
  "https://images.unsplash.com/photo-1558114965-eeb97aa84c3b?w=1200&h=700&fit=crop&auto=format";
const EDITION_IMGS = [
  "https://images.unsplash.com/photo-1601411972811-a77044c3a428?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1600790258862-5ed166ad35a2?w=600&h=400&fit=crop&auto=format",
  "/prize2025.png",
  "/prize2024.png",
  "/prize2023.jpg",
  "/prize2022.jpg"
];

const GoldDivider = ({ className = "" }: { className?: string }) => (
  <div className={`gold-line-full ${className}`} />
);

const GoldOrnament = () => (
  <div className="flex items-center gap-3 justify-center my-4">
    <div style={{ width: 40, height: 1, background: "#c9a84c" }} />
    <div
      style={{
        width: 6,
        height: 6,
        background: "#c9a84c",
        transform: "rotate(45deg)",
      }}
    />
    <div style={{ width: 40, height: 1, background: "#c9a84c" }} />
  </div>
);

function Navbar({
  currentPage,
  setPage,
}: {
  currentPage: Page;
  setPage: (p: Page) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links: { label: string; page: Page }[] = [
    { label: "الرئيسية", page: "home" },
    { label: "عن الجائزة", page: "about" },
    { label: "التسجيل", page: "register" },
    { label: "الدورات السابقة", page: "editions" },
    { label: "للتواصل", page: "contact" },
  ];

  const nav = (p: Page) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
        background: scrolled
          ? "rgba(12,12,12,0.95)"
          : "rgba(12,12,12,0.6)",
        borderBottom: scrolled
          ? "1px solid rgba(201,168,76,0.2)"
          : "1px solid transparent",
        backdropFilter: "blur(12px)",
        transition: "all 0.35s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 2rem",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => nav("home")}
          style={{ display: "flex", alignItems: "center", gap: "0.85rem", background: "none", border: "none", cursor: "pointer" }}
        >
          <img
            src={awardLogo}
            alt="شعار جائزة عبد الفتاح صبري للقصة القصيرة"
            style={{
              width: 55,
              height: 55,
              objectFit: "contain",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(201,168,76,0.25)",
              
            }}
          />
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#c9a84c",
                letterSpacing: "0.01em",
                lineHeight: 1.3,
              }}
            >
              جائزة عبد الفتاح صبري
            </div>
            <div
              style={{
                fontSize: "0.68rem",
                color: "#7a7268",
                letterSpacing: "0.06em",
              }}
            >
              للقصة القصيرة
            </div>
          </div>
        </button>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="hidden-mobile"
        >
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => nav(l.page)}
              className={currentPage === l.page ? "nav-active" : ""}
              style={{
                fontSize: "0.88rem",
                fontWeight: currentPage === l.page ? 600 : 400,
                color: currentPage === l.page ? "#c9a84c" : "#b8b0a0",
                letterSpacing: "0.04em",
                transition: "color 0.25s",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.25rem 0",
              }}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            onClick={() => nav("register")}
            className="btn-primary hidden-mobile"
            style={{
              fontSize: "0.85rem",
              fontFamily: "inherit",
              cursor: "pointer",
              border: "none",
            }}
          >
            سجّل الآن
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 1.5,
                  background: "#c9a84c",
                  transition: "all 0.3s",
                  transformOrigin: "center",
                  transform:
                    menuOpen && i === 0
                      ? "translateY(6.5px) rotate(45deg)"
                      : menuOpen && i === 2
                        ? "translateY(-6.5px) rotate(-45deg)"
                        : menuOpen && i === 1
                          ? "opacity 0"
                          : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(12,12,12,0.98)",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            padding: "1.5rem 2rem",
          }}
        >
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => nav(l.page)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "right",
                padding: "0.85rem 0",
                fontSize: "1rem",
                color: currentPage === l.page ? "#c9a84c" : "#b8b0a0",
                fontWeight: currentPage === l.page ? 600 : 400,
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(201,168,76,0.08)",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => nav("register")}
            className="btn-primary"
            style={{
              width: "100%",
              marginTop: "1rem",
              fontFamily: "inherit",
              cursor: "pointer",
              border: "none",
              fontSize: "0.9rem",
            }}
          >
            سجّل الآن
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}


import Image from "./image";

<image></image>
 

function StatBlock({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "'Noto Kufi Arabic', sans-serif",
          fontSize: "2.5rem",
          fontWeight: 700,
          color: "#c9a84c",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: "0.5rem",
          fontSize: "0.85rem",
          color: "#b8b0a0",
          letterSpacing: "0.04em",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  const fields = [
    { icon: "✦", title: "القصة القصيرة — الكبار", desc: "لكتّاب القصة القصيرة المصريين الذين يفوق عمرهم خمسة وثلاثين عاماً" },
    { icon: "✦", title: "القصة القصيرة — الشباب", desc: "لكتّاب القصة القصيرة من الشباب المصريين دون سن الخامسة والثلاثين" },
    { icon: "✦", title: "الدراسة النقدية", desc: "لأعمال النقد الأدبي المتعلقة بفن القصة القصيرة العربية والمصرية" },
    { icon: "✦", title: "أفضل مجموعة قصصية", desc: "لأفضل مجموعة قصصية مصرية صادرة خلال العامين السابقين للدورة" },
    { icon: "✦", title: "جائزة الجمهور", desc: "يختار فيها القرّاء مباشرةً العمل الأكثر تأثيراً وتميزاً" },
    { icon: "✦", title: "شخصية ثقافية العام", desc: "تكريم أديب أو ناقد أسهم في إثراء مشهد القصة القصيرة المصرية" },
  ];

  const reasons = [
    {
      num: "١",
      title: "إرث ثقافي متجذر",
      desc: "تأسست الجائزة على قيم الحضارة المصرية العريقة، لتكون منارةً يهتدي بها المبدعون عبر الأجيال.",
    },
    {
      num: "٢",
      title: "اعتراف وطني رفيع",
      desc: "تمنح الجائزة أعلى درجات التكريم الرسمي للمبدعين المصريين، بحضور وزارة الثقافة والمؤسسات الوطنية الكبرى.",
    },
    {
      num: "٣",
      title: "تأثير حقيقي ومستدام",
      desc: "أسهمت الجائزة في إطلاق مسيرات مضيئة لعشرات المبدعين، وتركت أثراً عميقاً في المشهد الثقافي المصري.",
    },
    {
      num: "٤",
      title: "شبكة مبدعين نخبوية",
      desc: "ينضم الفائزون إلى دائرة حصرية من النخب الثقافية المصرية، مما يفتح آفاقاً واسعة من الفرص والتعاون.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#0a0a0a",
        }}
      >
        <img
          src={HERO_IMG}
          alt="مساجد القاهرة التاريخية"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.45,
          }}
        />
        <div
          className="hero-overlay"
          style={{ position: "absolute", inset: 0 }}
        />
        <div
          style={{
            position: "relative",
            textAlign: "center",
            padding: "0 2rem",
            maxWidth: 820,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <img
              src={awardLogo}
              alt="شعار جائزة عبد الفتاح صبري للقصة القصيرة"
              style={{
                width: 110,
                height: 110,
                objectFit: "contain",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                border: "1.5px solid rgba(201,168,76,0.4)",
                padding: 1,
                boxShadow: "0 0 40px rgba(201,168,76,0.12)",
                marginTop:5
              }}
            />
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div style={{ width: 30, height: 1, background: "rgba(201,168,76,0.6)" }} />
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#c9a84c",
                  letterSpacing: "0.2em",
                }}
              >
                الدورة الخامسة — ٢٠٢٦
              </span>
              <div style={{ width: 30, height: 1, background: "rgba(201,168,76,0.6)" }} />
            </div>
          </div>
          <h1
            style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: "clamp(2.2rem, 6vw, 4.2rem)",
              fontWeight: 700,
              color: "#f0ebe0",
              lineHeight: 1.35,
              marginBottom: "1.5rem",
              textShadow: "0 2px 20px rgba(0,0,0,0.6)",
            }}
          >
            حيث تُولد الحكاية
            <br />
            <span style={{ color: "#c9a84c" }}>وتخلد في الذاكرة</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "#c8c0b0",
              lineHeight: 2,
              marginBottom: "2.5rem",
              maxWidth: 560,
              margin: "0 auto 2.5rem",
            }}
          >
            جائزة وطنية مصرية عريقة تُكرّم فن القصة القصيرة وكتّابها المبدعين،
            تحمل اسم الأديب عبد الفتاح صبري إرثاً أدبياً خالداً.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => {
                setPage("register");
                window.scrollTo({ top: 0 });
              }}
              className="btn-primary"
              style={{ fontFamily: "inherit", cursor: "pointer", border: "none", fontSize: "0.95rem" }}
            >
              التسجيل في الجائزة
            </button>
            <button
              onClick={() => {
                setPage("about");
                window.scrollTo({ top: 0 });
              }}
              className="btn-outline"
              style={{ fontFamily: "inherit", cursor: "pointer", background: "none", fontSize: "0.95rem" }}
            >
              اكتشف الجائزة
            </button>
          </div>
        </div>
        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.6,
          }}
        >
          <span style={{marginBlockEnd:-100  ,fontSize: "0.65rem", color: "#c9a84c", letterSpacing: "0.15em" }}>
            انزل للأسفل
          </span>
          <div
            style={{
              marginBlockEnd:-100,  
              width: 1,
              height: 40,
              background: "linear-gradient(to bottom, #c9a84c, transparent)",
            }}
          />
        </div>
      </section>

      {/* Brief intro */}
      <section
        style={{
          background: "#0f0f0f",
          padding: "6rem 2rem",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.75rem", color: "#c9a84c", letterSpacing: "0.2em", marginBottom: "1rem" }}>
              — من نحن —
            </p>
            <h2
              style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 600,
                color: "#f0ebe0",
                lineHeight: 1.4,
                maxWidth: 700,
                margin: "0 auto 1.5rem",
              }}
            >
              جائزة تُجسّد روح القصة المصرية عبر العقود
            </h2>
            <GoldOrnament />
            <p
              style={{
                fontSize: "1rem",
                color: "#b8b0a0",
                lineHeight: 2,
                maxWidth: 680,
                margin: "0 auto",
              }}
            >
              منذ تأسيسها، تقف جائزة عبد الفتاح صبري للقصة القصيرة شامخةً
              كمنارة لفن السرد القصصي في مصر، تحمل اسم أديب استثنائي أثرى
              المكتبة العربية بإبداعه، وتمنح أعمال الكتّاب الاعتراف الذي تستحقه
              أمام المجتمع والتاريخ.
            </p>
          </div>

          {/* Fields grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5px",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.1)",
            }}
          >
            {fields.map((f, i) => (
              <div
                key={i}
                className="award-card"
                style={{
                  background: "#0f0f0f",
                  padding: "2rem 1.75rem",
                  border: "1px solid rgba(201,168,76,0.08)",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "#c9a84c",
                    marginBottom: "0.75rem",
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#f0ebe0",
                    marginBottom: "0.5rem",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#7a7268", lineHeight: 1.8 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          background: "#0c0c0c",
          borderTop: "1px solid rgba(201,168,76,0.12)",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
          padding: "4rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "3rem",
          }}
        >
          <StatBlock value="4" label="دورات ناجحة" />
          <StatBlock value="+٩٠" label="قاصّاً مُكرَّماً" />
          <StatBlock value="+٢٨٠" label="قصة مُقدَّمة" />
          <StatBlock value="3" label="فئات تنافسية" />
        </div>
      </section>

      {/* Why the award */}
      <section
        style={{
          background: "#0f0f0f",
          padding: "7rem 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="ornament-bg"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.6,
          }}
        />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.75rem", color: "#c9a84c", letterSpacing: "0.2em", marginBottom: "1rem" }}>
              — الأثر والقيمة —
            </p>
            <h2
              style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 600,
                color: "#f0ebe0",
              }}
            >
              لماذا الجائزة؟
            </h2>
            <GoldOrnament />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {reasons.map((r, i) => (
              <div
                key={i}
                className="award-card"
                style={{
                  padding: "2.5rem 2rem",
                  border: "1px solid rgba(201,168,76,0.12)",
                  background: "#141414",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "1.5rem",
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    fontSize: "5rem",
                    fontWeight: 800,
                    color: "rgba(201,168,76,0.04)",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {r.num}
                </div>
                <div
                  style={{
                    width: 24,
                    height: 1,
                    background: "#c9a84c",
                    marginBottom: "1.25rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#f0ebe0",
                    marginBottom: "0.75rem",
                  }}
                >
                  {r.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#7a7268", lineHeight: 1.9 }}>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          position: "relative",
          padding: "7rem 2rem",
          textAlign: "center",
          overflow: "hidden",
          background: "#0c0c0c",
        }}
      >
        <img
          src={PATTERN_IMG}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.06,
          }}
        />
        <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              border: "1px solid rgba(201,168,76,0.3)",
              padding: "0.35rem 1.25rem",
              marginBottom: "2rem",
              fontSize: "0.75rem",
              color: "#c9a84c",
              letterSpacing: "0.15em",
            }}
          >
            الدورة الخامسة مفتوحة للتسجيل
          </div>
          <h2
            style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#f0ebe0",
              lineHeight: 1.4,
              marginBottom: "1.5rem",
            }}
          >
            كن جزءاً من الدورة القادمة
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#b8b0a0",
              lineHeight: 1.9,
              marginBottom: "2.5rem",
            }}
          >
            الباب مفتوح أمام كل قاصّ مصري يحمل في قلبه شعلة الحكاية.
            سجّل الآن وأضف قصتك إلى سجل جائزة عبد الفتاح صبري العريق.
          </p>
          <button
            onClick={() => {
              setPage("register");
              window.scrollTo({ top: 0 });
            }}
            className="btn-primary"
            style={{
              fontFamily: "inherit",
              cursor: "pointer",
              border: "none",
              fontSize: "0.95rem",
            }}
          >
            سجّل في الجائزة الآن
          </button>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  const goals = [
    "اكتشاف أصوات قصصية مصرية جديدة وتشجيعها على الاستمرار والنشر",
    "رفع مستوى الاهتمام بفن القصة القصيرة في المشهد الأدبي المصري",
    "تكريم إرث الأديب عبد الفتاح صبري وتخليد مدرسته في السرد",
    "ربط الكتّاب الشباب بالأجيال السابقة لتحقيق تواصل أدبي حقيقي",
    "دعم نشر القصة القصيرة المصرية وتوزيعها عربياً ودولياً",
  ];

  const timeline = [
    { year: "2022", title: "التأسيس", desc: "انطلاق الجائزة بمبادرة من وزارة الثقافة بمشاركة ٢٣٠ مشاركاً في أول دوراتها." },
    { year: "2023", title: "التوسع", desc: "إضافة مجالين جديدين وارتفاع عدد المشاركين إلى أكثر من ٤٠٠ مشارك." },
    { year: "2024", title: "الشراكات الدولية", desc: "توقيع اتفاقيات تعاون مع مؤسسات ثقافية عربية ودولية بارزة." },
    { year: "2025", title: "التميز الإقليمي", desc: "حصول الجائزة على جائزة أفضل مبادرة ثقافية عربية من اتحاد الكتّاب العرب." },
   
  ];

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Page header */}
      <div
        style={{
          background: "#0c0c0c",
          padding: "5rem 2rem 4rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "#c9a84c", letterSpacing: "0.2em", marginBottom: "1rem" }}>
          — تعرف علينا —
        </p>
        <h1
          style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: "#f0ebe0",
            marginBottom: "1.5rem",
          }}
        >
          عن الجائزة
        </h1>
        <GoldOrnament />
      </div>

      {/* History + image */}
      <section
        style={{
          background: "#0f0f0f",
          padding: "6rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          <div>
            <p style={{ fontSize: "0.75rem", color: "#c9a84c", letterSpacing: "0.15em", marginBottom: "1.25rem" }}>
              — السياق التاريخي —
            </p>
            <h2
              style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 600,
                color: "#f0ebe0",
                lineHeight: 1.4,
                marginBottom: "1.75rem",
              }}
            >
              من وحي عبد الفتاح صبري
              <br />
              <span style={{ color: "#c9a84c" }}>إلى أقلام الجيل الجديد</span>
            </h2>
            <div style={{ width: 40, height: 1, background: "#c9a84c", marginBottom: "1.75rem" }} />
            <p
              style={{
                fontSize: "0.95rem",
                color: "#9a9288",
                lineHeight: 2,
                marginBottom: "1.25rem",
              }}
            >
              وُلدت جائزة عبد الفتاح صبري للقصة القصيرة عام 2022 من رؤية جمعت نخبة
              من الأدباء والمثقفين المصريين، إيماناً راسخاً بأن فن القصة القصيرة
              يستحق تكريماً وطنياً حقيقياً على غرار الجوائز العربية الكبرى.
              فكانت الجائزة ثمرةً لحب أدباء كثيرين  عبد الفتاح صبري ومدرسته القصصية.
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#9a9288",
                lineHeight: 2,
              }}
            >
              في كل دورة، تحتفي الجائزة بقصص استثنائية تعكس عمق الوجدان المصري وتنوعه،
              من الحكايات التي تروي الحياة اليومية بعيون شاعرة، إلى تلك التي تغوص في
              أعماق النفس البشرية وتطرح أسئلة الهوية والمصير.
            </p>
          </div>
          <div
            style={{
              position: "relative",
              background: "#141414",
            }}
          >
            <img
              src="/abdelfatah.png"
              alt="مكتبة ثقافية أنيقة"
              style={{
                width: "100%",
                height: 600,
                objectFit: "cover",
                display: "block",
                filter: "grayscale(1%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 60%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 0,
                height: 3,
                background: "linear-gradient(to right, #c9a84c, transparent)",
              }}
            />
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
        `}</style>
      </section>

      {/* Vision + Mission */}
      <section
        style={{
          background: "#0c0c0c",
          borderTop: "1px solid rgba(201,168,76,0.1)",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
          padding: "6rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
          }}
          className="vm-grid"
        >
          <div
            style={{
              padding: "2.5rem",
              border: "1px solid rgba(201,168,76,0.15)",
              background: "#111111",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 60,
                height: 3,
                background: "#c9a84c",
              }}
            />
            <p style={{ fontSize: "0.7rem", color: "#c9a84c", letterSpacing: "0.2em", marginBottom: "1.25rem" }}>
              الرؤية
            </p>
            <h3
              style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "#f0ebe0",
                lineHeight: 1.5,
                marginBottom: "1rem",
              }}
            >
              أن تتصدر القصة القصيرة المصرية المشهد الأدبي العربي
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#7a7268", lineHeight: 2 }}>
              نسعى إلى أن تنال القصة القصيرة المصرية مكانتها اللائقة في المشهد الأدبي
              العربي، وأن يصل صوت كتّابها إلى القرّاء في أرجاء الوطن العربي وما وراءه.
            </p>
          </div>
          <div
            style={{
              padding: "2.5rem",
              border: "1px solid rgba(201,168,76,0.15)",
              background: "#111111",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 60,
                height: 3,
                background: "rgba(201,168,76,0.4)",
              }}
            />
            <p style={{ fontSize: "0.7rem", color: "#c9a84c", letterSpacing: "0.2em", marginBottom: "1.25rem" }}>
              الرسالة
            </p>
            <h3
              style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "#f0ebe0",
                lineHeight: 1.5,
                marginBottom: "1rem",
              }}
            >
              تكريم الإرث القصصي وتمكين الأصوات الجديدة
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#7a7268", lineHeight: 2 }}>
              تلتزم الجائزة بتقدير كل قصة أصيلة تحمل نبض الإنسان المصري، وتشجيع
              الكتّاب الشباب على السير في درب عبد الفتاح صبري وأقران جيله العظيم.
            </p>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .vm-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }
        `}</style>
      </section>

      {/* Goals */}
      <section style={{ background: "#0f0f0f", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.75rem", color: "#c9a84c", letterSpacing: "0.2em", marginBottom: "1rem" }}>
              — ما نسعى إليه —
            </p>
            <h2
              style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 600,
                color: "#f0ebe0",
              }}
            >
              أهداف الجائزة
            </h2>
            <GoldOrnament />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {goals.map((g, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.25rem",
                  padding: "1.25rem 1.5rem",
                  background: "#141414",
                  border: "1px solid rgba(201,168,76,0.08)",
                  transition: "border-color 0.3s",
                }}
                className="award-card"
              >
                <div
                  style={{
                    minWidth: 6,
                    height: 6,
                    background: "#c9a84c",
                    transform: "rotate(45deg)",
                    marginTop: "0.45rem",
                  }}
                />
                <p style={{ fontSize: "0.9rem", color: "#b8b0a0", lineHeight: 1.8 }}>{g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        style={{
          background: "#0c0c0c",
          padding: "6rem 2rem",
          borderTop: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.75rem", color: "#c9a84c", letterSpacing: "0.2em", marginBottom: "1rem" }}>
              — المسيرة —
            </p>
            <h2
              style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 600,
                color: "#f0ebe0",
              }}
            >
              تطور الجائزة عبر السنوات
            </h2>
            <GoldOrnament />
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: "50%",
                width: 1,
                background: "rgba(201,168,76,0.2)",
                transform: "translateX(50%)",
              }}
              className="timeline-line"
            />
            {timeline.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: i % 2 === 0 ? "flex-end" : "flex-start",
                  marginBottom: "2.5rem",
                  position: "relative",
                }}
                className="timeline-item"
              >
                <div
                  style={{
                    position: "absolute",
                    right: "50%",
                    top: "1.25rem",
                    //transform: "translate(50%, -50%)",
                    width: 10,
                    height: 10,
                    background: "#c9a84c",
                    transform: "translateX(50%) rotate(45deg)",
                    zIndex: 2,
                  }}
                />
                <div
                  style={{
                    maxWidth: "44%",
                    padding: "1.5rem",
                    border: "1px solid rgba(201,168,76,0.12)",
                    background: "#141414",
                    marginLeft: i % 2 === 0 ? 0 : "6%",
                    marginRight: i % 2 === 0 ? "6%" : 0,
                  }}
                  className="award-card"
                >
                  <div
                    style={{
                      fontFamily: "'Noto Kufi Arabic', sans-serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#c9a84c",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {t.year}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#f0ebe0",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {t.title}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "#7a7268", lineHeight: 1.8 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .timeline-line { display: none; }
            .timeline-item { justify-content: flex-start !important; }
            .timeline-item > div:last-child { max-width: 100% !important; margin: 0 !important; }
          }
        `}</style>
      </section>
    </div>
  );
}

function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", governorate: "",
    field: "", bio: "", workTitle: "", workDesc: "", agree: false,
  });

  const fields = [
    "القصة القصيرة — فئة الكبار (٣٥ سنة فأكثر)",
    "القصة القصيرة — فئة الشباب (أقل من ٣٥ سنة)",
    "الدراسة النقدية في القصة القصيرة",
    "أفضل مجموعة قصصية",
    "جائزة الجمهور",
  ];

  const governorates = [
    "القاهرة", "الجيزة", "الإسكندرية", "الأقصر", "أسوان", "المنيا",
    "بني سويف", "الفيوم", "سوهاج", "قنا", "أسيوط", "الدقهلية",
    "الغربية", "المنوفية", "كفر الشيخ", "الشرقية", "الإسماعيلية",
    "بورسعيد", "السويس", "شمال سيناء", "جنوب سيناء", "البحر الأحمر",
    "مطروح", "الوادي الجديد", "دمياط", "البحيرة", "مصريو الخارج",
  ];

  const inputStyle = {
    width: "100%",
    background: "#111111",
    border: "1px solid rgba(201,168,76,0.18)",
    color: "#f0ebe0",
    padding: "0.875rem 1rem",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.25s",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.8rem",
    color: "#b8b0a0",
    marginBottom: "0.5rem",
    letterSpacing: "0.03em",
  };

  if (submitted) {
    return (
      <div
        style={{
          paddingTop: 72,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0c0c",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 500, padding: "2rem" }}>
          <div
            style={{
              width: 64,
              height: 64,
              border: "1.5px solid #c9a84c",
              margin: "0 auto 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(45deg)",
            }}
          >
            <div style={{ transform: "rotate(-45deg)", fontSize: "1.5rem", color: "#c9a84c" }}>✓</div>
          </div>
          <h2
            style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#f0ebe0",
              marginBottom: "1rem",
            }}
          >
            تم إرسال طلبك بنجاح
          </h2>
          <GoldOrnament />
          <p style={{ fontSize: "0.95rem", color: "#9a9288", lineHeight: 1.9, marginBottom: "2rem" }}>
            شكراً لتسجيلك في جائزة عبد الفتاح صبري. سيتم مراجعة طلبك من قِبَل لجنة التحكيم
            والتواصل معك خلال أسبوعين من تاريخ الإغلاق.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-outline"
            style={{ fontFamily: "inherit", cursor: "pointer", background: "none", fontSize: "0.9rem" }}
          >
            العودة إلى نموذج التسجيل
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 72 }}>
      <div
        style={{
          background: "#0c0c0c",
          padding: "5rem 2rem 4rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "#c9a84c", letterSpacing: "0.2em", marginBottom: "1rem" }}>
          — الدورة الخامسة — ٢٠٢٦ —
        </p>
        <h1
          style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            color: "#f0ebe0",
            marginBottom: "1.5rem",
          }}
        >
          التسجيل في الجائزة
        </h1>
        <GoldOrnament />
        <p style={{ fontSize: "0.95rem", color: "#9a9288", maxWidth: 580, margin: "0 auto", lineHeight: 1.9 }}>
          أكمل النموذج أدناه بدقة. ستُعقد جلسات التحكيم في أكتوبر ٢٠٢٦، ويُعلن الفائزون
          في حفل رسمي بدار الأوبرا المصرية في ديسمبر ٢٠٢٦.
        </p>
      </div>

      <section style={{ background: "#0f0f0f", padding: "5rem 2rem" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: "4rem",
            alignItems: "start",
          }}
          className="reg-grid"
        >
          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
                marginBottom: "1.5rem",
              }}
              className="form-half-grid"
            >
              <div>
                <label style={labelStyle}>الاسم الكامل *</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  placeholder="الاسم الرباعي"
                />
              </div>
              <div>
                <label style={labelStyle}>البريد الإلكتروني *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  placeholder="name@email.com"
                />
              </div>
              <div>
                <label style={labelStyle}>رقم الهاتف *</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={inputStyle}
                  placeholder="01XXXXXXXXX"
                />
              </div>
              <div>
                <label style={labelStyle}>المحافظة *</label>
                <select
                  required
                  value={form.governorate}
                  onChange={(e) => setForm({ ...form, governorate: e.target.value })}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="">اختر المحافظة</option>
                  {governorates.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={labelStyle}>مجال المشاركة *</label>
              <select
                required
                value={form.field}
                onChange={(e) => setForm({ ...form, field: e.target.value })}
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                <option value="">اختر المجال</option>
                {fields.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={labelStyle}>نبذة عن تجربتك القصصية *</label>
              <textarea
                required
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
                style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
                placeholder="اكتب نبذة مختصرة عن نفسك ومسيرتك في كتابة القصة القصيرة وأبرز ما نشرت..."
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={labelStyle}>عنوان العمل المرشَّح *</label>
              <input
                required
                type="text"
                value={form.workTitle}
                onChange={(e) => setForm({ ...form, workTitle: e.target.value })}
                style={inputStyle}
                placeholder="عنوان العمل أو المشروع"
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={labelStyle}>وصف العمل *</label>
              <textarea
                required
                value={form.workDesc}
                onChange={(e) => setForm({ ...form, workDesc: e.target.value })}
                style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
                placeholder="قدّم وصفاً تفصيلياً للعمل، وأهميته وقيمته الثقافية..."
              />
            </div>

            <div
              style={{
                border: "1px dashed rgba(201,168,76,0.25)",
                padding: "2rem",
                textAlign: "center",
                marginBottom: "1.5rem",
                cursor: "pointer",
                background: "#111",
              }}
            >
              <div style={{ fontSize: "1.5rem", color: "rgba(201,168,76,0.5)", marginBottom: "0.5rem" }}>
                ⬆
              </div>
              <p style={{ fontSize: "0.85rem", color: "#7a7268" }}>
                اضغط لرفع ملفات العمل (PDF, JPG, MP3)
              </p>
              <p style={{ fontSize: "0.75rem", color: "rgba(201,168,76,0.5)", marginTop: "0.35rem" }}>
                الحد الأقصى: 50 ميجابايت
              </p>
            </div>

            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                cursor: "pointer",
                marginBottom: "2rem",
              }}
            >
              <input
                type="checkbox"
                required
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                style={{
                  marginTop: "0.2rem",
                  accentColor: "#c9a84c",
                  width: 16,
                  height: 16,
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "0.85rem", color: "#9a9288", lineHeight: 1.7 }}>
                أقر بصحة المعلومات المقدمة وأوافق على{" "}
                <span style={{ color: "#c9a84c", cursor: "pointer" }}>
                  الشروط والأحكام
                </span>{" "}
                الخاصة بجائزة عبد الفتاح صبري، وأفوّض اللجنة باستخدام بياناتي لأغراض التقييم.
              </span>
            </label>

            <button
              type="submit"
              className="btn-primary"
              style={{
                width: "100%",
                fontFamily: "inherit",
                cursor: "pointer",
                border: "none",
                fontSize: "1rem",
                padding: "1rem",
              }}
            >
              إرسال طلب التسجيل
            </button>
          </form>

          {/* Sidebar info */}
          <div style={{ position: "sticky", top: 90 }}>
            <div
              style={{
                border: "1px solid rgba(201,168,76,0.2)",
                background: "#141414",
                padding: "2rem",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  height: 3,
                  background: "linear-gradient(to left, #c9a84c, transparent)",
                }}
              />
              <h3
                style={{
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#c9a84c",
                  marginBottom: "1.5rem",
                }}
              >
                قبل التسجيل
              </h3>

              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "0.8rem", color: "#f0ebe0", fontWeight: 600, marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
                  شروط المشاركة
                </h4>
                {[
                  "أن يكون المتقدم مصري الجنسية",
                  "ألا يقل عمره عن ٢٠ عاماً",
                  "أن يكون العمل أصيلاً غير منشور بجائزة أخرى",
                  "أن يكون العمل أُنجز خلال السنوات الخمس الأخيرة",
                ].map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.6rem", marginBottom: "0.5rem" }}>
                    <div
                      style={{
                        minWidth: 5,
                        height: 5,
                        background: "#c9a84c",
                        transform: "rotate(45deg)",
                        marginTop: "0.4rem",
                      }}
                    />
                    <p style={{ fontSize: "0.82rem", color: "#7a7268", lineHeight: 1.7 }}>{s}</p>
                  </div>
                ))}
              </div>

              <GoldDivider className="my-4" />

              <div style={{ marginBottom: "1.5rem", marginTop: "1.5rem" }}>
                <h4 style={{ fontSize: "0.8rem", color: "#f0ebe0", fontWeight: 600, marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
                  المستندات المطلوبة
                </h4>
                {[
                  "صورة من بطاقة الهوية الوطنية",
                  "ملف العمل بالصيغ المطلوبة",
                  "السيرة الذاتية الإبداعية",
                  "خطاب توصية (اختياري)",
                ].map((d, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.6rem", marginBottom: "0.5rem" }}>
                    <div
                      style={{
                        minWidth: 5,
                        height: 5,
                        background: "rgba(201,168,76,0.5)",
                        transform: "rotate(45deg)",
                        marginTop: "0.4rem",
                      }}
                    />
                    <p style={{ fontSize: "0.82rem", color: "#7a7268", lineHeight: 1.7 }}>{d}</p>
                  </div>
                ))}
              </div>

              <GoldDivider className="my-4" />

              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ fontSize: "0.8rem", color: "#f0ebe0", fontWeight: 600, marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
                  المواعيد المهمة
                </h4>
                <div
                  style={{
                    background: "rgba(201,168,76,0.05)",
                    border: "1px solid rgba(201,168,76,0.12)",
                    padding: "1rem",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                    <span style={{ fontSize: "0.78rem", color: "#7a7268" }}>آخر موعد للتسجيل</span>
                    <span style={{ fontSize: "0.78rem", color: "#c9a84c", fontWeight: 600 }}>١ سبتمبر ٢٠٢٦</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                    <span style={{ fontSize: "0.78rem", color: "#7a7268" }}>جلسات التحكيم</span>
                    <span style={{ fontSize: "0.78rem", color: "#c9a84c", fontWeight: 600 }}>أكتوبر ٢٠٢٦</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.78rem", color: "#7a7268" }}>حفل التكريم</span>
                    <span style={{ fontSize: "0.78rem", color: "#c9a84c", fontWeight: 600 }}>ديسمبر ٢٠٢٦</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .reg-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 600px) {
            .form-half-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </div>
  );
}

function EditionsPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const editions = [
   
    {
      num: "الرابعة",
      year: "2025",
      img: EDITION_IMGS[2],
      desc: "حصلت الجائزة في دورتها الرابعة على اعتراف اتحاد الكتّاب العرب بوصفها من أبرز جوائز القصة القصيرة في العالم العربي.",
      winners: ["سوسن بدر الدين — قصة قصيرة/كبار", "طارق حجاج — قصة قصيرة/شباب", "رانيا مصطفى — مجموعة قصصية"],
      fields: ["الكبار", "الشباب", "المجموعة القصصية"],
    },
    {
      num: "الثالثة",
      year: "2024",
      img: EDITION_IMGS[3],
      desc: "أثبتت الدورة الثالثة صمود الجائزة في أوقات الأزمات، إذ أُقيمت بنسخة هجينة وحضور محدود حرصاً على استمرارية التكريم.",
      winners: ["محمد عبد النبي — قصة قصيرة/كبار", "ندى موسى — قصة قصيرة/شباب", "عمرو درويش — نقد أدبي"],
      fields: ["الكبار", "الشباب", "النقد"],
    },
    {
      num: "الثانية",
      year: "2023",
      img: EDITION_IMGS[4],
      desc: "شهدت الدورة الثانية توسعاً ملحوظاً بإضافة فئة أفضل مجموعة قصصية وفئة الدراسة النقدية، وارتفع عدد المشاركين إلى ٣٨٠ قاصّاً.",
      winners: ["منى الصاوي — قصة قصيرة/كبار", "حسام عبد الحميد — قصة قصيرة/شباب", "نهى الشريف — مجموعة قصصية"],
      fields: ["الكبار", "الشباب", "المجموعة القصصية"],
    },
    {
      num: "الأولى",
      year: "2022",
      img: EDITION_IMGS[5],
      desc: "الانطلاقة التأسيسية للجائزة بمشاركة ٢٣٠ قاصّاً من ١٨ محافظة، وكانت الشرارة التي أعادت الاعتبار لفن القصة القصيرة المصرية.",
      winners: ["إبراهيم الجعفري — قصة قصيرة/كبار", "سامية رشاد — قصة قصيرة/شباب", "د. فاطمة الزهراء — نقد"],
      fields: ["الكبار", "الشباب", "النقد الأدبي"],
    },
  ];

  return (
    <div style={{ paddingTop: 72 }}>
      <div
        style={{
          background: "#0c0c0c",
          padding: "5rem 2rem 4rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "#c9a84c", letterSpacing: "0.2em", marginBottom: "1rem" }}>
          — الأرشيف —
        </p>
        <h1
          style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            color: "#f0ebe0",
            marginBottom: "1.5rem",
          }}
        >
          الدورات السابقة
        </h1>
        <GoldOrnament />
        <p style={{ fontSize: "0.95rem", color: "#9a9288", maxWidth: 560, margin: "0 auto", lineHeight: 1.9 }}>
          ست دورات من الإبداع والتميز، تروي قصة الإبداع المصري في أجمل تجلياته.
        </p>
      </div>

      <section
        style={{
          background: "#0f0f0f",
          padding: "5rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2px",
            background: "rgba(201,168,76,0.08)",
          }}
        >
          {editions.map((ed, i) => (
            <div
              key={i}
              className="edition-card"
              style={{
                background: "#0f0f0f",
                border: "1px solid rgba(201,168,76,0.08)",
                cursor: "pointer",
                overflow: "hidden",
              }}
              onClick={() => setSelected(selected === i ? null : i)}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={ed.img}
                  alt={`الدورة ${ed.num}`}
                  style={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    display: "block",
                    filter: "grayscale(60%) brightness(0.7)",
                    transition: "filter 0.4s, transform 0.4s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.filter = "grayscale(20%) brightness(0.85)";
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.filter = "grayscale(60%) brightness(0.7)";
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: 2,
                    background: "linear-gradient(to right, #c9a84c, transparent)",
                    opacity: 0.6,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "rgba(12,12,12,0.85)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.75rem",
                    color: "#c9a84c",
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {ed.year}
                </div>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3
                  className="edition-year"
                  style={{
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#f0ebe0",
                    marginBottom: "0.75rem",
                    transition: "color 0.3s",
                  }}
                >
                  الدورة {ed.num}
                </h3>
                <p style={{ fontSize: "0.83rem", color: "#6a6258", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  {ed.desc}
                </p>

                {selected === i && (
                  <div
                    style={{
                      borderTop: "1px solid rgba(201,168,76,0.12)",
                      paddingTop: "1.25rem",
                    }}
                  >
                    <h4 style={{ fontSize: "0.75rem", color: "#c9a84c", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                      الفائزون
                    </h4>
                    {ed.winners.map((w, j) => (
                      <div
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          marginBottom: "0.4rem",
                        }}
                      >
                        <div
                          style={{
                            width: 4,
                            height: 4,
                            background: "#c9a84c",
                            transform: "rotate(45deg)",
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontSize: "0.82rem", color: "#b8b0a0" }}>{w}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {ed.fields.map((f, j) => (
                        <span
                          key={j}
                          style={{
                            fontSize: "0.7rem",
                            color: "#c9a84c",
                            border: "1px solid rgba(201,168,76,0.25)",
                            padding: "0.2rem 0.6rem",
                            background: "rgba(201,168,76,0.04)",
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  style={{
                    marginTop: "1rem",
                    fontSize: "0.8rem",
                    color: "#c9a84c",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  {selected === i ? "إخفاء التفاصيل" : "عرض التفاصيل"}
                  <span style={{ fontSize: "0.65rem" }}>{selected === i ? "▲" : "▼"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState({ name: "", email: "", subject: "", body: "" });

  const inputStyle = {
    width: "100%",
    background: "#111111",
    border: "1px solid rgba(201,168,76,0.18)",
    color: "#f0ebe0",
    padding: "0.875rem 1rem",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.25s",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.8rem",
    color: "#b8b0a0",
    marginBottom: "0.5rem",
    letterSpacing: "0.03em",
  };

  const contacts = [
    { icon: "📍", label: "العنوان", value: "٢ ميدان الأوبرا، الجزيرة، القاهرة ١١٥١٨، مصر" },
    { icon: "📞", label: "الهاتف", value: "+٢٠٢ ٢٧٣٦ ٧٩٠٠" },
    { icon: "✉️", label: "البريد الإلكتروني", value: "info@egypt-cultural-award.gov.eg" },
    { icon: "🕐", label: "مواعيد التواصل", value: "الأحد – الخميس: ٩ ص – ٤ م" },
  ];

  return (
    <div style={{ paddingTop: 72 }}>
      <div
        style={{
          background: "#0c0c0c",
          padding: "5rem 2rem 4rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "#c9a84c", letterSpacing: "0.2em", marginBottom: "1rem" }}>
          — نحن هنا —
        </p>
        <h1
          style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            color: "#f0ebe0",
            marginBottom: "1.5rem",
          }}
        >
          تواصل معنا
        </h1>
        <GoldOrnament />
      </div>

      <section style={{ background: "#0f0f0f", padding: "6rem 2rem" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Info */}
          <div>
            <h2
              style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "#f0ebe0",
                marginBottom: "2rem",
              }}
            >
              معلومات التواصل
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
              {contacts.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      border: "1px solid rgba(201,168,76,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "1rem",
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#c9a84c", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>
                      {c.label}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#b8b0a0", lineHeight: 1.6 }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <GoldDivider />

            <div style={{ marginTop: "2rem" }}>
              <h3 style={{ fontSize: "0.85rem", color: "#f0ebe0", fontWeight: 600, marginBottom: "1rem", letterSpacing: "0.05em" }}>
                تابعنا على
              </h3>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {["𝕏", "f", "in", "yt"].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      width: 38,
                      height: 38,
                      border: "1px solid rgba(201,168,76,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8rem",
                      color: "#c9a84c",
                      cursor: "pointer",
                      transition: "background 0.25s, border-color 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(201,168,76,0.1)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "transparent";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.2)";
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            {sent ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem",
                  border: "1px solid rgba(201,168,76,0.2)",
                  background: "#141414",
                }}
              >
                <div style={{ fontSize: "2rem", color: "#c9a84c", marginBottom: "1rem" }}>✓</div>
                <h3
                  style={{
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    fontSize: "1.2rem",
                    color: "#f0ebe0",
                    marginBottom: "0.75rem",
                  }}
                >
                  تم إرسال رسالتك
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#7a7268", lineHeight: 1.8 }}>
                  سنرد عليك خلال يومَي عمل. شكراً لتواصلك مع جائزة عبد الفتاح صبري.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-outline"
                  style={{ marginTop: "1.5rem", fontFamily: "inherit", cursor: "pointer", background: "none", fontSize: "0.85rem" }}
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "#f0ebe0",
                    marginBottom: "2rem",
                  }}
                >
                  أرسل رسالة
                </h2>
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }}
                  className="form-half-grid"
                >
                  <div>
                    <label style={labelStyle}>الاسم *</label>
                    <input
                      required
                      type="text"
                      value={msg.name}
                      onChange={(e) => setMsg({ ...msg, name: e.target.value })}
                      style={inputStyle}
                      placeholder="اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>البريد الإلكتروني *</label>
                    <input
                      required
                      type="email"
                      value={msg.email}
                      onChange={(e) => setMsg({ ...msg, email: e.target.value })}
                      style={inputStyle}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={labelStyle}>الموضوع *</label>
                  <input
                    required
                    type="text"
                    value={msg.subject}
                    onChange={(e) => setMsg({ ...msg, subject: e.target.value })}
                    style={inputStyle}
                    placeholder="موضوع الرسالة"
                  />
                </div>
                <div style={{ marginBottom: "1.75rem" }}>
                  <label style={labelStyle}>الرسالة *</label>
                  <textarea
                    required
                    value={msg.body}
                    onChange={(e) => setMsg({ ...msg, body: e.target.value })}
                    style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: "100%",
                    fontFamily: "inherit",
                    cursor: "pointer",
                    border: "none",
                    fontSize: "0.95rem",
                    padding: "1rem",
                  }}
                >
                  إرسال الرسالة
                </button>
              </form>
            )}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
          @media (max-width: 600px) {
            .form-half-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </div>
  );
}

function Footer({ setPage }: { setPage: (p: Page) => void }) {
  const nav = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0 });
  };

  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      {/* Gold top line */}
      <div style={{ height: 2, background: "linear-gradient(to right, transparent, #c9a84c, transparent)" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 2rem 2.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "4rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.25rem" }}>
              <img
                src={awardLogo}
                alt="شعار جائزة عبد الفتاح صبري للقصة القصيرة"
                style={{
                  width: 44,
                  height: 44,
                  objectFit: "contain",
                  borderRadius: "50%",
                  border: "1px solid rgba(201,168,76,0.2)",
                  padding: 2,
                  background: "rgba(255,255,255,0.03)",
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#c9a84c",
                    lineHeight: 1.3,
                  }}
                >
                  جائزة عبد الفتاح صبري               </div>
                <div style={{ fontSize: "0.68rem", color: "#4a4840" }}>
                  للقصة القصيرة
                </div>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#5a5248", lineHeight: 1.9, maxWidth: 360, marginBottom: "1.5rem" }}>
              جائزة وطنية تُكرّم فن القصة القصيرة المصرية وكتّابها المبدعين،
              تحمل اسم الأديب  عبد الفتاح صبري إرثاً سردياً خالداً.
            </p>
            <p style={{ fontSize: "0.75rem", color: "#3a3830", letterSpacing: "0.08em" }}>
              تابع الجائزة الرسمية على وسائل التواصل الاجتماعي
            </p>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
              {["𝕏", "f", "in", "yt"].map((s, i) => (
                <div
                  key={i}
                  style={{
                    width: 32,
                    height: 32,
                    border: "1px solid rgba(201,168,76,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.72rem",
                    color: "rgba(201,168,76,0.5)",
                    cursor: "pointer",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.color = "#c9a84c";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.color = "rgba(201,168,76,0.5)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.12)";
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                color: "#c9a84c",
                letterSpacing: "0.15em",
                marginBottom: "1.25rem",
                fontWeight: 600,
              }}
            >
              الصفحات
            </h4>
            {(
              [
                ["الرئيسية", "home"],
                ["عن الجائزة", "about"],
                ["التسجيل", "register"],
                ["الدورات السابقة", "editions"],
                ["للتواصل", "contact"],
              ] as [string, Page][]
            ).map(([label, page]) => (
              <button
                key={page}
                onClick={() => nav(page)}
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  color: "#5a5248",
                  marginBottom: "0.6rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  padding: 0,
                  textAlign: "right",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#c9a84c")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#5a5248")}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                color: "#c9a84c",
                letterSpacing: "0.15em",
                marginBottom: "1.25rem",
                fontWeight: 600,
              }}
            >
              التواصل
            </h4>
            <p style={{ fontSize: "0.82rem", color: "#5a5248", lineHeight: 1.8, marginBottom: "0.6rem" }}>
              ٢ ميدان الأوبرا، الجزيرة
              <br />
              القاهرة ١١٥١٨، مصر
            </p>
            <p style={{ fontSize: "0.82rem", color: "#5a5248", marginBottom: "0.4rem" }}>
              +٢٠٢ ٢٧٣٦ ٧٩٠٠
            </p>
            <p style={{ fontSize: "0.82rem", color: "#5a5248" }}>
              info@egypt-cultural-award.gov.eg
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(201,168,76,0.08)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "#3a3830" }}>
            © ٢٠٢٦ جائزة عبد الفتاح صبري للقصة القصيرة — جميع الحقوق محفوظة
          </p>
          <p style={{ fontSize: "0.72rem", color: "#2a2820", letterSpacing: "0.05em" }}>
            تحت إشراف وزارة الثقافة المصرية
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0c0c0c",
        fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
        direction: "rtl",
      }}
    >
      <Navbar currentPage={page} setPage={setPage} />
      <main>
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "about" && <AboutPage />}
        {page === "register" && <RegisterPage />}
        {page === "editions" && <EditionsPage />}
        {page === "contact" && <ContactPage />}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}
