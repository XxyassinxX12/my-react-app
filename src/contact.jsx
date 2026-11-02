export default function Contact() {
  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ color: "#00573f", fontSize: "40px", marginBottom: "40px" }}>
        Contact
      </h1>

      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          textAlign: "left",
          lineHeight: "2",
        }}
      >
        <p>
          📧 <strong>Email:</strong>{" "}
          <a href="mailto:contact@lacoste.com">contact@lacoste.com</a>
        </p>
        <p>
          📞 <strong>Téléphone:</strong>{" "}
          <a href="tel:+212600000000">+212 6 22 31 75 58</a>
        </p>
        <p>
          📠 <strong>Fax:</strong> +212 5 28 93 52 12
        </p>
        <p>
          📍 <strong>Adresse:</strong> ISTA ASSAKA TIKOUINE
        </p>
      </div>
    </section>
  );
}