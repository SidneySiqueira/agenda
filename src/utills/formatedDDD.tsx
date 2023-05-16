export default function formatDDD(phoneNumber: string) {
    const match = phoneNumber?.match(/^(\d{2})$/);

    if (match) {
      return `(${match[1]})`;
    }
  
    return phoneNumber;
  }