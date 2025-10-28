import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import contactImage from '@/assets/phone.jpg'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address').max(255),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
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
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
<main className="min-h-screen pt-24 pb-16 bg-[#FAF9F7]">
<div className="w-[74%] mx-auto overflow-hidden shadow-lg">
  <img
    src={contactImage}
    alt="Contact Banner"
    className="w-full h-[450px] object-cover object-center"
  />
</div>



      <div className="container mx-auto px-4 mt-6">
        {/* Header */}
        <section className="mb-16 text-center">
   <p
            style={{
              fontWeight: 300,
              color: "#31708F",
              fontSize: "28px",

            }}
          >                          Contact Us
          </p>
 <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6"
            style={{ color: "#414141",fontWeight:300,fontSize:'20px' }}
          >                Get in touch to arrange a consultation or ask any questions
          </p>
        </section>

      <div className="flex justify-center">
  <div className="max-w-3xl w-full space-y-8 text-center">
   <p
            style={{
              fontWeight: 300,
              color: "#31708F",
              fontSize: "28px",

            }}
          >                    Get In Touch</p>
 <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6"
            style={{ color: "#414141",fontWeight:300,fontSize:'20px' }}
          >         Whether you have a question about treatments, insurance, fees, or would like to 
      arrange a consultation, we're here to help. Most appointments are available within 
      1–2 weeks.
    </p>

    <Card className="glass-card mx-auto" style={{ backgroundColor: '#FAF9F7' }}>
      <CardContent className="p-6 space-y-6">
        <div className="flex items-start justify-center space-x-4">
          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="text-secondary" size={20} />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-primary mb-1">Location</h3>
            <p className=" text-sm">
              London, United Kingdom
            </p>
          </div>
        </div>

        {/* <div className="flex items-start justify-center space-x-4">
          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="text-secondary" size={20} />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-primary mb-1 ">Availability</h3>
            <p className=" text-sm">
              Appointments available within 1–2 weeks<br />
              Phone/video consultations within days
            </p>
          </div>
        </div> */}

        <div className="flex items-start justify-center space-x-4">
          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Mail className="text-secondary" size={20} />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-primary mb-1">Email</h3>
            <p className=" text-sm">
              contact@joshuafranklyn.co.uk
            </p>
          </div>
        </div>

        <div className="flex items-start justify-center space-x-4">
          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Phone className="text-secondary" size={20} />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-primary mb-1">Phone</h3>
            <p className=" text-sm">
              +44 1234 567890 <br /> Emergency: +44 1234 567891
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card className="glass-card bg-secondary/5 mx-auto bg-[#FAF9F7]">
      <CardContent className="p-6">
        <h3 className="font-semibold text-primary mb-3 ">Self-Referral Welcome</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          You can self-refer directly without needing a GP referral. Simply contact us with 
          a brief summary of your symptoms and relevant medical history. Our team will 
          review and contact you to arrange an appointment.
        </p>
      </CardContent>
    </Card>
  </div>
</div>

      

      {/* Two maps side by side */}
   <section className="py-16 bg-gradient-subtle">
  <div className="container mx-auto px-4">
    <div>
      <p
        className="text-center mb-8"
        style={{
          fontWeight: 300,
          color: "#31708F",
          fontSize: "28px",
        }}
      >
        Find Us
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* The New Foscote Hospital */}
        <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] flex flex-col">
          <iframe
            src="https://www.bing.com/maps/embed?h=450&w=800&cp=52.053349~-1.330978&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
            width="100%"
            height="100%"
            style={{ border: 0, pointerEvents: "none" }}
            scrolling="no"
            allowFullScreen={false}
            loading="lazy"
            title="The New Foscote Hospital Map"
          />
          <div className="bg-white py-3 text-center">
            <h3 className="text-lg font-semibold text-[#31708F]">
              The New Foscote Hospital
            </h3>
            <p className="text-sm text-gray-600">Banbury, United Kingdom</p>
          </div>
        </div>

        {/* Spire Harpenden Hospital */}
        <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] flex flex-col">
          <iframe
            src="https://www.bing.com/maps/embed?h=450&w=800&cp=51.828018~-0.360145&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
            width="100%"
            height="100%"
            style={{ border: 0, pointerEvents: "none" }}
            scrolling="no"
            allowFullScreen={false}
            loading="lazy"
            title="Spire Harpenden Hospital Map"
          />
          <div className="bg-white py-3 text-center">
            <h3 className="text-lg font-semibold text-[#31708F]">
              Spire Harpenden Hospital
            </h3>
            <p className="text-sm text-gray-600">Harpenden, United Kingdom</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    {/* Single Centered Map */}
{/* <section className="py-16 bg-gradient-subtle">
  <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
    Find Us
  </h2>

  <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
    <Card className="w-full rounded-none overflow-hidden shadow-2xl">
      <CardContent className="p-0">
        <iframe
          src="https://www.bing.com/maps/embed?h=450&w=800&cp=52.053349~-1.330978&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
          width="100%"
          height="550"
          style={{ border: 0 }}
          scrolling="no"
          allowFullScreen={false}
          loading="lazy"
          title="The New Foscote Hospital Map"
        />
      </CardContent>
    </Card>
  </div>
</section>




    */}

      </div>
    </main>
  );
};

export default Contact;
