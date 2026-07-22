type JsonLdProps = {
  data: Record<string, unknown>;
  id: string;
};

export default function JsonLd({ data, id }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      id={id}
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: the JSON is serialized and escaped above.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
