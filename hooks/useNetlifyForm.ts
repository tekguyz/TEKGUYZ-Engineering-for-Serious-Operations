import { useState } from 'react';

export function useNetlifyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (formData: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/forms.html', {
        method: 'POST',
        headers: { 
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: formData
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, isSuccess, error, setError, submitForm };
}
