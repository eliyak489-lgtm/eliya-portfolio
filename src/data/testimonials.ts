// Homepage testimonials. Placeholder quotes for now — swap in real client
// testimonials as they come in, keeping the same shape.

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Eliya didn't just film our resort — he captured how it feels to be there. It's the first thing we show new guests before they arrive.",
    name: 'Placeholder Client',
    role: 'Hotel & Resort Brand',
  },
  {
    quote:
      'We handed him a rough brief and got back a film that felt like ours, only better. Every shot had a reason.',
    name: 'Placeholder Client',
    role: 'Outdoor Brand',
  },
  {
    quote:
      "Fast, calm, and completely on brief. The kind of collaborator you don't have to manage.",
    name: 'Placeholder Client',
    role: 'Travel Agency',
  },
];
