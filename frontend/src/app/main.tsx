import { createRoot } from 'react-dom/client';
import { App } from './app';
import { registerLocale } from 'react-datepicker';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ru } from 'date-fns/locale';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

registerLocale('ru', ru);

createRoot(document.getElementById('root')!).render(<App />);
