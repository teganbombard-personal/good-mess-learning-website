// HubSpot form that receives Contact page submissions.
export const hubspot = {
  portalId: '247616920',
  formId: '52d59872-e05f-4ef5-a0c0-8ee09c414834',
};

type Ctx = { type: string; program?: string; session?: string; interest?: string };

// Action buttons all go to the Contact page. The details ride along in the link
// and prefill the form (including the hidden request_type / program / session fields).
export const contactLink = ({ type, program, session, interest }: Ctx) => {
  const q = new URLSearchParams({ type });
  if (program) q.set('program', program);
  if (session) q.set('session', session);
  if (interest) q.set('interest', interest);
  return `/contact/?${q.toString()}`;
};

export const facebookUrl = 'https://www.facebook.com/profile.php?id=61577531156589';
