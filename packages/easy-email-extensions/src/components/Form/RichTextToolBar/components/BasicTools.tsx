import { IconFont, useBlock, useEditorProps, useFocusIdx } from 'easy-email-editor';
import { useAddToCollection } from '@extensions/hooks/useAddToCollection';
import { getParentIdx } from 'easy-email-core';
import React from 'react';
import { ToolItem } from './ToolItem';
import { useTranslation } from '@extensions/hooks/useTranslation';

export function BasicTools() {
  const { copyBlock, removeBlock } = useBlock();
  const { focusIdx, setFocusIdx } = useFocusIdx();
  const { modal, setModalVisible } = useAddToCollection();
  const { onAddCollection } = useEditorProps();
  const { t } = useTranslation();

  const handleAddToCollection = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setModalVisible(true);
  };

  const handleCopy: React.MouseEventHandler<any> = (ev) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    copyBlock(focusIdx);
  };

  const handleDelete = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    removeBlock(focusIdx);
  };

  const handleSelectParent = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setFocusIdx(getParentIdx(focusIdx)!);
  };

  return (
    <div style={{ marginRight: 40 }}>
      <span style={{ position: 'relative', marginRight: 10, color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, San Francisco, Segoe UI' }}>Text</span>
      <ToolItem
        onClick={handleSelectParent}
        title={t('basicTool.selectParentBlock')}
        icon={<IconFont iconName='icon-back-parent' />}
      />
      <ToolItem
        onClick={handleCopy}
        title={t('basicTool.copy')}
        icon={<IconFont iconName='icon-copy' />}
      />
      {
        onAddCollection && (
          <ToolItem
            onClick={handleAddToCollection}
            title={t('basicTool.addToCollection')}
            icon={<IconFont iconName='icon-collection' />}
          />
        )
      }
      <ToolItem
        onClick={handleDelete}
        title={t('basicTool.delete')}
        icon={<IconFont iconName='icon-delete' />}
      />
      {modal}
    </div>
  );
}
