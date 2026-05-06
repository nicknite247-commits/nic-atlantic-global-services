document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".fly-card");

  cards.forEach(function (card, index) {
    setTimeout(function () {
      card.classList.add("show");
    }, index * 300);
  });
});

function openService(service) {
  const details = document.getElementById("service-details");

  const services = {
    hse: `
      <h3>HSE Consulting</h3>
      <p>
        We provide practical Health, Safety and Environment support to help companies
        protect people, assets, operations and reputation.
      </p>
      <ul>
        <li>HSE audits and workplace inspections</li>
        <li>Risk assessments and method statement reviews</li>
        <li>ISO 45001 and ISO 14001 management system support</li>
        <li>Emergency response planning and drills</li>
        <li>HSE training and toolbox talk support</li>
      </ul>
    `,

    procurement: `
      <h3>Procurement & Supply</h3>
      <p>
        We support clients with reliable sourcing and supply of quality materials
        needed for safe and efficient business operations.
      </p>
      <ul>
        <li>Personal Protective Equipment</li>
        <li>HSE equipment and safety tools</li>
        <li>Vehicles and operational support items</li>
        <li>Office supplies and business materials</li>
        <li>Vendor sourcing and procurement coordination</li>
      </ul>
    `,

    realestate: `
      <h3>Real Estate Services</h3>
      <p>
        We assist clients with real estate sourcing, property facilitation and
        practical support for land and property-related interests.
      </p>
      <ul>
        <li>Property search and client support</li>
        <li>Land and building facilitation</li>
        <li>Real estate investment support</li>
        <li>Buyer and seller coordination</li>
        <li>Property documentation assistance</li>
      </ul>
    `,

    recruitment: `
      <h3>HSE Recruitment</h3>
      <p>
        We help companies identify and connect with competent HSE personnel for
        projects, operations and short-term assignments.
      </p>
      <ul>
        <li>HSE officers</li>
        <li>HSE supervisors</li>
        <li>Safety watch personnel</li>
        <li>Permit-to-work support personnel</li>
        <li>Project HSE advisors</li>
      </ul>
    `
  };

  details.innerHTML = services[service];
  details.scrollIntoView({ behavior: "smooth", block: "center" });
}
