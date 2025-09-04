import { DateRangePicker } from "@heroui/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import type { DateValue } from "@react-types/datepicker";
import type { RangeValue } from "@react-types/shared";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface DateRangePickerFieldProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  placeholder?: string;
  description?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  className?: string;
  errorMessage?: string;
}

const InputRangeDate = <TFieldValues extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  description,
  isRequired = false,
  isDisabled = false,
  className = "",
  errorMessage,
}: DateRangePickerFieldProps<TFieldValues>) => {
  // Función para convertir string a objeto de fecha
  const parseStringToDateRange = (value: any): RangeValue<DateValue> | null => {
    if (!value) return null;

    try {
      return {
        start: parseDate(value.start),
        end: parseDate(value.end),
      };
    } catch (e) {
      console.error("Error parsing date range:", e);
      return null;
    }
  };

  // Función para convertir objeto de fecha a string
  const parseDateRangeToString = (value: RangeValue<DateValue> | null) => {
    if (!value) return null;

    try {
      return {
        start: (value.start as CalendarDate).toString(),
        end: (value.end as CalendarDate).toString(),
      };
    } catch (e) {
      console.error("Error converting date range to string:", e);
      return null;
    }
  };

  return (
    <div className={className}>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value, ref, ...fieldProps },
          fieldState: { error },
        }) => (
          <DateRangePicker
            {...fieldProps}
            variant="bordered"
            label={label}
            description={description}
            isRequired={isRequired}
            isDisabled={isDisabled}
            value={parseStringToDateRange(value)}
            onChange={(dateRange) => {
              onChange(parseDateRangeToString(dateRange));
            }}
            errorMessage={error?.message || errorMessage}
            isInvalid={!!error}
          />
        )}
      />
    </div>
  );
};
export default InputRangeDate;
