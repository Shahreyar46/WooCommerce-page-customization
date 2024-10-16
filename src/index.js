
//indes.js
import { registerBlockType } from '@wordpress/blocks';
import { SVG } from '@wordpress/components';
import { Edit } from './edit';
import metadata from './block.json';


registerBlockType(metadata, {
    icon: {
        src: (
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
            </svg>
        ),
        foreground: '#874FB9',
    },
    edit: Edit
});