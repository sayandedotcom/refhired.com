export function PagesHeading({ heading, desc }) {
  return (
    <div className="relative mx-auto max-w-xl text-center">
      <h1 className="font-heading font-semibold">{heading}</h1>
      <div className="mt-3 max-w-xl">
        <h5 className="font-heading">{desc}</h5>
      </div>
    </div>
  );
}
