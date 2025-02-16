import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I help you today?", isUser: false },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: message, isUser: true }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you for your message. Our team will get back to you soon.",
          isUser: false,
        },
      ]);
    }, 1000);

    setMessage("");
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        className="fixed bottom-4 right-4 rounded-full h-12 w-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6 animate-pulse" />
        )}
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80 h-96 flex flex-col shadow-xl animate-fade-in">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Chat with Us
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <div className="flex-grow overflow-y-auto space-y-4 mb-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow"
              />
              <Button type="submit">Send</Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
}