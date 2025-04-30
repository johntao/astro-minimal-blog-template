import { useStore } from '@nanostores/preact';
import { persistentAtom } from '@nanostores/persistent';

const isPanelVisibleStore = persistentAtom('panelVisible', false, {
  encode: JSON.stringify,
  decode: JSON.parse,
});
function togglePanel() {
  isPanelVisibleStore.set(!isPanelVisibleStore.get());
}
export function AboutMe() {
  const isPanelVisible = useStore(isPanelVisibleStore);
  return (
    <div class="bg-white rounded-lg shadow-sm p-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-semibold">About Me</h2>
        <button onClick={togglePanel}
          aria-label="Toggle about me section"
          class="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
        >
          <span class="toggle-text">{isPanelVisible ? 'Hide' : 'Show'}</span>
        </button>
      </div>
      {isPanelVisible && (
        <div class="prose">
          <p>Hello! I'm a passionate blogger and developer who loves to share insights about technology, programming, and web development.</p>
          <p>This blog is my platform to document my journey, share what I've learned, and hopefully help others along the way.</p>
        </div>
      )}
    </div>
  );
}