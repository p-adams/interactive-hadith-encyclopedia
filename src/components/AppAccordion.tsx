function AppAccordion({
  children,
  text,
}: {
  children: JSX.Element;
  text: string;
}) {
  return (
    <details className="app-accordion-container">
      <summary style={{ direction: "rtl" }}>{text}</summary>
      {children}
    </details>
  );
}

export default AppAccordion;
