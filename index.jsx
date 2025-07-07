
import Image from "next/image";
import logo from "./public/logo.png";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-black text-white p-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image src={logo} alt="Spartan Logo" width={50} height={50} />
            <h1 className="text-2xl font-bold">Spartan Property Management</h1>
          </div>
          <div className="text-sm">
            <p>Email: info@txspartan.com</p>
            <p>Repairs: repairs@txspartan.com</p>
            <p>Call: 817-201-7304</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p>
            Spartan Property Management is a locally owned business based in Texas,
            providing full-service property management, maintenance, and rent
            collection solutions. Our goal is to offer reliable and affordable
            services for property owners and tenants.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">Our Services</h2>
          <ul className="list-disc pl-6">
            <li>Property Management</li>
            <li>Rental Marketing & Tenant Placement</li>
            <li>Maintenance & Repair Services</li>
            <li>Rent Collection & Accounting</li>
            <li>Tenant Support & Communication</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="mb-2">Have questions or need help with a property? Reach out today.</p>
          <ul className="pl-6">
            <li>Email: <a href="mailto:info@txspartan.com" className="text-blue-600">info@txspartan.com</a></li>
            <li>Repair Requests: <a href="mailto:repairs@txspartan.com" className="text-blue-600">repairs@txspartan.com</a></li>
            <li>Phone: 817-201-7304</li>
          </ul>
        </section>
      </main>

      <footer className="bg-black text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Spartan Property Management. All rights reserved.</p>
      </footer>
    </div>
  );
}
