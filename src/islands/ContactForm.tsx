import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="border border-brand/40 bg-paper px-5 py-6 text-body">
        Recibimos tus antecedentes. El equipo revisará la información y
        definirá cómo continuar.
      </p>
    );
  }

  const field =
    "w-full border border-line bg-white px-3 py-3 text-ink outline-none focus:border-brand";

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate={false}>
      <label className="grid gap-1 text-sm text-ink">
        Nombre
        <input className={field} name="nombre" type="text" required autoComplete="name" />
      </label>
      <label className="grid gap-1 text-sm text-ink">
        Teléfono
        <input className={field} name="telefono" type="tel" required autoComplete="tel" />
      </label>
      <label className="grid gap-1 text-sm text-ink">
        Email
        <input className={field} name="email" type="email" required autoComplete="email" />
      </label>
      <label className="grid gap-1 text-sm text-ink">
        Texto
        <textarea className={`${field} min-h-32`} name="texto" required />
      </label>
      <button
        type="submit"
        className="justify-self-start border border-brand bg-brand px-6 py-3 text-sm font-medium uppercase tracking-wide text-white hover:bg-brand-dark"
      >
        Enviar
      </button>
    </form>
  );
}
