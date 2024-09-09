import { X } from '@phosphor-icons/react';
import { useFormContext } from 'react-hook-form';
import { FormValues } from '@/types/types';
import PropertyInputValidation from '@/components/common/PropertyInputValidation';

interface CashInputFieldProps {
  name: string;
  keyword:
    | {
        name: string;
        value: string;
        placeholder?: string;
      }
    | undefined;
  onClick: () => void;
}
const CashInputField = ({ name, keyword, onClick }: CashInputFieldProps) => {
  const {
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <>
      {keyword !== undefined && (
        <div className="flex flex-col gap-6">
          <label className="text-title-base font-bold text-static-default">{keyword.name}</label>
          <div className="flex gap-6 items-center">
            <PropertyInputValidation
              name={name}
              className="!mb-0"
              inputClassName="w-[279px]"
              forwardExtra="현금"
              trailingExtra="만원"
              errorMessage={errors.keywords?.message}
              numberOnly={true}>
              <span className="text-body-lg text-static-default text-nowrap">지급</span>
            </PropertyInputValidation>
            <div className="size-8" onClick={onClick}>
              <X weight="light" className="size-8 cursor-pointer text-assistive-default" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CashInputField;