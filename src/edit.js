import { ValidatedTextInput } from '@woocommerce/blocks-checkout';
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <div className={'example-fields'}>
        <ValidatedTextInput
          id="gift_message"
          type="text"
          required={false}
          className={'gift-message'}
          label={__('Gift Message', 'checkout-block-example')}
          value={''}
        />
      </div>
    </div>
  );
};
