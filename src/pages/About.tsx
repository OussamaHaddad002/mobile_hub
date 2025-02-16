export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About MobileHub</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Welcome to MobileHub, your premier destination for mobile phones and accessories. We pride ourselves on offering the latest technology with exceptional customer service.
        </p>
        <div className="grid md:grid-cols-2 gap-8 my-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>To provide our customers with the best mobile technology solutions while ensuring an outstanding shopping experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside">
              <li>Customer Satisfaction</li>
              <li>Quality Products</li>
              <li>Competitive Pricing</li>
              <li>Expert Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}