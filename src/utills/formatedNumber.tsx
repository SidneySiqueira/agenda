export default function formatPhoneNumber(phoneNumber: string) {
    const cleanedPhoneNumber = phoneNumber?.replace(/[^\d]/g, "");

  const match = cleanedPhoneNumber?.match(/^(\d{1})(\d{4})(\d{4})$/);

  if (match) {
    return `${match[1]}.${match[2]}-${match[3]}`;
  }

  return phoneNumber;
}