// A collection of helper functions.
export function useHelpers() {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();
  function clearAllCookies(): void {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  }

  function removeBodyClass(className: string): void {
    const body = document.querySelector('body');
    body?.classList.remove(className);
  }

  function addBodyClass(className: string): void {
    const body = document.querySelector('body');
    body?.classList.add(className);
  }

  function toggleBodyClass(className: string): void {
    const body = document.querySelector('body');
    body?.classList.contains(className) ? body.classList.remove(className) : body?.classList.add(className);
  }

  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    altImage: 'v1704485812/placeholder_evluea.jpg',
    formatDate,
    addBodyClass,
    removeBodyClass,
    toggleBodyClass,
    scrollToTop,
    clearAllCookies
  };
}