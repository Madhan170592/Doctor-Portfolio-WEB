import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import contactImage from "@/assets/contactus.png";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000),
});

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: [
      "Oxford Private Consulting Rooms",
      "John Radcliffe Hospital",
      "Headley Way, Oxford",
      "OX3 9DU, United Kingdom",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+44 1234 567890", "Emergency: +44 1234 567891"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@joshuafranklyn.co.uk"],
  },
  {
    icon: Clock,
    title: "Clinic Hours",
    details: [
      "Monday - Friday: 9:00 AM - 5:00 PM",
      "Saturday: 9:00 AM - 1:00 PM",
      "Sunday: Closed",
    ],
  },
];

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you soon.",
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <main className="bg-white min-h-screen flex justify-center items-center ">
      <div className="w-[95%] bg-[#FAF9F7] min-h-screen py-12 flex items-center">
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <div className="pl-[12px]">
            {/* Banner */}

            {/* Banner */}
            <div className="relative overflow-hidden mb-6">
              <img
                src={contactImage}
                alt="Contact Banner"
                className="w-full h-[350px] object-cover object-center"
              />
            </div>
            <div></div>
            <div className="bottom-4 flex flex-col md:flex-row gap-6 md:gap-16 mt-8">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <Phone className="text-[#1E5089]" />
                <a
                  href="tel:01295 584620"
                  className="text-[#1E5089] font-medium hover:underline"
                >
                  01295 584620
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail className="text-[#1E5089]" />
                <a
                  href="mailto:mrfranklyn@theclinic.co.uk"
                  className="text-[#1E5089] font-medium hover:underline"
                >
                  mrfranklyn@theclinic.co.uk
                </a>
              </div>
            </div>

            {/* Two maps side by side */}
            <section className="py-16">
              <div>
                <p
                  className="text-center mb-8"
                  style={{
                    fontWeight: 300,
                    color: "#1E5089",
                    fontSize: "28px",
                  }}
                >
                  Find Us
                </p>

                <div className="w-full">
                  {/* 🏥 Spire Harpenden Hospital */}
                  <div className="overflow-hidden shadow-2xl h-[500px] flex flex-col">
                    {/* Desktop - Bing Maps */}
                    {/* <div className="hidden md:block w-full h-full">
                      <iframe
                        src="https://www.bing.com/maps/embed?h=450&w=800&cp=51.828018~-0.360145&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
                        width="200%"
                        height="100%"
                        style={{ border: 0 }}
                        scrolling="no"
                        allowFullScreen={true}
                        loading="lazy"
                        title="Spire Harpenden Hospital Map"
                      />
                    </div> */}
                    <div className="hidden md:block w-full h-[500px]">
                      <iframe
                        src="https://www.bing.com/maps/embed?h=500&w=1920&cp=51.828018~-0.360145&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        scrolling="no"
                        allowFullScreen={true}
                        loading="lazy"
                        title="Spire Harpenden Hospital Map"
                      />
                    </div>

                    {/* Mobile - Google Maps */}
                    <div className="block md:hidden w-full h-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.654321098765!2d-0.360145!3d51.828018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQ5JzQwLjkiTiAwwrAyMSczNi41Ilc!5e0!3m2!1sen!2suk!4v1234567891"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Spire Harpenden Hospital Map"
                      />
                    </div>

                    <div className="bg-white py-3 text-center">
                      <a
                        href="https://www.spirehealthcare.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-[#1E5089] hover:underline hover:text-[#25576b] transition-colors"
                      >
                        <p
                          className="text-center"
                          style={{
                            fontWeight: 300,
                            color: "#1E5089",
                            fontSize: "17px",
                          }}
                        >
                          Spire Harpenden Hospital
                        </p>
                      </a>
                      <p className="text-sm text-gray-600">
                        Harpenden, United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
