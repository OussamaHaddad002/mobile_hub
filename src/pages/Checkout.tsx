import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [billingType, setBillingType] = useState("same");
  const [newsOptIn, setNewsOptIn] = useState(false);

  // Mock data - replace with actual cart data later
  const subtotal = 73000;
  const shipping = 7000;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add order processing logic here
    toast.success("Order placed successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            <div className="mt-2">
              <Checkbox
                id="newsletter"
                checked={newsOptIn}
                onCheckedChange={(checked) => setNewsOptIn(checked as boolean)}
              />
              <Label htmlFor="newsletter" className="ml-2">
                Email me with news and offers
              </Label>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Delivery</h2>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select country/region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tunisia">Tunisia</SelectItem>
                {/* Add more countries as needed */}
              </SelectContent>
            </Select>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Input
                placeholder="First name (optional)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <Input
              placeholder="Address"
              className="mt-4"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              placeholder="Apartment, suite, etc. (optional)"
              className="mt-4"
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
            />

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Input
                placeholder="Postal code (optional)"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
              <Input
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <Input
              placeholder="Phone"
              className="mt-4"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <div className="mt-4">
              <Checkbox
                id="saveInfo"
                checked={saveInfo}
                onCheckedChange={(checked) => setSaveInfo(checked as boolean)}
              />
              <Label htmlFor="saveInfo" className="ml-2">
                Save this information for next time
              </Label>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Billing address</h2>
            <RadioGroup value={billingType} onValueChange={setBillingType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="same" id="same" />
                <Label htmlFor="same">Same as shipping address</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="different" id="different" />
                <Label htmlFor="different">Use a different billing address</Label>
              </div>
            </RadioGroup>
          </div>

          <Button onClick={handleSubmit} className="w-full">
            Complete order
          </Button>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>TND {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>TND {shipping.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-4 border-t">
              <span>Total</span>
              <span>TND {total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;