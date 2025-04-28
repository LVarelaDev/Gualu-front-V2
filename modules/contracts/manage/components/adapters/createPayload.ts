import { ContractPayload } from "@/modules/core/interfaces/contract/contract";

export const createPayload = (data: any): ContractPayload => {
  console.log("data", data);
  return {
    accessTariffId: +data.accessTariffId,
    client: {
      address: data.address,
      cp: data.postalCode,
      email: data.email,
      name: data.name,
      phone: data.phone,
      iban: data.ibanClient,
      nif: data.nif,
      population: data.population,
      province: data.province,
      type: data.clientType,
      typeNif: data.typeNif,
    },
    commercialId: 5,
    companyId: 1,
    conceptId: +data.conceptId,
    consumptionEnergy: {
      consumption: data.consumptionEnergy,
      cups: data.cupsEnergy,
      fee: data.feeEnergy,
      iban: data.ibanEnergy,
    },
    consumptionGas: null,
    contractType: data.contractType,
    internsObservation: data.internsObservation,
    operation: data.operationType,
    observations: data.observations,
    planId: +data.planId,
    powerOne: +data.powerOne,
    powerTwo: +data.powerTwo,
    powerThree: +data.powerThree,
    powerFive: +data.powerFive,
    powerFour: +data.powerFour,
    powerSix: +data.powerSix,
    statusId: 1,
    address: data.addresClient ? data.address : data.addressContract,
    postalCode: data.addresClient ? data.postalCode : data.postalCodeContract,
    population: data.addresClient ? data.population : data.populationContract,
    province: data.addresClient ? data.province : data.provinceContract,
  };
};
