import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDate(date: string | Date) {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return format(dateObj, 'dd MMM yyyy', {
    locale: ptBR,
  });
}
