import React, { useMemo } from 'react';
import { useFocusIdx } from 'easy-email-editor';
import { SelectField, TextField } from '../../../components/Form';
import { useTranslation } from '@extensions/hooks/useTranslation';

const options = [
  {
    value: 'normal',
    label: 'Normal',
  },
  {
    value: 'bold',
    label: 'Bold',
  },
  {
    value: '100',
    label: '100',
  },
  {
    value: '200',
    label: '200',
  },
  {
    value: '300',
    label: '300',
  },
  {
    value: '400',
    label: '400',
  },
  {
    value: '500',
    label: '500',
  },
  {
    value: '600',
    label: '600',
  },
  {
    value: '700',
    label: '700',
  },
  {
    value: '800',
    label: '800',
  },
  {
    value: '900',
    label: '900',
  },
];

export function FontWeight({ name }: { name?: string; }) {
  const { focusIdx } = useFocusIdx();
  const { t } = useTranslation();

  return useMemo(() => {
    return (
      <SelectField
        label={t('attributes.fontWeight')}
        name={name || `${focusIdx}.attributes.font-weight`}
        options={options}
      />
    );
  }, [focusIdx, name, t]);
}
