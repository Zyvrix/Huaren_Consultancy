import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import huarenLogo from "@/assets/huaren-logo-new.png";

interface Message {
  text: string;
  who: "bot" | "user";
}

interface ServiceItem {
  text: string;
  response: string;
}

type TreeNode = ServiceItem[] | string;

const tree: Record<string, TreeNode> = {
  "Service Section": [
    { text: "Business Advisory", response: "Thanks! Our advisory team will reach out with details." },
    { text: "Taxation", response: "A taxation specialist will contact you soon to discuss your needs." },
    { text: "Corporate Support Service", response: "We'll share our corporate support offerings shortly." },
    { text: "Transaction Advisory Service", response: "Our transaction advisory team will connect with you soon." },
    { text: "Outsourcing", response: "We'll send information about our outsourcing services." },
    { text: "Countrywise", response: "We'll provide country-wise service information." }
  ],
  "Customer Care": "Thank you for reaching Customer Care. Please email us at yashbisht575@gmail.com or call us at +91-7011057059, +91-7678630568.",
  "Know About Us": "We provide advisory, taxation, outsourcing and support services. Tell us how we can help you."
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [serviceOptions, setServiceOptions] = useState<ServiceItem[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    addMessage("Hi! How may I help you?", "bot");
    setOptions(Object.keys(tree));
  }, []);

  const addMessage = (text: string, who: "bot" | "user" = "bot") => {
    setMessages(prev => [...prev, { text, who }]);
  };

  const handleMainOption = (label: string) => {
    addMessage(label, "user");
    const node = tree[label];
    
    if (!node) {
      addMessage("Sorry, I didn't understand that.", "bot");
      setOptions(Object.keys(tree));
      setServiceOptions([]);
      return;
    }

    if (Array.isArray(node)) {
      addMessage("Please choose a service:", "bot");
      setServiceOptions(node);
      setOptions([]);
    } else {
      addMessage(node, "bot");
      setOptions(Object.keys(tree));
      setServiceOptions([]);
    }
  };

  const handleServiceOption = (item: ServiceItem) => {
    addMessage(item.text, "user");
    addMessage(item.response, "bot");
    setOptions(Object.keys(tree));
    setServiceOptions([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 min-h-screen flex items-center justify-center px-4">
        <div 
          className="relative w-full max-w-md h-[640px] rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(180deg, #0f141a 0%, #111821 100%)",
            border: "1px solid #1a2633"
          }}
        >
          {/* Background Logo */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity: 0.1 }}
          >
            <img 
              src={huarenLogo} 
              alt="" 
              className="w-56 h-56 object-contain"
            />
          </div>

          {/* Header */}
          <header 
            className="px-4 py-3 flex items-center gap-3 relative z-10"
            style={{
              background: "#0d141c80",
              backdropFilter: "saturate(140%) blur(4px)",
              borderBottom: "1px solid #182230"
            }}
          >
            <span 
              className="w-2 h-2 rounded-full"
              style={{ background: "#0A70CC" }}
              aria-hidden="true"
            />
            <div>
              <div className="font-semibold tracking-wide text-[#e7eef7]">
                Huaren Consultancy · Assistant
              </div>
            </div>
          </header>

          {/* Messages */}
          <section 
            className="flex-1 overflow-auto p-4 relative z-10 custom-scrollbar"
            style={{ 
              height: "calc(100% - 160px)",
              scrollBehavior: "smooth"
            }}
            aria-live="polite"
            aria-atomic="false"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[92%] my-2 px-3 py-2.5 rounded-xl ${
                  msg.who === "bot"
                    ? "bg-[#121b25]"
                    : "bg-[#0a1220] ml-auto border border-[#19314f]"
                }`}
                style={{
                  boxShadow: msg.who === "bot" ? "inset 0 0 0 1px #1a2633" : "none",
                  color: "#e7eef7"
                }}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </section>

          {/* Options */}
          <footer 
            className="p-2.5 grid gap-2 relative z-10"
            style={{
              background: "#0d141ce6",
              backdropFilter: "saturate(140%) blur(4px)",
              borderTop: "1px solid #182230"
            }}
            role="group"
            aria-label="Chat options"
          >
            {options.map(label => (
              <button
                key={label}
                onClick={() => handleMainOption(label)}
                className="appearance-none border border-transparent rounded-lg px-3 py-2.5 font-semibold text-white cursor-pointer transition-all duration-75 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#92c0ff55]"
                style={{
                  background: "linear-gradient(180deg, #0A70CC 0%, #095aa4 100%)",
                  boxShadow: "0 6px 16px rgba(10, 112, 204, 0.2)"
                }}
              >
                {label}
              </button>
            ))}
            {serviceOptions.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleServiceOption(item)}
                className="appearance-none border border-transparent rounded-lg px-3 py-2.5 font-semibold text-white cursor-pointer transition-all duration-75 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#92c0ff55]"
                style={{
                  background: "linear-gradient(180deg, #0A70CC 0%, #095aa4 100%)",
                  boxShadow: "0 6px 16px rgba(10, 112, 204, 0.2)"
                }}
              >
                {item.text}
              </button>
            ))}
          </footer>
        </div>
      </main>
      <Footer />

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #223246;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0c131a;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
