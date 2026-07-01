// Homepage FAQ content. Edit the answers directly — this is the only place
// this copy lives. Written in Eliya's voice as a starting draft; replace with
// specifics (exact turnaround days, rates, etc.) whenever ready.

export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: 'What kind of projects do you take on?',
    answer:
      'Mostly hotels and resorts, outdoor brands, and travel or commercial campaigns — anywhere a real story needs to be shot and edited well. If you\'re unsure whether your project fits, reach out and ask.',
  },
  {
    question: 'Do you travel for projects?',
    answer:
      'Yes. I\'m based in Israel and work internationally — travel and logistics are worked out project by project.',
  },
  {
    question: 'What\'s included in a typical project?',
    answer:
      'Direction, filming, editing, color grading, and sound design — end to end, led by me. The exact scope depends on the brief, and we\'ll define deliverables together before we start.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'It depends on scope — a short piece can turn around in a couple of weeks; a larger campaign takes longer. Timelines are confirmed once we\'ve scoped the project.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'Every project is quoted individually based on scope, location, and deliverables. Send a message with the details and I\'ll get back to you with a quote.',
  },
  {
    question: 'Can I get raw footage or extra edits after delivery?',
    answer:
      'Yes — raw footage and additional edits can be arranged. Usage rights and revisions are agreed on before the project starts, so there are no surprises at delivery.',
  },
];
