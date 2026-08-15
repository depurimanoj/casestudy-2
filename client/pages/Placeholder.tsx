interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 bg-brand-tint px-6 py-24 text-center">
      <h1 className="font-display text-4xl font-bold text-brand-navy sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-md text-lg text-muted-foreground">
        This page is coming soon. Keep chatting with Fusion to fill in this
        section whenever you're ready.
      </p>
    </div>
  );
}
