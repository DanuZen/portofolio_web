import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

// Validation schema with security best practices
const contactFormSchema = z.object({
  name: z.string().trim().min(2, {
    message: 'Nama harus minimal 2 karakter'
  }).max(100, {
    message: 'Nama harus kurang dari 100 karakter'
  }),
  email: z.string().trim().email({
    message: 'Masukkan alamat email yang valid'
  }).max(255, {
    message: 'Email harus kurang dari 255 karakter'
  }),
  projectType: z.enum(['editorial', 'commercial', 'personal'], {
    required_error: 'Pilih jenis proyek'
  }),
  message: z.string().trim().min(10, {
    message: 'Pesan harus minimal 10 karakter'
  }).max(1000, {
    message: 'Pesan harus kurang dari 1000 karakter'
  })
});
type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * Contact form component with validation and error handling
 * Uses react-hook-form + zod for type-safe validation
 */
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      projectType: undefined,
      message: ''
    }
  });
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Formspree integration - replace YOUR_FORM_ID with your actual form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          projectType: data.projectType,
          message: data.message,
          _subject: `New ${data.projectType} inquiry from ${data.name}`
        })
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Show success state
      setIsSuccess(true);
      form.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      form.setError('root', {
        message: 'Gagal mengirim pesan. Silakan coba lagi.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show success message
  if (isSuccess) {
    return <motion.div className="bg-accent border border-border rounded-sm p-8 text-center space-y-4" initial={{
      opacity: 0,
      scale: 0.95
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.5
    }}>
        <motion.div initial={{
        scale: 0
      }} animate={{
        scale: 1
      }} transition={{
        delay: 0.2,
        type: 'spring',
        stiffness: 200
      }}>
          <CheckCircle2 className="size-16 mx-auto text-green-600 dark:text-green-400" />
        </motion.div>
        <h3 className="text-2xl font-light tracking-wide">Pesan Terkirim!</h3>
        <p className="text-muted-foreground font-light leading-relaxed">
          Terima kasih telah menghubungi. Saya akan segera menghubungi Anda kembali.
        </p>
      </motion.div>;
  }
  return <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <FormField control={form.control} name="name" render={({
        field
      }) => <FormItem>
              <FormLabel className="text-sm font-light tracking-wide text-white/70">
                Nama
              </FormLabel>
              <FormControl>
                <Input placeholder="Nama lengkap Anda" className="font-light bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-red-500" {...field} />
              </FormControl>
              <FormMessage className="text-xs font-light text-red-400" />
            </FormItem>} />

        {/* Email Field */}
        <FormField control={form.control} name="email" render={({
        field
      }) => <FormItem>
              <FormLabel className="text-sm font-light tracking-wide text-white/70">
                Email
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="email.anda@contoh.com" className="font-light bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-red-500" {...field} />
              </FormControl>
              <FormMessage className="text-xs font-light text-red-400" />
            </FormItem>} />

        {/* Project Type Select */}
        <FormField control={form.control} name="projectType" render={({
        field
      }) => {}} />

        {/* Message Textarea */}
        <FormField control={form.control} name="message" render={({
        field
      }) => <FormItem>
              <FormLabel className="text-sm font-light tracking-wide text-white/70">
                Pesan
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Ceritakan tentang proyek Anda..." className="min-h-32 font-light resize-none bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-red-500" {...field} />
              </FormControl>
              <FormMessage className="text-xs font-light text-red-400" />
            </FormItem>} />

        {/* Root Error Message */}
        {form.formState.errors.root && <div className="text-sm text-destructive font-light">
            {form.formState.errors.root.message}
          </div>}

        {/* Submit Button */}
        <Button type="submit" className="w-full py-6 text-base font-light tracking-wide bg-red-600 hover:bg-red-700 text-white" disabled={isSubmitting}>
          {isSubmitting ? <>
              <Loader2 className="mr-2 size-5 animate-spin" />
              Mengirim...
            </> : 'Kirim Pesan'}
        </Button>
      </form>
    </Form>;
}