import React, { Fragment } from "react";
import { TContractTypes } from "../../types/contractType";
import { ConsumptionFormEnergyData } from "../constants/consumption";
import CardConsumptionForm from "./CardConsumptionForm";
import { TConsumptionForm } from "../../types/consumption";
import { UseFormReturn } from "react-hook-form";
import { ContractTypesEnum } from "../enums/contractType";

interface ManageCardConsumptionFormProps {
  selectedContractType: TContractTypes | undefined;
  form: UseFormReturn<any, any>;
}

const ManageCardConsumptionForm = ({
  selectedContractType,
  form,
}: ManageCardConsumptionFormProps) => {
  const renderFormProps = (): TConsumptionForm => {
    return selectedContractType === "Energy"
      ? ConsumptionFormEnergyData[0]
      : ConsumptionFormEnergyData[1];
  };

  return (
    <Fragment>
      {selectedContractType && (
        <Fragment>
          {selectedContractType === ContractTypesEnum.Dual ? (
            <Fragment>
              {ConsumptionFormEnergyData.map((item) => (
                <CardConsumptionForm key={item.type} {...item} form={form} />
              ))}
            </Fragment>
          ) : (
            <CardConsumptionForm {...renderFormProps()} form={form} />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ManageCardConsumptionForm;
