export function useDecisionForm(form, setForm) {
  const updateField = (field) => (event) => {
    setForm((prev) => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  return { updateField };
}
