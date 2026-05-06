* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, sans-serif;
  background: #f4f7fb;
  color: #222;
  line-height: 1.6;
}

/* HEADER */
.site-header {
  background: #062b5f;
  color: white;
  padding: 18px 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 4px solid #d4af37;
}

.brand {
  line-height: 1.1;
}

.brand-main {
  display: block;
  font-size: 24px;
  font-weight: bold;
  color: #d4af37;
  letter-spacing: 1px;
}

.brand-sub {
  display: block;
  font-size: 13px;
  color: white;
  letter-spacing: 3px;
}

nav a {
  color: white;
  text-decoration: none;
  margin-left: 18px;
  font-weight: bold;
  font-size: 15px;
}

nav a:hover {
  color: #d4af37;
}

/* HERO */
.hero {
  min-height: 85vh;
  background: linear-gradient(rgba(6, 43, 95, 0.88), rgba(6, 43, 95, 0.88)),
              url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80");
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  align-items: center;
  padding: 80px 8%;
}

.hero-content {
  max-width: 850px;
  animation: slideIn 1.2s ease forwards;
}

.tagline {
  color: #d4af37;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 12px;
}

.hero h1 {
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 20px;
}

.hero p {
  font-size: 19px;
  max-width: 760px;
}

.hero-buttons {
  margin-top: 30px;
}

.btn {
  display: inline-block;
  padding: 14px 26px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  margin-right: 12px;
}

.gold {
  background: #d4af37;
  color: #062b5f;
}

.outline {
  border: 2px solid #d4af37;
  color: white;
}

/* SECTIONS */
.section {
  padding: 75px 8%;
}

.section h2 {
  font-size: 36px;
  color: #062b5f;
  margin-bottom: 18px;
  border-left: 6px solid #d4af37;
  padding-left: 14px;
}

.section p {
  font-size: 18px;
  max-width: 1050px;
}

.dark {
  background: #062b5f;
  color: white;
}

.dark h2 {
  color: white;
}

.section-intro {
  margin-bottom: 25px;
}

/* SERVICES */
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 30px;
}

.service-card {
  background: white;
  color: #222;
  padding: 28px;
  border-radius: 14px;
  border-top: 5px solid #d4af37;
  box-shadow: 0 10px 25px rgba(0,0,0,0.18);
  cursor: pointer;
  transition: 0.3s;
  opacity: 0;
  transform: translateY(45px);
}

.service-card.show {
  opacity: 1;
  transform: translateY(0);
}

.service-card:hover {
  transform: translateY(-8px);
  background: #fff8df;
}

.service-card h3 {
  color: #062b5f;
  margin-bottom: 12px;
}

.service-details {
  margin-top: 35px;
  background: white;
  color: #222;
  padding: 30px;
  border-radius: 14px;
  border-left: 6px solid #d4af37;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.service-details h3 {
  color: #062b5f;
  margin-bottom: 12px;
}

.service-details ul {
  margin-top: 15px;
  margin-left: 22px;
}

.service-details li {
  margin-bottom: 8px;
}

/* PAYMENTS */
.payment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 30px;
}

.payment-card {
  background: white;
  padding: 28px;
  border-radius: 14px;
  border-top: 5px solid #d4af37;
  box-shadow: 0 8px 22px rgba(0,0,0,0.1);
}

.payment-card h3 {
  color: #062b5f;
  margin-bottom: 12px;
}

.small-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 10px 18px;
  background: #062b5f;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

/* CONTACT */
.contact-section {
  background: #eaf0f8;
}

.contact-box {
  background: white;
  padding: 30px;
  max-width: 650px;
  border-radius: 14px;
  border-left: 6px solid #d4af37;
  box-shadow: 0 8px 22px rgba(0,0,0,0.1);
  margin-top: 25px;
}

.contact-box p {
  margin-bottom: 10px;
}

/* FOOTER */
footer {
  background: #062b5f;
  color: white;
  text-align: center;
  padding: 25px;
}

/* WHATSAPP FLOAT */
.whatsapp-float {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: #25d366;
  color: white;
  padding: 14px 20px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 6px 16px rgba(0,0,0,0.25);
}

/* ANIMATION */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* MOBILE */
@media (max-width: 768px) {
  .site-header {
    display: block;
    text-align: center;
  }

  nav {
    margin-top: 15px;
  }

  nav a {
    display: block;
    margin: 10px 0;
  }

  .hero h1 {
    font-size: 34px;
  }

  .hero p {
    font-size: 16px;
  }

  .btn {
    display: block;
    margin-bottom: 12px;
    text-align: center;
  }
}
