import { Dispatch, SetStateAction, useEffect } from "react";

export const useSelectedAccessTariff = (
  accessTariffId: string,
  setSelectedAccessTariff: Dispatch<SetStateAction<string | null>>,
  accessTariffs: any[]
) => {
  useEffect(() => {
    if (accessTariffId && accessTariffId !== "") {
      setSelectedAccessTariff(
        accessTariffs.find((x) => x.id === +accessTariffId).name
      );
    }
  }, [accessTariffId]);
};
