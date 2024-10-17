import metadata from './block.json';
import { ValidatedTextInput } from '@woocommerce/blocks-checkout';
import { __ } from '@wordpress/i18n';
import { useState, useCallback } from 'react';

const { registerCheckoutBlock } = wc.blocksCheckout;

const Block = ({ children, checkoutExtensionData }) => {
  const [giftMessage, setGiftMessage] = useState('');
  const { setExtensionData } = checkoutExtensionData;

  const onInputChange = useCallback((value) => {
    setGiftMessage(value);
    setExtensionData('checkout-block-example', 'gift_message', value);
  }, [setGiftMessage, setExtensionData]);

  return (
    <div className={'example-fields'}>
      <ValidatedTextInput
        id="gift_message"
        type="text"
        required={false}
        className={'gift-message'}
        label={__('Gift Message', 'checkout-block-example')}
        value={giftMessage}
        onChange={onInputChange}
      />
    </div>
  );
};

registerCheckoutBlock({ metadata, component: Block });
