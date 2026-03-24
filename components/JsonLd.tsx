export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: '學無界 Study Without Borders',
    url: 'https://studywb.com',
    description: '專業泰國留學代辦，擁有 18 年經驗',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'service@studywb.com',
      contactType: 'customer service',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
