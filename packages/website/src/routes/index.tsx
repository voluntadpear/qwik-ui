import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <div>Hey</div>;
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
