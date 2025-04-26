export const useValidationInputTypes = () => {
  const validarDNI = (value: string) => {
    const regex = /^\d{8}[A-Za-z]$/;
    return regex.test(value) || "DNI no válido";
  };

  const validarCIF = (value: string) => {
    const regex = /^[A-Za-z]\d{8}[A-Za-z]$/;
    return regex.test(value) || "CIF no válido";
  };

  const validarNIE = (value: string) => {
    const regex = /^[A-Za-z]\d{7}[A-Za-z]$/;
    return regex.test(value) || "NIE no válido";
  };

  const validarCUPS = (value: string) => {
    const regex = /^ES\d{16}[A-Za-z]{2}$/;
    return regex.test(value) || "CUPS no válido";
  };

  const validarFeeEuroMW = (value: string) => {
    const regex = /^\d{3}$/;
    const numero = parseFloat(value);
    return (
      (regex.test(value) && numero >= 10 && numero <= 100) ||
      "Fee Euro/MW no válido (debe ser un número entre 10 y 100)"
    );
  };

  const validarConsumoKWAno = (value: string) => {
    const regex = /^\d+$/;
    return regex.test(value) || "Consumo KW/Año no válido (solo números)";
  };

  const validarIBAN = (value: string) => {
    const regex = /^ES\d{22}$/;
    return regex.test(value) || "IBAN no válido";
  };

  return {
    validarCIF,
    validarCUPS,
    validarConsumoKWAno,
    validarFeeEuroMW,
    validarNIE,
    validarDNI,
    validarIBAN,
  };
};
