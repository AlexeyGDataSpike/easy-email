import React, { useMemo } from 'react';
import { useFocusIdx } from 'easy-email-editor';
import { AutoCompleteField } from '../../../components/Form';
import { useFontFamily } from '@extensions/hooks/useFontFamily';

export function FontFamily({ name, label = 'Font family' }: { name?: string; label?: string }) {
  const { focusIdx } = useFocusIdx();
  const { fontList } = useFontFamily();

  return useMemo(() => {
    return (
      <AutoCompleteField
        style={{ minWidth: 100, flex: 1 }}
        showSearch
        label={label}
        name={name || `${focusIdx}.attributes.font-family`}
        options={fontList}
      />
    );
  }, [focusIdx, fontList, name]);
}
