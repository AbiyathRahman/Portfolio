const DEFAULT_CONTACT_ENDPOINT =
  'https://portfolio-aab7f-default-rtdb.firebaseio.com/messages.json';

const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_API_URL ?? DEFAULT_CONTACT_ENDPOINT;

export async function submitContactMessage(payload) {
  if (!CONTACT_ENDPOINT) {
    console.info('Contact message (local only):', payload);
    return { stored: false };
  }

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Contact request failed with status ${response.status}`);
  }

  return { stored: true };
}
