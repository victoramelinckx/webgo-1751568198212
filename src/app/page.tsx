
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transformamos tu negocio con una web rápida y soporte continuo, para que vendas sin complicaciones." cta1="Comienza Ahora" />
<How step1Title="Contacta a WebGo" step1Desc="Habla con nosotros sobre tu negocio." step2Title="Creamos tu Web" step2Desc="Lanzamos tu sitio en 24 horas." step3Title="Soporte 24/7" step3Desc="Estamos disponibles para ayudarte siempre." />
<Aboutus headline="WebGo: Ventas Digitales Simplificadas" subheadline="Transformamos recomendaciones en ventas online, sin esfuerzo para ti." beneficiotitulo1="Digitaliza Rápido" beneficio1="Rapidez, compromiso, innovación impulsan ventas." beneficiotitulo2="Ahorra Tiempo" beneficio2="Gestión web sin complicaciones." />
<Services heading="Digitaliza Tu Negocio en 24 Horas" description="Rapidez, compromiso, innovación. No más ventas solo por recomendación." services={[{"name":"Desarrollo Express","icon":"rocket","description":"Web de ventas lista en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Optimización SEO","icon":"search","description":"Atrae más tráfico con WebGo."},{"name":"Mantenimiento","icon":"tools","description":"Mantén tu web siempre actualizada."},{"name":"Gestión de Contenido","icon":"pencil","description":"Asegura contenido relevante y atractivo."},{"name":"Integración de eCommerce","icon":"shopping-cart","description":"Vende online de manera eficiente."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en realidades digitales de alto impacto." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas si solo vendo por recomendación?","respuesta":"WebGo te ayuda a crear una presencia online rápida y eficaz. Te diseñamos una web que convierte visitas en clientes, para que no dependas solo de recomendaciones y puedas expandir tu negocio fácilmente."},{"pregunta":"No tengo tiempo para gestionar un sitio web. ¿Qué ofrece WebGo para facilitarme esto?","respuesta":"En WebGo nos encargamos de todo. Desde el diseño hasta el mantenimiento de tu página. Así, tú puedes concentrarte en tu negocio mientras nosotros nos ocupamos de tu presencia online."},{"pregunta":"¿Cuáles son los beneficios de trabajar con WebGo en lugar de hacerlo por mi cuenta?","respuesta":"Con WebGo, recibes un servicio rápido y comprometido, con innovaciones que te mantienen un paso adelante. Ahorras tiempo y obtienes resultados desde el primer día, sin complicaciones."},{"pregunta":"¿Cómo asegura WebGo que mi sitio web generará ventas?","respuesta":"WebGo emplea técnicas probadas de SEO y diseño web para atraer a los clientes adecuados. Optimizamos tu sitio para que sea visible en los motores de búsqueda y atractivo para los visitantes, convirtiendo clics en ventas."},{"pregunta":"¿Es caro el servicio de WebGo para un pequeño negocio?","respuesta":"WebGo ofrece soluciones asequibles adaptadas a pequeños negocios. Nuestro enfoque en rapidez, compromiso e innovación asegura que obtienes el mejor valor por tu inversión, impulsando tus ventas online sin romper tu presupuesto."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio: ¡Digitaliza Tus Ventas Ahora!" 
                      description="No pierdas más clientes. Con WebGo, ofrecemos rapidez, compromiso e innovación para llevar tu negocio a internet y multiplicar tus ventas sin que te preocupes por el tiempo."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
