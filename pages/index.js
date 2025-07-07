export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px' }}>
      <h1>Spartan Property Management</h1>
      <p>
        We manage multi-family and single-family homes throughout Fort Worth and the surrounding metroplex.
      </p>

      <h2>Granada Gables Apartments</h2>
      <p>2000–2004 Forest Park Blvd, Fort Worth, TX 76110</p>
      <ul>
        <li>860 sqft – $1,600/month</li>
        <li>1080 sqft – $1,800/month</li>
        <li>Includes 1 covered parking w/ storage, water, gas, trash, and recycling</li>
        <li>Free secure laundry (keypad access)</li>
      </ul>

      <h2>Apply Now</h2>
      <p>
        Each adult must submit a rental application and pay the $50 fee via Zelle:
        <br />
        <strong>Zelle:</strong> 817-201-7304 (Josh Blackmon)
      </p>
      <a href="/rental-application" style={{ textDecoration: 'underline', color: 'blue' }}>
        Rental Application
      </a>

      <h2>Contact Us</h2>
      <p>
        Email: <a href="mailto:info@txspartan.com">info@txspartan.com</a><br />
        Repairs: <a href="mailto:repairs@txspartan.com">repairs@txspartan.com</a><br />
        Phone: 817-201-7304
      </p>
    </div>
  );
}
