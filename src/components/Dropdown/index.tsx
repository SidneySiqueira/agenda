import React from 'react';
import * as S from './styled';
import { Option, options } from '@/utills/options';

interface Props {
  group: string;
  handleInputChange: (value: string) => void;
}

const Dropdown = ({ handleInputChange }: Props) => {
  const handleOptionChange = (option: Option) => {
    handleInputChange(option.value);
  };

  const renderOptions = () => {
    return options.map((option) => (
      <S.BoxDropdown key={option.value} value={option.value}>
        {option.label}
      </S.BoxDropdown>
    ));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const option = options.find((opt) => opt.value === selectedValue);
    if (option) {
      handleOptionChange(option);
    }
  };

  return (
    <S.Box>
      <S.BoxSelect onChange={handleSelectChange}>
        <S.BoxDropdown>Selecione uma opção de grupo</S.BoxDropdown>
        {renderOptions()}
      </S.BoxSelect>
    </S.Box>
  );
};

export default Dropdown;