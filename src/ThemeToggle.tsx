import { Moon, Sun } from 'lucide-react';
import type { Theme } from './hooks/useTheme';

type Props = {
  theme: Theme;
  onToggle: () => void;
  className?: string;
};

export default function ThemeToggle({ theme, onToggle, className }: Props) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-900 ${className || ''}`}
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      <span className="select-none">{isDark ? 'Dark' : 'Light'}</span>
    </button>
  );
}
