import React, { useCallback, useState } from 'react';
import { Padding } from '../../attributes/Padding';
import { Border } from '../../attributes/Border';
import { BackgroundColor } from '../../attributes/BackgroundColor';
import { Color } from '../../attributes/Color';
import { Link } from '../../attributes/Link';
import { Width } from '../../attributes/Width';
import { ContainerBackgroundColor } from '../../attributes/ContainerBackgroundColor';
import { Align } from '../../attributes/Align';
import { FontSize } from '../../attributes/FontSize';
import { FontStyle } from '../../attributes/FontStyle';
import { FontWeight } from '../../attributes/FontWeight';
import { FontFamily } from '../../attributes/FontFamily';
import { TextDecoration } from '../../attributes/TextDecoration';
import { LineHeight } from '../../attributes/LineHeight';
import { LetterSpacing } from '../../attributes/LetterSpacing';
import { Collapse, Grid, Popover, Space } from '@arco-design/web-react';
import { TextField } from '../../../../components/Form';
import { IconFont, useEditorProps, useFocusIdx } from 'easy-email-editor';
import { AttributesPanelWrapper } from '../../attributes/AttributesPanelWrapper';
import { MergeTags } from '../../attributes';
import { useField } from 'react-final-form';
import { Button as ArcoButton } from '@arco-design/web-react';
import { ClassName } from '../../attributes/ClassName';
import { CollapseWrapper } from '../../attributes/CollapseWrapper';
import { useTranslation } from '@extensions/hooks/useTranslation';

export function Button() {
  const { t } = useTranslation();
  const { focusIdx } = useFocusIdx();
  const { input } = useField(`${focusIdx}.data.value.content`, {
    parse: (v) => v,
  });

  const { mergeTags } = useEditorProps();

  return (
    <AttributesPanelWrapper>
      <CollapseWrapper defaultActiveKey={['-1', '0', '1', '2', '3']}>
        <Collapse.Item name='-1' header={t('button.setting')}>
          <Space direction='vertical'>
            <TextField
              label={(
                <Space>
                  <span>Content</span>
                  {mergeTags && (
                    <Popover
                      trigger='click'
                      content={(
                        <MergeTags
                          value={input.value}
                          onChange={input.onChange}
                        />
                      )}
                    >
                      <ArcoButton
                        type='text'
                        icon={<IconFont iconName='icon-merge-tags' />}
                      />
                    </Popover>
                  )}
                </Space>
              )}
              name={`${focusIdx}.data.value.content`}
            />
            <Link />
          </Space>
        </Collapse.Item>

        <Collapse.Item name='0' header={t('button.dimension')}>
          <Space direction='vertical'>
            <Grid.Row>
              <Grid.Col span={11}>
                <Width />
              </Grid.Col>
              <Grid.Col offset={1} span={11}>
                <FontWeight />
              </Grid.Col>
            </Grid.Row>

            <Padding attributeName='padding' />
            <Padding title={t('button.innerPadding')} attributeName='inner-padding' />
          </Space>
        </Collapse.Item>

        <Collapse.Item name='1' header={t('button.color')}>
          <Space direction='vertical'>
            <Grid.Row>
              <Grid.Col span={11}>
                <Color title={t('button.textColor')} />
              </Grid.Col>
              <Grid.Col offset={1} span={11}>
                <BackgroundColor title={t('button.buttonColor')} />
              </Grid.Col>
              <Grid.Col span={11}>
                <ContainerBackgroundColor title={t('button.backgroundColor')} />
              </Grid.Col>
            </Grid.Row>
          </Space>
        </Collapse.Item>

        <Collapse.Item name='2' header={t('button.typography')}>
          <Space direction='vertical'>
            <Grid.Row>
              <Grid.Col span={11}>
                <FontFamily />
              </Grid.Col>
              <Grid.Col offset={1} span={11}>
                <FontSize />
              </Grid.Col>
            </Grid.Row>

            <Grid.Row>
              <Grid.Col span={11}>
                <FontWeight />
              </Grid.Col>
              <Grid.Col offset={1} span={11}>
                <LineHeight />
              </Grid.Col>
            </Grid.Row>

            <Grid.Row>
              <Grid.Col span={11}>
                <TextDecoration />
              </Grid.Col>
              <Grid.Col offset={1} span={11}>
                <LetterSpacing />
              </Grid.Col>
            </Grid.Row>
            <Align />

            <FontStyle />
          </Space>
        </Collapse.Item>

        <Collapse.Item name='3' header={t('button.border')}>
          <Border />
        </Collapse.Item>
        <Collapse.Item name='4' header={t('button.extra')}>
          <Grid.Col span={24}>
            <ClassName />
          </Grid.Col>
        </Collapse.Item>
      </CollapseWrapper>
    </AttributesPanelWrapper>
  );
}
