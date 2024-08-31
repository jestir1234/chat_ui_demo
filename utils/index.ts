import { format, isToday, isYesterday } from 'date-fns';
import { IMockMessage } from '../types';

const MY_ID = 1;
export const getMyId = () => MY_ID;

export function formatDate(date: Date): string {
  const timeFormat = 'h:mm a';

  if (isToday(date)) {
    return `Today at ${format(date, timeFormat)}`;
  } else if (isYesterday(date)) {
    return `Yesterday at ${format(date, timeFormat)}`;
  } else {
    return format(date, 'MM/dd/yyyy h:mm a');
  }
}

export const extractUrl = (text: string): string | null => {
  const urlRegex = /https?:\/\/[^\s]+/g;
  const match = text.match(urlRegex);
  return match ? match[0] : null;
};

export const isImageUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const contentType = response.headers.get('Content-Type');
    return contentType?.startsWith('image/') || false;
  } catch (error) {
    console.error("Error checking image URL:", error);
    return false;
  }
};