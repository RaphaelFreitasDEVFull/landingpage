import { Button } from '@/app/components/button'
import TitlePage from '@/app/components/title-page'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'

const ContactForm = () => {
  return (
    <section className="flex flex-col gap-10 container py-12 ">
      <TitlePage
        title="Contato"
        subtitle="Conecte-se conosco: Vamos discutir suas necessidades de Marketing Digital"
      />
      <div className="flex w-full items-center justify-between bg-[#f5f5f5] rounded-2xl p-12">
        <Tabs defaultValue="account" className="w-[500px]">
          <TabsList>
            <TabsTrigger value="account">Diga um Oi</TabsTrigger>
            <TabsTrigger value="password">Faça uma cotação</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="flex flex-col gap-4 my-8">
            <div className="flex flex-col gap-2">
              <Label>Nome *</Label>
              <Input placeholder="Nome" className="bg-white p-6" />
            </div>
            <div>
              <Label>Email *</Label>
              <Input
                placeholder="Email"
                type="Email"
                className="bg-white p-6"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Mensagem *</Label>
              <Textarea
                placeholder="Escreva sua mensagem aqui"
                id="message"
                className="resize-none h-[100px] bg-white"
              />
            </div>
            <Button className="bg-black text-white font-medium">
              Enviar Mensagem
            </Button>
          </TabsContent>
          <TabsContent value="password" className="flex flex-col gap-4 my-8">
            <div className="flex flex-col gap-2">
              <Label>Nome *</Label>
              <Input placeholder="Nome" className="bg-white p-6" />
            </div>
            <div>
              <Label>Email *</Label>
              <Input
                placeholder="Email"
                type="Email"
                className="bg-white p-6"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Mensagem *</Label>
              <Textarea
                placeholder="Escreva sua mensagem aqui"
                id="message"
                className="resize-none h-[100px] bg-white"
              />
            </div>
            <Button className="bg-black text-white font-medium">
              Enviar Mensagem
            </Button>
          </TabsContent>
        </Tabs>
        <div className="hidden lg:inline-block">
          <Image
            src={'/images/img-form.png'}
            width={250}
            height={250}
            alt="img form"
            className="mr-[-40px] "
          />
        </div>
      </div>
    </section>
  )
}

export default ContactForm
