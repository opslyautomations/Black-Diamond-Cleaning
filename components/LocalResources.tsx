type ResourceLink = { label: string; href: string }

export default function LocalResources({
  city,
  links,
}: {
  city: string
  links: ResourceLink[]
}) {
  if (!links?.length) return null
  return (
    <section
      aria-labelledby="local-resources-heading"
      className="section-padding bg-brand-light"
    >
      <div className="section-container">
        <h2
          id="local-resources-heading"
          className="font-heading font-bold text-2xl text-brand-navy mb-2"
        >
          Local Resources in {city}
        </h2>
        <p className="text-brand-gray text-sm mb-6">
          Helpful local organizations and directories serving {city} and the surrounding area:
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-blue-700 underline underline-offset-4 hover:opacity-80 transition-opacity text-sm font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
